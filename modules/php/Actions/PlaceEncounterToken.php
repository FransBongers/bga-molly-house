<?php

namespace Bga\Games\MollyHouse\Actions;

use Bga\Games\MollyHouse\Boilerplate\Helpers\Locations;
use Bga\Games\MollyHouse\Managers\EncounterTokens;
use Bga\Games\MollyHouse\Managers\Sites;
use Bga\Games\MollyHouse\Managers\ViceCards;

class PlaceEncounterToken extends \Bga\Games\MollyHouse\Models\AtomicAction
{
  public function getState()
  {
    return ST_PLACE_ENCOUNTER_TOKEN;
  }

  // ....###....########...######....######.
  // ...##.##...##.....##.##....##..##....##
  // ..##...##..##.....##.##........##......
  // .##.....##.########..##...####..######.
  // .#########.##...##...##....##........##
  // .##.....##.##....##..##....##..##....##
  // .##.....##.##.....##..######....######.


  public function argsPlaceEncounterToken()
  {
    $info = $this->ctx->getInfo();

    $player = $this->getPlayer();

    $data = [
      '_private' => [
        $player->getId() => $player->getEncounterTokens(),
      ],
      'site' => Sites::get($info['siteId'])
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

  public function actPassPlaceEncounterToken()
  {
    $player = self::getPlayer();
    $this->resolveAction(PASS);
  }

  public function actPlaceEncounterToken($args)
  {
    self::checkAction('actPlaceEncounterToken');

    $tokenId = $args->tokenId;

    $player = $this->getPlayer();

    $token = EncounterTokens::get($tokenId);

    if ($token->getLocation() !== Locations::encounterTokens($player->getId())) {
      throw new \feException("ERROR_025");
    }

    $info = $this->ctx->getInfo();

    $site = Sites::get($info['siteId']);


    $token->placeOnSite($player, $site, true);

    // Add matching cards from market to gossip pile
    $marketCards = ViceCards::getMarket();

    $cardsAddedToGossip = 0;

    foreach ($marketCards as $card) {
      if ($card->getSuit() === $site->getSuit()) {
        $card->addToGossip($player);
        $cardsAddedToGossip++;
      }
    }

    if ($cardsAddedToGossip > 0 && $token->getType() === LOYAL) {
      $player->scoreJoy($cardsAddedToGossip * 2);
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
