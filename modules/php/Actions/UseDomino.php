<?php

namespace Bga\Games\MollyHouse\Actions;

use Bga\Games\MollyHouse\Boilerplate\Core\Notifications;
use Bga\Games\MollyHouse\Boilerplate\Core\Stats;
use Bga\Games\MollyHouse\Boilerplate\Helpers\Locations;
use Bga\Games\MollyHouse\Boilerplate\Helpers\Utils;
use Bga\Games\MollyHouse\Managers\Festivity;
use Bga\Games\MollyHouse\Managers\Items;
use Bga\Games\MollyHouse\Managers\ViceCards;
use Bga\Games\MollyHouse\Models\Player;

class UseDomino extends \Bga\Games\MollyHouse\Models\AtomicAction
{
  public function getState()
  {
    return ST_USE_DOMINO;
  }

  // ....###....########...######....######.
  // ...##.##...##.....##.##....##..##....##
  // ..##...##..##.....##.##........##......
  // .##.....##.########..##...####..######.
  // .#########.##...##...##....##........##
  // .##.....##.##....##..##....##..##....##
  // .##.....##.##.....##.##.....##.######.


  public function argsUseDomino()
  {
    $args = $this->ctx->getArgs();
    $cardId = $args['cardId'];

    $data = [
      'itemId' => $args['itemId'],
      'cardId' => $cardId,
      'options' => $this->getOptions($cardId),
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

  public function actPassUseDomino()
  {
    $player = self::getPlayer();
    $this->resolveAction(PASS);
  }

  public function actUseDomino($args)
  {
    self::checkAction('actUseDomino');
    $cardId = $args->cardId;

    $stateArgs = $this->argsUseDomino();

    $communityCard = Utils::array_find($stateArgs['options'], fn ($option) => $option->getId() === $cardId);

    if ($communityCard === null) {
      throw new \Bga\GameFramework\VisibleSystemException("ERROR_034");
    }

        $itemId = $stateArgs['itemId'];
    $player = $this->getPlayer();
    $item = Items::get($itemId);

    $playedCard = ViceCards::get($stateArgs['cardId']);
    $playedCard->setLocation(Locations::festivity(COMMUNITY));
    $communityCard->setLocation(Locations::festivity($player->getId()));

    Notifications::useDomino($player, $item, $playedCard, $communityCard);

    Stats::incItemsUsed($player->getId(), 1);
    $item->discard($player);

    $this->resolveAction([]);
  }

  //  .##.....##.########.####.##.......####.########.##....##
  //  .##.....##....##.....##..##........##.....##.....##..##.
  //  .##.....##....##.....##..##........##.....##......####..
  //  .##.....##....##.....##..##........##.....##.......##...
  //  .##.....##....##.....##..##........##.....##.......##...
  //  .##.....##....##.....##..##........##.....##.......##...
  //  ..#######.....##....####.########.####....##.......##...

  public function getOptions(string $cardId)
  {
    $card = ViceCards::get($cardId);
    $suit = $card->getSuit();
    $communityCards = ViceCards::getInLocation(Locations::festivity(COMMUNITY))->toArray();
    return Utils::filter($communityCards, fn ($communityCard) => $communityCard->getSuit() === $suit);
  }

  // .########.##....##..######...####.##....##.########
  // .##.......###...##.##....##...##..###...##.##......
  // .##.......####..##.##.........##..####..##.##......
  // .######...##.##.##.##...####..##..##.##.##.######..
  // .##.......##..####.##....##...##..##..####.##......
  // .##.......##...###.##....##...##..##...###.##......
  // .########.##....##..######...####.##....##.########

  public function getDescription(): string|array
  {
    return clienttranslate('Spend Domino');
  }

  public function isDoable(Player $player): bool
  {
    $args = $this->ctx->getArgs();


    return true;
  }

  public function isAutomatic(?Player $player = null): bool
  {
    return false;
  }
}
