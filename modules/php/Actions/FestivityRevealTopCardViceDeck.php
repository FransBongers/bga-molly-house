<?php

namespace Bga\Games\MollyHouse\Actions;

use Bga\Games\MollyHouse\Boilerplate\Core\Engine\LeafNode;
use Bga\Games\MollyHouse\Boilerplate\Core\Notifications;
use Bga\Games\MollyHouse\Boilerplate\Helpers\Locations;
use Bga\Games\MollyHouse\Boilerplate\Helpers\Utils;
use Bga\Games\MollyHouse\Managers\Festivity;
use Bga\Games\MollyHouse\Managers\Players;
use Bga\Games\MollyHouse\Managers\ViceCards;


class FestivityRevealTopCardViceDeck extends \Bga\Games\MollyHouse\Models\AtomicAction
{
  public function getState()
  {
    return ST_FESTIVITY_REVEAL_TOP_CARD_VICE_DECK;
  }

  // ..######..########....###....########.########
  // .##....##....##......##.##......##....##......
  // .##..........##.....##...##.....##....##......
  // ..######.....##....##.....##....##....######..
  // .......##....##....#########....##....##......
  // .##....##....##....##.....##....##....##......
  // ..######.....##....##.....##....##....########

  // ....###.....######..########.####..#######..##....##
  // ...##.##...##....##....##.....##..##.....##.###...##
  // ..##...##..##..........##.....##..##.....##.####..##
  // .##.....##.##..........##.....##..##.....##.##.##.##
  // .#########.##..........##.....##..##.....##.##..####
  // .##.....##.##....##....##.....##..##.....##.##...###
  // .##.....##..######.....##....####..#######..##....##


  public function stFestivityRevealTopCardViceDeck()
  {
    $player = $this->getPlayer();

    $card = ViceCards::getTopOf(DECK);

    if ($card === null) {
      // TODO: check if this is what needs to happen
      Notifications::message(clienttranslate('There are no cards left in the vice deck to reveal'),[]);
      $this->resolveAction(['automatic' => true]);
      return;
    }

    $location = Locations::festivity(COMMUNITY);
    ViceCards::insertOnTop($card->getId(), $location);

    $card->setLocation($location);

    Notifications::festivityRevealTopCardViceDeck($player, $card);

    if ($card->isRogue()) {
      $value = bga_rand(0, 9);
      $card->setFestivityValue($value);
      Notifications::festivitySetRogueValue($player, $card, $value, true);
    }

    $this->resolveAction(['automatic' => true]);
  }


  //  .##.....##.########.####.##.......####.########.##....##
  //  .##.....##....##.....##..##........##.....##.....##..##.
  //  .##.....##....##.....##..##........##.....##......####..
  //  .##.....##....##.....##..##........##.....##.......##...
  //  .##.....##....##.....##..##........##.....##.......##...
  //  .##.....##....##.....##..##........##.....##.......##...
  //  ..#######.....##....####.########.####....##.......##...


}
