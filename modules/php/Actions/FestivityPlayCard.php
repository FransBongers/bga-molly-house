<?php

namespace Bga\Games\MollyHouse\Actions;

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
      ]
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

    $player = $this->getPlayer();
    $playerId = $player->getId();
    $stateArgs = $this->argsFestivityPlayCard();

    $card = Utils::array_find($stateArgs['_private'][$playerId], function ($c) use ($cardId) {
      return $c->getId() == $cardId;
    });

    if ($card === null) {
      throw new \feException("ERROR_010");
    }

    $card->insertOnTop(Locations::festivity($playerId));

    Notifications::festivityPlayCard($player, $card);

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
