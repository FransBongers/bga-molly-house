<?php

namespace Bga\Games\MollyHouse\Actions;

use Bga\Games\MollyHouse\Boilerplate\Core\Globals;
use Bga\Games\MollyHouse\Boilerplate\Core\Notifications;
use Bga\Games\MollyHouse\Boilerplate\Core\Stats;
use Bga\Games\MollyHouse\Game;
use Bga\Games\MollyHouse\Managers\Players;

class EndOfWeekUseDomino extends \Bga\Games\MollyHouse\Models\AtomicAction
{
  public function getState()
  {
    return ST_END_OF_WEEK_USE_DOMINO;
  }

  // ....###....########...######....######.
  // ...##.##...##.....##.##....##..##....##
  // ..##...##..##.....##.##........##......
  // .##.....##.########..##...####..######.
  // .#########.##...##...##....##........##
  // .##.....##.##....##..##....##..##....##
  // .##.....##.##.....##..######....######.


  public function argsEndOfWeekUseDomino()
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

  public function actPassEndOfWeekUseDomino()
  {
    $player = self::getPlayer();
    $this->resolveAction(PASS);
  }

  public function actEndOfWeekUseDomino($args)
  {
    self::checkAction('actEndOfWeekUseDomino');
    $playDomino = $args->playDomino;

    $player = Players::getCurrent();

    $game = Game::get();
    if ($playDomino) {
      // Handle the case where the player plays Domino
      Stats::incItemsUsed($player->getId(), 1);
      $this->playDomino($player);
    } else {
      $this->handleSkip($player);
    }
    $game->gamestate->setPlayerNonMultiactive($player->getId(), 'next');

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

  private function handleSkip($player)
  {
    Notifications::message(
      clienttranslate('${player_name} does not play ${tkn_boldText_domino}'),
      [
        'player' => $player,
        'tkn_boldText_domino' => _('Domino'),
        'i18n' => ['tkn_boldText_domino']
      ]
    );
  }

  public function playDomino($player)
  {
    $item = $player->getItemOfType(DOMINO);

    if ($item === null) {
      throw new \feException("ERROR_031");
    }
    Notifications::message(
      clienttranslate('${player_name} plays ${tkn_boldText_domino}'),
      [
        'player' => $player,
        'tkn_boldText_domino' => $item->getName(),
        'i18n' => ['tkn_boldText_domino']
      ]
    );

    $playersWhoPlayedDomino = Globals::getPlayersWhoPlayedDomino();
    $playersWhoPlayedDomino[] = $player->getId();
    Globals::setPlayersWhoPlayedDomino($playersWhoPlayedDomino);

    $item->discard($player);
  }
}
