<?php

namespace Bga\Games\MollyHouse\Actions;

use Bga\Games\MollyHouse\Boilerplate\Core\Engine;
use Bga\Games\MollyHouse\Boilerplate\Core\Notifications;
use Bga\Games\MollyHouse\Boilerplate\Helpers\Locations;
use Bga\Games\MollyHouse\Boilerplate\Helpers\Utils;
use Bga\Games\MollyHouse\Managers\AtomicActions;
use Bga\Games\MollyHouse\Managers\Festivity;

class FestivityPlayCard extends \Bga\Games\MollyHouse\Models\AtomicAction
{
  public function getState()
  {
    return ST_FESTIVITY_PLAY_CARD;
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


  public function stFestivityPlayCard()
  {
    $options = $this->getOptions();
    if (!$options['autoPass']) {
      return;
    }

    $player = self::getPlayer();
    Notifications::message(clienttranslate('${player_name} passes'), [
      'player' => $player
    ]);

    Festivity::pass($player->getId());

    $this->resolveAction(['automatic' => true]);
  }

  // ....###....########...######....######.
  // ...##.##...##.....##.##....##..##....##
  // ..##...##..##.....##.##........##......
  // .##.....##.########..##...####..######.
  // .#########.##...##...##....##........##
  // .##.....##.##....##..##....##..##....##
  // .##.....##.##.....##..######....######.

  public function argsFestivityPlayCard()
  {
    $options = $this->getOptions();

    $data = [
      '_no_notify' => $options['autoPass'],
      '_private' => [
        $options['playerId'] => $options['hand'],
      ],
      'hasViolin' => $options['hasViolin'],
      'currentWinningCards' => AtomicActions::get(FESTIVITY_DETERMINE_WINNING_SET)->getCurrentlyWinningCards(),
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

  public function actPassFestivityPlayCard()
  {
    $player = self::getPlayer();
    Notifications::message(clienttranslate('${player_name} passes'), [
      'player' => $player
    ]);

    Festivity::pass($player->getId());

    $this->resolveAction([]);
  }

  public function actFestivityPlayCard($args)
  {
    self::checkAction('actFestivityPlayCard');
    $cardId = $args->cardId;
    $valueForRogue = $args->valueForRogue;
    $playViolin = $args->playViolin;

    $player = $this->getPlayer();
    $playerId = $player->getId();

    $stateArgs = $this->argsFestivityPlayCard();

    if ($playViolin && !$stateArgs['hasViolin']) {
      throw new \feException("ERROR_029");
    }

    if ($playViolin) {

      $violin = $player->getItemOfType(VIOLIN);
      if ($violin === null) {
        throw new \feException("ERROR_030");
      }

      $info = $this->ctx->getInfo();
      $optional = isset($info['optional']) && $info['optional'];

      $action = [
        'action' => FESTIVITY_PLAY_CARD,
        'playerId' => $playerId,
        'optional' => $optional,
      ];
      $this->ctx->insertAsBrother(Engine::buildTree($action));
      $action = [
        'action' => PLAY_VIOLIN,
        'playerId' => $playerId,
        'itemId' => $violin->getId()
      ];
      $this->ctx->insertAsBrother(Engine::buildTree($action));

      $this->resolveAction([]);
      return;
    }




    $card = Utils::array_find($stateArgs['_private'][$playerId], function ($c) use ($cardId) {
      return $c->getId() == $cardId;
    });

    if ($card === null) {
      throw new \feException("ERROR_010");
    }

    $card->insertOnTop(Locations::festivity($playerId));
    if ($card->isRogue() && $valueForRogue >= 0 && $valueForRogue <= 9) {
      $card->setFestivityValue($valueForRogue);
    } elseif ($card->isRogue()) {
      throw new \feException("ERROR_017");
    }

    Notifications::festivityPlayCard($player, $card);



    $playableItemNodes = [];

    $dress = $player->getDressOfSuit($card->getSuit());
    if ($dress !== null) {
      $playableItemNodes[] = [
        'action' => USE_DRESS,
        'playerId' => $playerId,
        'args' => [
          'itemId' => $dress->getId()
        ]
      ];
    }

    $nodeArgs = $this->ctx->getArgs();
    $round = $nodeArgs === null ?  null : $nodeArgs['round'] ?? null;

    if ($round === 1 && $player->hasItem(DOLL) && $player->getId() === Festivity::getRunnerId()) {
      $playableItemNodes[] = [
        'action' => USE_DOLL,
        'playerId' => $playerId,
        'args' => [
          'itemId' => $player->getItemOfType(DOLL)->getId()
        ]
      ];
    }
    if ($player->hasItem(DOMINO_V2) && count(AtomicActions::get(USE_DOMINO)->getOptions($cardId)) > 0) {
      $playableItemNodes[] = [
        'action' => USE_DOMINO,
        'playerId' => $playerId,
        'args' => [
          'cardId' => $cardId,
          'itemId' => $player->getItemOfType(DOMINO_V2)->getId()
        ]
      ];
    }

    if (count($playableItemNodes) > 0) {
      $this->ctx->insertAsBrother(Engine::buildTree([
        'type' => NODE_OR,
        'children' => $playableItemNodes,
        'playerId' => $playerId,
        'optional' => true,
        // 'description' => clienttranslate('${actplayer} may use an item'),
        'stateDescription' => [
          'description' => clienttranslate('${actplayer} may use an item'),
          'descriptionmyturn' => clienttranslate('${you} may use an item'),
        ],
        'args' => [
          'passButtonText' => clienttranslate('Do not use item'),
        ]
      ]));
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

  private function getOptions()
  {
    $player = $this->getPlayer();

    $data = [
      'playerId' => $player->getId(),
      'hand' => $player->getHand(),
      'hasViolin' => $player->hasItem(VIOLIN),
      'autoPass' => count($player->getHand()) === 0 && !$player->hasItem(VIOLIN),
    ];
    return $data;
  }
}
