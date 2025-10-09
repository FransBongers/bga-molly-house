<?php

namespace Bga\Games\MollyHouse\Actions;

use Bga\Games\MollyHouse\Boilerplate\Core\Engine;
use Bga\Games\MollyHouse\Boilerplate\Core\Notifications;
use Bga\Games\MollyHouse\Boilerplate\Helpers\Locations;
use Bga\Games\MollyHouse\Boilerplate\Helpers\Utils;
use Bga\Games\MollyHouse\Managers\Festivity;

class FestivityPlayCard extends \Bga\Games\MollyHouse\Models\AtomicAction
{
  public function getState()
  {
    return ST_FESTIVITY_PLAY_CARD;
  }

  // ....###....########...######....######.
  // ...##.##...##.....##.##....##..##....##
  // ..##...##..##.....##.##........##......
  // .##.....##.########..##...####..######.
  // .#########.##...##...##....##........##
  // .##.....##.##....##..##....##..##....##
  // .##.....##.##.....##..######....######.

  public function argsFestivityPlayCard()
  {
    $info = $this->ctx->getInfo();
    $player = $this->getPlayer();

    $data = [
      '_private' => [
        $player->getId() => $player->getHand(),
      ],
      'hasViolin' => $player->hasItem(VIOLIN)
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

  public function actPassFestivityPlayCard()
  {
    $player = self::getPlayer();
    Notifications::message(clienttranslate('${player_name} passes'), [
      'player' => $player
    ]);

    Festivity::pass($player->getId());

    $this->resolveAction([]);
  }

  public function actFestivityPlayCard($args)
  {
    self::checkAction('actFestivityPlayCard');
    $cardId = $args->cardId;
    $valueForRogue = $args->valueForRogue;
    $playViolin = $args->playViolin;

    $player = $this->getPlayer();
    $playerId = $player->getId();

    $stateArgs = $this->argsFestivityPlayCard();

    if ($playViolin && !$stateArgs['hasViolin']) {
      throw new \feException("ERROR_029");
    }

    if ($playViolin) {

      $violin = $player->getItemOfType(VIOLIN);
      if ($violin === null) {
        throw new \feException("ERROR_030");
      }

      $info = $this->ctx->getInfo();
      $optional = isset($info['optional']) && $info['optional'];

      $action = [
        'action' => FESTIVITY_PLAY_CARD,
        'playerId' => $playerId,
        'optional' => $optional,
      ];
      $this->ctx->insertAsBrother(Engine::buildTree($action));
      $action = [
        'action' => PLAY_VIOLIN,
        'playerId' => $playerId,
        'itemId' => $violin->getId()
      ];
      $this->ctx->insertAsBrother(Engine::buildTree($action));

      $this->resolveAction([]);
      return;
    }




    $card = Utils::array_find($stateArgs['_private'][$playerId], function ($c) use ($cardId) {
      return $c->getId() == $cardId;
    });

    if ($card === null) {
      throw new \feException("ERROR_010");
    }

    $card->insertOnTop(Locations::festivity($playerId));
    if ($card->isRogue() && $valueForRogue >= 0 && $valueForRogue <= 9) {
      $card->setFestivityValue($valueForRogue);
    } elseif ($card->isRogue()) {
      throw new \feException("ERROR_017");
    }

    Notifications::festivityPlayCard($player, $card);

    $dress = $player->getDressOfSuit($card->getSuit());
    if ($dress !== null) {
      $action = [
        'action' => FESTIVITY_PLAY_DRESS,
        'playerId' => $playerId,
        'itemId' => $dress->getId()
      ];
      $this->ctx->insertAsBrother(Engine::buildTree($action));
    }

    $this->resolveAction([]);
  }

  //  .##.....##.########.####.##.......####.########.##....##
  //  .##.....##....##.....##..##........##.....##.....##..##.
  //  .##.....##....##.....##..##........##.....##......####..
  //  .##.....##....##.....##..##........##.....##.......##...
  //  .##.....##....##.....##..##........##.....##.......##...
  //  .##.....##....##.....##..##........##.....##.......##...
  //  ..#######.....##....####.########.####....##.......##...


}
