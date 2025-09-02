<?php

namespace Bga\Games\MollyHouse\Actions;

use Bga\Games\MollyHouse\Boilerplate\Core\Notifications;
use Bga\Games\MollyHouse\Managers\PlayerCubes;

class FestivityTakeMatchingCubes extends \Bga\Games\MollyHouse\Models\AtomicAction
{
  public function getState()
  {
    return ST_FESTIVITY_TAKE_MATCHING_CUBES;
  }

  // ....###....########...######....######.
  // ...##.##...##.....##.##....##..##....##
  // ..##...##..##.....##.##........##......
  // .##.....##.########..##...####..######.
  // .#########.##...##...##....##........##
  // .##.....##.##....##..##....##..##....##
  // .##.....##.##.....##..######....######.

  public function argsFestivityTakeMatchingCubes()
  {
    $info = $this->ctx->getInfo();

    $data = [
      'suit' => $info['suit'],
      'number' => $info['number'],
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

  public function actPassFestivityTakeMatchingCubes()
  {
    $player = self::getPlayer();
    $this->resolveAction(PASS);
  }

  public function actFestivityTakeMatchingCubes($args)
  {
    self::checkAction('actFestivityTakeMatchingCubes');

    $takeCubes = $args->takeCubes;
    Notifications::log('takeCubes', $takeCubes);
    $player = $this->getPlayer();

    $stateArgs = $this->argsFestivityTakeMatchingCubes();
    $suit = $stateArgs['suit'];
    $number = $stateArgs['number'];

    if ($takeCubes) {
      $player->gainCubes($suit, $number, true);
    } else {
      Notifications::message(clienttranslate('${player_name} chooses not to take ${tkn_boldText_number} ${tkn_cube}'), [
        'player' => $player,
        'tkn_boldText_number' => $number,
        'tkn_cube' => Notifications::tknCube($suit),
      ]);
    }

    $this->resolveAction(['takeCubes' => $takeCubes]);
  }

  //  .##.....##.########.####.##.......####.########.##....##
  //  .##.....##....##.....##..##........##.....##.....##..##.
  //  .##.....##....##.....##..##........##.....##......####..
  //  .##.....##....##.....##..##........##.....##.......##...
  //  .##.....##....##.....##..##........##.....##.......##...
  //  .##.....##....##.....##..##........##.....##.......##...
  //  ..#######.....##....####.########.####....##.......##...


}
