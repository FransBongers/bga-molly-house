<?php

namespace Bga\Games\MollyHouse\Actions;

use Bga\Games\MollyHouse\Boilerplate\Core\Engine;
use Bga\Games\MollyHouse\Boilerplate\Core\Notifications;
use Bga\Games\MollyHouse\Boilerplate\Helpers\Utils;
use Bga\Games\MollyHouse\Managers\Festivity;
use Bga\Games\MollyHouse\Managers\ViceCards;

class FestivityChooseNextFoiledThreat extends \Bga\Games\MollyHouse\Models\AtomicAction
{
  public function getState()
  {
    return ST_FESTIVITY_CHOOSE_NEXT_FOILED_THREAT;
  }

  // ....###....########...######....######.
  // ...##.##...##.....##.##....##..##....##
  // ..##...##..##.....##.##........##......
  // .##.....##.########..##...####..######.
  // .#########.##...##...##....##........##
  // .##.....##.##....##..##....##..##....##
  // .##.....##.##.....##..######....######.

  public function argsFestivityChooseNextFoiledThreat()
  {
    $info = $this->ctx->getInfo();

    $cardIds = $info['cardIds'];

    $data = [
      'cards' => ViceCards::getMany($cardIds)->toArray(),
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

  public function actPassFestivityChooseNextFoiledThreat()
  {
    $player = self::getPlayer();
    $this->resolveAction(PASS);
  }

  public function actFestivityChooseNextFoiledThreat($args)
  {
    self::checkAction('actFestivityChooseNextFoiledThreat');
    $cardId = $args->cardId;

    $stateArgs = $this->argsFestivityChooseNextFoiledThreat();

    Notifications::message(
      clienttranslate('${player_name} chooses the next threat to foil'),
      ['player' => $this->getPlayer()]
    );

    $card = Utils::array_find(
      $stateArgs['cards'],
      function ($c) use ($cardId) {
        return $c->getId() === $cardId;
      }
    );

    if ($card === null) {
      throw new \feException("ERROR_018");
    }

    $remainingThreats = Utils::filter(
      $stateArgs['cards'],
      function ($card) use ($cardId) {
        return $card->getId() !== $cardId;
      }
    );



    // Insert reamining first so current chosen is next
    if (count($remainingThreats) === 1) {
      // Notifications::log('remainingThreats', $remainingThreats[0]->getId());
      $cardId = $remainingThreats[0]->getId();
      $action = [
        'action' => FESTIVITY_FOIL_THREAT,
        'cardId' => $cardId,
      ];
      $this->ctx->insertAsBrother(Engine::buildTree($action));
    } else if (count($remainingThreats) > 1) {
      $action = [
        'action' => FESTIVITY_CHOOSE_NEXT_FOILED_THREAT,
        'playerId' => Festivity::get()['runner'],
        'cardIds' => Utils::returnIds($remainingThreats),
      ];
      $this->ctx->insertAsBrother(Engine::buildTree($action));
    }

    $action = [
      'action' => FESTIVITY_FOIL_THREAT,
      'cardId' => $card->getId(),
    ];
    $this->ctx->insertAsBrother(Engine::buildTree($action));

    $this->resolveAction([], true);
  }

  //  .##.....##.########.####.##.......####.########.##....##
  //  .##.....##....##.....##..##........##.....##.....##..##.
  //  .##.....##....##.....##..##........##.....##......####..
  //  .##.....##....##.....##..##........##.....##.......##...
  //  .##.....##....##.....##..##........##.....##.......##...
  //  .##.....##....##.....##..##........##.....##.......##...
  //  ..#######.....##....####.########.####....##.......##...


}
