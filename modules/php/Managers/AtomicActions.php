<?php

namespace Bga\Games\MollyHouse\Managers;

use Bga\Games\MollyHouse\Game;
use Bga\Games\MollyHouse\Boilerplate\Core\Engine;
use Bga\Games\MollyHouse\Managers\Players;

class AtomicActions
{
  // Mapping of actionId and corresponding class
  static $classes = [
    ACCUSE => ACCUSE,
    INDULGE => INDULGE,
    PLAYER_SETUP_CHOOSE_CARD => PLAYER_SETUP_CHOOSE_CARD,
    TAKE_ACTION => TAKE_ACTION,
    LIE_LOW => LIE_LOW,
    CRUISE => CRUISE,
    ROLL_DICE => ROLL_DICE,
    SHOP => SHOP,
    THROW_FESTIVITY => THROW_FESTIVITY,
    RESOLVE_MARKET_DISCARD => RESOLVE_MARKET_DISCARD,
    MOVE_PAWN => MOVE_PAWN,
    CHECK_HAND_SIZE => CHECK_HAND_SIZE,
    REFILL_MARKET => REFILL_MARKET,
    ADD_EXCESS_CARDS_TO_GOSSIP => ADD_EXCESS_CARDS_TO_GOSSIP,
    FESTIVITY_SETUP_ROUND => FESTIVITY_SETUP_ROUND,
    FESTIVITY_REVEAL_TOP_CARD_VICE_DECK => FESTIVITY_REVEAL_TOP_CARD_VICE_DECK,
    FESTIVITY_PLAY_CARD => FESTIVITY_PLAY_CARD,
    FESTIVITY_CLEANUP => FESTIVITY_CLEANUP,
    FESTIVITY_DETERMINE_WINNING_SET => FESTIVITY_DETERMINE_WINNING_SET,
    FESTIVITY_SCORE_JOY => FESTIVITY_SCORE_JOY,
    FESTIVITY_SCORE_BONUS => FESTIVITY_SCORE_BONUS,
    FESTIVITY_GENERATE_GOSSIP => FESTIVITY_GENERATE_GOSSIP,
    FESTIVITY_SELECT_WINNING_SET => FESTIVITY_SELECT_WINNING_SET,
    LOG_STEP => LOG_STEP,
  ];

  public static function get($actionId, $ctx = null)
  {
    if (!\array_key_exists($actionId, self::$classes)) {
      // throw new \feException(print_r(debug_print_backtrace()));
      // throw new \feException(print_r(Globals::getEngine()));
      throw new \BgaVisibleSystemException('Trying to get an atomic action not defined in Actions.php : ' . $actionId);
    }
    $name = '\Bga\Games\MollyHouse\Actions\\' . self::$classes[$actionId];
    // $name = '\Bga\Games\MollyHouse\Actions\\' . $actionId;
    return new $name($ctx);
  }

  public static function getActionOfState($stateId, $throwErrorIfNone = true)
  {
    foreach (array_keys(self::$classes) as $actionId) {
      if (self::getState($actionId, null) == $stateId) {
        return $actionId;
      }
    }

    if ($throwErrorIfNone) {
      throw new \BgaVisibleSystemException('Trying to fetch args of a non-declared atomic action in state ' . $stateId);
    } else {
      return null;
    }
  }

  public static function isDoable($actionId, $ctx, $player)
  {
    $res = self::get($actionId, $ctx)->isDoable($player);
    return $res;
  }

  public static function getErrorMessage($actionId)
  {
    $actionId = ucfirst(mb_strtolower($actionId));
    $msg = sprintf(
      Game::get()::translate(
        'Attempting to take an action (%s) that is not possible. Either another card erroneously flagged this action as possible, or this action was possible until another card interfered.'
      ),
      $actionId
    );
    return $msg;
  }

  public static function getState($actionId, $ctx)
  {
    return self::get($actionId, $ctx)->getState();
  }

  public static function getArgs($actionId, $ctx)
  {
    $action = self::get($actionId, $ctx);
    $methodName = 'args' . $action->getClassName();
    $args = \method_exists($action, $methodName) ? $action->$methodName() : [];
    return array_merge($args, ['optionalAction' => $ctx->isOptional()]);
  }

  public static function takeAction($actionId, $actionName, $args, $ctx)
  {
    $player = Players::getActive();
    if (!self::isDoable($actionId, $ctx, $player)) {
      throw new \BgaUserException(self::getErrorMessage($actionId));
    }

    $action = self::get($actionId, $ctx);
    $methodName = $actionName; //'act' . self::$classes[$actionId];
    $action->$methodName($args);
  }

  /**
   * Execute state action
   */
  public static function stAction($actionId, $ctx)
  {
    $action = self::get($actionId, $ctx);
    $methodName = 'st' . $action->getClassName();
    if (\method_exists($action, $methodName)) {
      $action->$methodName();
    }
  }

  /**
   * Action executed before activating the state
   */
  public static function stPreAction($actionId, $ctx)
  {
    $action = self::get($actionId, $ctx);
    $methodName = 'stPre' . $action->getClassName();
    if (\method_exists($action, $methodName)) {
      $action->$methodName();
      // TODO: check if we need irreversible check at some points
      // if ($ctx->isIrreversible(Players::get($ctx->getPId()))) {
      //   Engine::checkpoint();
      // }
    }
  }

  /**
   * Executes pass action as defined in atomic action
   */
  public static function pass($actionId, $ctx)
  {
    if (!$ctx->isOptional()) {
      self::error($ctx->toArray());
      throw new \BgaVisibleSystemException('This action is not optional');
    }

    $action = self::get($actionId, $ctx);
    $methodName = 'actPass' . $action->getClassName();
    if (\method_exists($action, $methodName)) {
      $action->$methodName();
    } else {
      Engine::resolve(PASS);
    }

    Engine::proceed();
  }
}
