<?php

namespace Bga\Games\MollyHouse\Cards\ViceCards;

use Bga\Games\MollyHouse\Boilerplate\Core\Notifications;
use Bga\Games\MollyHouse\Boilerplate\Helpers\Utils;
use Bga\Games\MollyHouse\Managers\Players;
use Bga\Games\MollyHouse\Managers\ViceCards;

class ThreatCard extends \Bga\Games\MollyHouse\Models\ViceCard
{
  public function __construct($row)
  {
    parent::__construct($row);
    $this->type = THREAT;
  }

  public function addToGossip($player, $notify = true)
  {
    parent::addToGossip($player, $notify);

    $suit = $this->getSuit();
    // Expose the most infamous
    $cards = ViceCards::getAll();


    // Determine infamy for each player
    $playerValues = [];
    foreach ($cards as $card) {
      if ($card->getSuit() !== $suit) {
        continue;
      }

      $location = $card->getLocation();
      if (!Utils::startsWith($location, 'reputation')) {
        continue;
      }
      $playerId = intval(explode('_', $location)[1]);
      $value = $card->getMostInfamousValue();
      if (isset($playerValues[$playerId])) {
        $playerValues[$playerId] += $value;
      } else {
        $playerValues[$playerId] = $value;
      }
    }

    if (count($playerValues) === 0) {
      Notifications::message(clienttranslate('No one is exposed'));
    }

    $exposedPlayers = [];
    $highestValue = 0;
    foreach ($playerValues as $playerId => $value) {
      if ($value > $highestValue) {
        $highestValue = $value;
        $exposedPlayers = [$playerId];
      } else if ($value === $highestValue) {
        $exposedPlayers[] = $playerId;
      }
    }

    foreach ($exposedPlayers as $playerId) {
      $player = Players::get($playerId);
      $player->expose($this);
    }
  }
}
