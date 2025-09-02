<?php

namespace Bga\Games\MollyHouse\Actions;

use Bga\Games\MollyHouse\Boilerplate\Core\Engine;
use Bga\Games\MollyHouse\Boilerplate\Core\Notifications;
use Bga\Games\MollyHouse\Boilerplate\Helpers\Utils;
use Bga\Games\MollyHouse\Game;
use Bga\Games\MollyHouse\Managers\Festivity;
use Bga\Games\MollyHouse\Managers\Players;

class FestivityUseBottleOfGin extends \Bga\Games\MollyHouse\Models\AtomicAction
{
  public function getState()
  {
    return ST_FESTIVITY_USE_BOTTLE_OF_GIN;
  }

  // ....###....########...######....######.
  // ...##.##...##.....##.##....##..##....##
  // ..##...##..##.....##.##........##......
  // .##.....##.########..##...####..######.
  // .#########.##...##...##....##........##
  // .##.....##.##....##..##....##..##....##
  // .##.....##.##.....##..######....######.


  public function argsFestivityUseBottleOfGin()
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

  public function actPassFestivityUseBottleOfGin()
  {
    $player = self::getPlayer();
    $this->resolveAction(PASS);
  }

  public function actFestivityUseBottleOfGin($args)
  {
    self::checkAction('actFestivityUseBottleOfGin');
    $useBottleOfGin = $args->useBottleOfGin;

    $player = Players::getCurrent();

    $game = Game::get();
    if ($useBottleOfGin) {
      // Handle the case where the player uses the bottle of gin
      $this->useBottleOfGin($game, $player);
    } else {
      $this->handleSkip($game, $player);
    }

    if (count($game->gamestate->getActivePlayerList()) > 0) {
      return;
    }
    $this->resolveAction([], true);
  }

  //  .##.....##.########.####.##.......####.########.##....##
  //  .##.....##....##.....##..##........##.....##.....##..##.
  //  .##.....##....##.....##..##........##.....##......####..
  //  .##.....##....##.....##..##........##.....##.......##...
  //  .##.....##....##.....##..##........##.....##.......##...
  //  .##.....##....##.....##..##........##.....##.......##...
  //  ..#######.....##....####.########.####....##.......##...

  private function handleSkip($game, $player)
  {
    Notifications::message(
      clienttranslate('${player_name} does not use their ${tkn_boldText_bottleOfGin}'),
      [
        'player' => $player,
        'tkn_boldText_bottleOfGin' => _('Bottle of Gin'),
        'i18n' => ['tkn_boldText_bottleOfGin']
      ]
    );
    $game->gamestate->setPlayerNonMultiactive($player->getId(), 'next');
  }

  public function useBottleOfGin($game, $player)
  {
    $items = $player->getItems();

    $bottleOfGin = Utils::array_find($items, fn($item) => $item->getType() === BOTTLE_OF_GIN);

    if ($bottleOfGin === null) {
      throw new \feException("ERROR_028");
    }
    Notifications::message(
      clienttranslate('${player_name} uses their ${tkn_boldText_bottleOfGin}'),
      [
        'player' => $player,
        'tkn_boldText_bottleOfGin' => _('Bottle of Gin'),
        'i18n' => ['tkn_boldText_bottleOfGin']
      ]
    );

    $game->gamestate->setAllPlayersNonMultiactive('next');

    $bottleOfGin->discard($player);

    $action = [
      'action' => FESTIVITY_BOTTLE_OF_GIN_CHECK,
    ];
    $this->ctx->insertAsBrother(Engine::buildTree($action));


    Festivity::setupRound($this->ctx, ADDITIONAL_ROUND);
  }
}
