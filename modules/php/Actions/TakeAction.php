<?php

namespace Bga\Games\MollyHouse\Actions;

use Bga\Games\MollyHouse\Boilerplate\Core\Engine;
use Bga\Games\MollyHouse\Boilerplate\Core\Engine\LeafNode;
use Bga\Games\MollyHouse\Boilerplate\Core\Notifications;
use Bga\Games\MollyHouse\Boilerplate\Helpers\Locations;
use Bga\Games\MollyHouse\Boilerplate\Helpers\Utils;
use Bga\Games\MollyHouse\Game;
use Bga\Games\MollyHouse\Managers\AtomicActions;


class TakeAction extends \Bga\Games\MollyHouse\Models\AtomicAction
{
  public function getState()
  {
    return ST_TAKE_ACTION;
  }

  // ....###....########...######....######.
  // ...##.##...##.....##.##....##..##....##
  // ..##...##..##.....##.##........##......
  // .##.....##.########..##...####..######.
  // .#########.##...##...##....##........##
  // .##.....##.##....##..##....##..##....##
  // .##.....##.##.....##..######....######.


  public function argsTakeAction()
  {
    $info = $this->ctx->getInfo();

    $player = $this->getPlayer();
    $pawn = $player->getPawn();
    $site = $pawn->getSite();

    $siteAction = $site->getAction();

    $data = [
      '_private' => [
        $player->getId() => [
          ACCUSE => AtomicActions::get(ACCUSE)->getOptions($player, $site),
          INDULGE => AtomicActions::get(INDULGE)->getOptions($site),
          LIE_LOW => AtomicActions::get(LIE_LOW)->getOptions($player, $site),
          $siteAction => AtomicActions::get($siteAction)->getOptions($player, $site),
        ],
      ],
      'site' => $site,
    ];

    return $data;
  }

  //  .########..##..........###....##....##.########.########.
  //  .##.....##.##.........##.##....##..##..##.......##.....##
  //  .##.....##.##........##...##....####...##.......##.....##
  //  .########..##.......##.....##....##....######...########.
  //  .##........##.......#########....##....##.......##...##..
  //  .##........##.......##.....##....##....##.......##....##.
  //  .##........########.##.....##....##....########.##.....##

  // ....###.....######..########.####..#######..##....##
  // ...##.##...##....##....##.....##..##.....##.###...##
  // ..##...##..##..........##.....##..##.....##.####..##
  // .##.....##.##..........##.....##..##.....##.##.##.##
  // .#########.##..........##.....##..##.....##.##..####
  // .##.....##.##....##....##.....##..##.....##.##...###
  // .##.....##..######.....##....####..#######..##....##

  public function actPassTakeAction()
  {
    $player = self::getPlayer();
    // Stats::incPassActionCount($player->getId(), 1);
    // Engine::resolve(PASS);
    $this->resolveAction(PASS);
  }

  public function actTakeAction($args)
  {
    self::checkAction('actTakeAction');
    $takenAction = $args->takenAction;
    $target = $args->target;

    $player = $this->getPlayer();
    $stateArgs = $this->argsTakeAction();
    $options = $stateArgs['_private'][$player->getId()];

    if (!isset($options[$takenAction])) {
      throw new \feException("ERROR_004");
    }

    if ($takenAction === CRUISE && !isset($options[CRUISE][$target])) {
      throw new \feException("ERROR_005");
    }

    if ($takenAction === INDULGE && !isset($options[INDULGE][$target])) {
      throw new \feException("ERROR_008");
    }

    switch ($takenAction) {
      case ACCUSE:
        AtomicActions::get(ACCUSE)->actAccuse($args);
        break;
      case INDULGE:
        AtomicActions::get(INDULGE)->performAction($player, $stateArgs['site'], $options[INDULGE][$target]);
        break;
      case LIE_LOW:
        AtomicActions::get(LIE_LOW)->performAction($player, $stateArgs['site']);
        break;
      case CRUISE:
        AtomicActions::get(CRUISE)->performAction($player, $stateArgs['site'], $options[CRUISE][$target]);
        break;
      default:
        throw new \feException("ERROR_006");
    }



    $checkpoint = in_array($takenAction, [CRUISE, LIE_LOW]);

    $this->resolveAction(['takenAction' => $takenAction, 'target' => $target], $checkpoint);
  }

  //  .##.....##.########.####.##.......####.########.##....##
  //  .##.....##....##.....##..##........##.....##.....##..##.
  //  .##.....##....##.....##..##........##.....##......####..
  //  .##.....##....##.....##..##........##.....##.......##...
  //  .##.....##....##.....##..##........##.....##.......##...
  //  .##.....##....##.....##..##........##.....##.......##...
  //  ..#######.....##....####.########.####....##.......##...


}
