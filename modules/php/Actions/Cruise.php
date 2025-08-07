<?php

namespace Bga\Games\MollyHouse\Actions;

use Bga\Games\MollyHouse\Boilerplate\Core\Notifications;
use Bga\Games\MollyHouse\Boilerplate\Helpers\Utils;
use Bga\Games\MollyHouse\Managers\Sites;

class Cruise extends \Bga\Games\MollyHouse\Models\AtomicAction
{
  public function getState()
  {
    return ST_CRUISE;
  }

  // ....###....########...######....######.
  // ...##.##...##.....##.##....##..##....##
  // ..##...##..##.....##.##........##......
  // .##.....##.########..##...####..######.
  // .#########.##...##...##....##........##
  // .##.....##.##....##..##....##..##....##
  // .##.....##.##.....##..######....######.


  public function argsCruise()
  {
    $info = $this->ctx->getInfo();

    $data = [];

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

  public function actPassCruise()
  {
    $player = self::getPlayer();
    $this->resolveAction(PASS);
  }

  public function actCruise($args)
  {
    self::checkAction('actIndulge');




    $this->resolveAction([], true);
  }

  //  .##.....##.########.####.##.......####.########.##....##
  //  .##.....##....##.....##..##........##.....##.....##..##.
  //  .##.....##....##.....##..##........##.....##......####..
  //  .##.....##....##.....##..##........##.....##.......##...
  //  .##.....##....##.....##..##........##.....##.......##...
  //  .##.....##....##.....##..##........##.....##.......##...
  //  ..#######.....##....####.########.####....##.......##...

  public function performAction($player, $site, $card)
  {
    Notifications::message(clienttranslate('${player_name} cruises on ${tkn_boldText_site}'), [
      'player' => $player,
      'tkn_boldText_site' => $site->getName(),
      'i18n' => ['tkn_boldText_site'],
    ]);
    $card->addToReputation($player);

    $reputationForSuit = $player->getReputationForSuit($card->getSuit());
    $player->drawCards(min(4, $reputationForSuit));;
  }

  public function getOptions($player, $site)
  {
    $hand = $player->getHand();
    $suit = $site->getSuit();

    $options = [];

    foreach ($hand as $card) {
      if ($card->isDesire() && $card->getSuit() === $suit) {
        $options[$card->getId()] = $card;
      }
    }
    return $options;
  }
}
