<?php

namespace Bga\Games\MollyHouse\Actions;

use Bga\Games\MollyHouse\Boilerplate\Core\Engine;
use Bga\Games\MollyHouse\Boilerplate\Core\Engine\LeafNode;
use Bga\Games\MollyHouse\Boilerplate\Core\Notifications;
use Bga\Games\MollyHouse\Boilerplate\Helpers\Locations;
use Bga\Games\MollyHouse\Boilerplate\Helpers\Utils;
use Bga\Games\MollyHouse\Game;
use Bga\Games\MollyHouse\Managers\Players;
use Bga\Games\MollyHouse\Managers\ViceCards;

class PlayerSetupChooseCard extends \Bga\Games\MollyHouse\Models\AtomicAction
{
  public function getState()
  {
    return ST_PLAYER_SETUP_CHOOSE_CARD;
  }

  // ....###....########...######....######.
  // ...##.##...##.....##.##....##..##....##
  // ..##...##..##.....##.##........##......
  // .##.....##.########..##...####..######.
  // .#########.##...##...##....##........##
  // .##.....##.##....##..##....##..##....##
  // .##.....##.##.....##..######....######.


  public function argsPlayerSetupChooseCard()
  {
    $data = [];
    $data['_private'] = [];
    $players = Players::getAll();
    foreach ($players as $player) {
      // Add reputation so all cards are available when player clicks undo
      $data['_private'][$player->getId()] = array_merge($player->getCardsInReputation(), $player->getHand());
    }

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

  public function actPassPlayerSetupChooseCard()
  {
    $player = self::getPlayer();
    // Stats::incPassActionCount($player->getId(), 1);
    // Engine::resolve(PASS);
    $this->resolveAction(PASS);
  }

  public function actPlayerSetupChooseCard($args)
  {
    self::checkAction('actPlayerSetupChooseCard');

    $cardId = $args->cardId;

    $player = Players::getCurrent();
    $stateArgs = $this->argsPlayerSetupChooseCard();
    $availableCardsForPlayer = $stateArgs['_private'][$player->getId()];

    $selectedCard = Utils::array_find($availableCardsForPlayer, function ($card) use ($cardId) {
      return $cardId === $card->getId();
    });

    if ($selectedCard === null) {
      throw new \feException("ERROR_001");
    }

    $playerId = $player->getId();

    $selectedCard->setHidden(1);
    $selectedCard->setLocation(Locations::reputation($playerId));

    Notifications::setupChooseCard($player, $selectedCard);

    // Make the player inactive
    $game = Game::get();
    $game->gamestate->setPlayerNonMultiactive($playerId, '');
    if (count($game->gamestate->getActivePlayerList()) > 0) {
      // Restore so player sees undo button
      Notifications::restoreGameState($player);
      return;
    }

    // All players have chosen their card, reveal them
    $players = Players::getAll();
    foreach ($players as $player) {
      $this->resolveSetup($player);
    }

    $this->resolveAction([], true);
  }

  public function actUndoMultiActiveState(int $currentPlayerId)
  {
    $card = ViceCards::getTopOf(Locations::reputation($currentPlayerId));

    if ($card === null) {
      throw new \Bga\GameFramework\VisibleSystemException("ERROR_035");
    }

    $card->setLocation(Locations::hand($currentPlayerId));
    $card->setHidden(0);

    Notifications::undoPlayerSetupChooseCard(Players::get($currentPlayerId), $card);
  }

  //  .##.....##.########.####.##.......####.########.##....##
  //  .##.....##....##.....##..##........##.....##.....##..##.
  //  .##.....##....##.....##..##........##.....##......####..
  //  .##.....##....##.....##..##........##.....##.......##...
  //  .##.....##....##.....##..##........##.....##.......##...
  //  .##.....##....##.....##..##........##.....##.......##...
  //  ..#######.....##....####.########.####....##.......##...

  private function resolveSetup($player)
  {
    $reputationCards = $player->getCardsInReputation();
    $card = $reputationCards[0];
    $card->setHidden(0);

    Notifications::setupRevealCard($player, $card);

    $pawn = $player->getPawn();
    $pawn->place($player, SUIT_MOLLY_HOUSE_MAP[$card->getSuit()]);

    if ($card->isDesire()) {
      $card->scoreJoy($player);
    }

    if ($card->isThreat()) {
      $card->addToSafePile($player);
    }
  }
}
