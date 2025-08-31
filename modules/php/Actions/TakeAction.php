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

    $playerOptions = [
      ACCUSE => AtomicActions::get(ACCUSE)->getOptions($player, $site),
      INDULGE => AtomicActions::get(INDULGE)->getOptions($site),
      LIE_LOW => AtomicActions::get(LIE_LOW)->getOptions($player, $site),
      $siteAction => AtomicActions::get($siteAction)->getOptions($player, $site),
      'items' => [],
    ];

    foreach ($player->getItems() as $item) {
      if ($item->canBeUsedForAction($site)) {
        $playerOptions['items'][$item->getId()] = $item;
      }
    }

    $data = [
      '_private' => [
        $player->getId() => $playerOptions,
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

    if ($takenAction !== USE_ITEM && !isset($options[$takenAction])) {
      throw new \feException("ERROR_004");
    }

    if ($takenAction === CRUISE && !isset($options[CRUISE][$target])) {
      throw new \feException("ERROR_005");
    }

    if ($takenAction === INDULGE && !isset($options[INDULGE][$target])) {
      throw new \feException("ERROR_008");
    }

    if ($takenAction === SHOP && (!isset($options[SHOP]) || $options[SHOP]->getId() !== $target)) {
      throw new \feException("ERROR_019");
    }

    if ($takenAction === USE_ITEM && !isset($options['items'][$target])) {
      throw new \feException("ERROR_023");
    }

    if ($takenAction === ACCUSE && !isset($options[ACCUSE][$target])) {
      throw new \feException("ERROR_026");
    }

    $checkpoint = false;

    switch ($takenAction) {
      case ACCUSE:
        $checkpoint = true;
        AtomicActions::get(ACCUSE)->performAction($player, $stateArgs['site'], $options[ACCUSE][$target]);
        break;
      case INDULGE:
        AtomicActions::get(INDULGE)->performAction($player, $stateArgs['site'], $options[INDULGE][$target]);
        break;
      case LIE_LOW:
        $checkpoint = true;
        AtomicActions::get(LIE_LOW)->performAction($player, $stateArgs['site']);
        break;
      case CRUISE:
        $checkpoint = true;
        AtomicActions::get(CRUISE)->performAction($player, $stateArgs['site'], $options[CRUISE][$target]);
        break;
      case SHOP:
        AtomicActions::get(SHOP)->performAction($this->ctx, $player, $stateArgs['site'], $options[SHOP]);
        break;
      case THROW_FESTIVITY:
        AtomicActions::get(THROW_FESTIVITY)->performAction($this->ctx, $player, $stateArgs['site']);
        break;
      case USE_ITEM:
        $checkpoint = $this->useItem($player, $options['items'][$target], $stateArgs['site']);
        break;
      default:
        throw new \feException("ERROR_006");
    }

    $this->resolveAction(['takenAction' => $takenAction, 'target' => $target], $checkpoint);
  }

  //  .##.....##.########.####.##.......####.########.##....##
  //  .##.....##....##.....##..##........##.....##.....##..##.
  //  .##.....##....##.....##..##........##.....##......####..
  //  .##.....##....##.....##..##........##.....##.......##...
  //  .##.....##....##.....##..##........##.....##.......##...
  //  .##.....##....##.....##..##........##.....##.......##...
  //  ..#######.....##....####.########.####....##.......##...

  private function useItem($player, $item, $site)
  {
    $action = $item->useAction($player, $site);
    $this->ctx->insertAsBrother(Engine::buildTree($action));

    return $item->getType() === BRIBE;
  }
}
