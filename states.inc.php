<?php

/**
 *------
 * BGA framework: Gregory Isabelli & Emmanuel Colin & BoardGameArena
 * MollyHouse implementation : © <Your name here> <Your email address here>
 *
 * This code has been produced on the BGA studio platform for use on http://boardgamearena.com.
 * See http://en.boardgamearena.com/#!doc/Studio for more information.
 * -----
 *
 * states.inc.php
 *
 * MollyHouse game states description
 *
 */

use Bga\GameFramework\GameStateBuilder;
use Bga\GameFramework\StateType;

/*
   Game state machine is a tool used to facilitate game developpement by doing common stuff that can be set up
   in a very easy way from this configuration file.

   Please check the BGA Studio presentation about game state to understand this, and associated documentation.

   Summary:

   States types:
   _ activeplayer: in this type of state, we expect some action from the active player.
   _ multipleactiveplayer: in this type of state, we expect some action from multiple players (the active players)
   _ game: this is an intermediary state where we don't expect any actions from players. Your game logic must decide what is the next game state.
   _ manager: special type for initial and final state

   Arguments of game states:
   _ name: the name of the GameState, in order you can recognize it on your own code.
   _ description: the description of the current game state is always displayed in the action status bar on
                  the top of the game. Most of the time this is useless for game state with `StateType::GAME` type.
   _ descriptionmyturn: the description of the current game state when it's your turn.
   _ type: defines the type of game states (activeplayer / multipleactiveplayer / game / manager)
   _ action: name of the method to call when this game state become the current game state. Usually, the
             action method is prefixed by 'st' (ex: 'stMyGameStateName').
   _ possibleactions: array that specify possible player actions on this step. It allows you to use `checkAction`
                      method on both client side (Javacript: `this.checkAction`) and server side (PHP: `$this->checkAction`).
                      Note that autowired actions and calls with this.bgaPerformAction call the checkAction except if it's explicitely disabled in the call
   _ transitions: the transitions are the possible paths to go from a game state to another. You must name
                  transitions in order to use transition names in `nextState` PHP method, and use IDs to
                  specify the next game state for each transition.
   _ args: name of the method to call to retrieve arguments for this gamestate. Arguments are sent to the
           client side to be used on `onEnteringState` or to set arguments in the gamestate description.
   _ updateGameProgression: when specified, the game progression is updated (=> call to your getGameProgression
                            method).
*/

//    !! It is not a good idea to modify this file when a game is running !!


$machinestates = [
    98 => GameStateBuilder::endScore()->build(),

    // .########.##....##..######...####.##....##.########
    // .##.......###...##.##....##...##..###...##.##......
    // .##.......####..##.##.........##..####..##.##......
    // .######...##.##.##.##...####..##..##.##.##.######..
    // .##.......##..####.##....##...##..##..####.##......
    // .##.......##...###.##....##...##..##...###.##......
    // .########.##....##..######...####.##....##.########


    ST_GENERIC_NEXT_PLAYER => GameStateBuilder::create()
        ->name(GENERIC_NEXT_PLAYER)
        ->description('')
        ->action('stGenericNextPlayer')
        ->type(StateType::GAME)
        ->build(),

    ST_END_OF_WEEK_DOMINO_CHECK => GameStateBuilder::create()
        ->name(END_OF_WEEK_DOMINO_CHECK)
        ->description('')
        ->type(StateType::GAME)
        ->action('stAtomicAction')
        ->build(),

    ST_RESOLVE_STACK => GameStateBuilder::create()
        ->name(START_GAME_ENGINE)
        ->description('')
        ->type(StateType::GAME)
        ->action('stResolveStack')
        ->build(),

    ST_CONFIRM_TURN => GameStateBuilder::create()
        ->name(CONFIRM_TURN)
        ->description(clienttranslate('${actplayer} must confirm or restart their turn'))
        ->descriptionmyturn(clienttranslate('${you} must confirm or restart your turn'))
        ->type(StateType::ACTIVE_PLAYER)
        ->args('argsConfirmTurn')
        ->action('stConfirmTurn')
        ->possibleactions([
            // these actions are called from the front with bgaPerformAction, and matched to the function on the game.php file
            'act' . CONFIRM_TURN,
            'actRestart',
            'actUndoToStep',
        ])
        ->build(),

    ST_CONFIRM_PARTIAL_TURN => GameStateBuilder::create()
        ->name(CONFIRM_PARTIAL_TURN)
        ->description(clienttranslate('${actplayer} must confirm the switch of player'))
        ->descriptionmyturn(clienttranslate('${you} must confirm the switch of player. You will not be able to restart turn'))
        ->type(StateType::ACTIVE_PLAYER)
        ->args('argsConfirmTurn')
        ->action('stConfirmTurn')
        ->possibleactions([
            // these actions are called from the front with bgaPerformAction, and matched to the function on the game.php file
            'act' . CONFIRM_PARTIAL_TURN,
            'actRestart',
            'actUndoToStep',
        ])
        ->build(),



    // only keep this line if your initial state is not 2. In that case, uncomment and replace '2' by your first state id.
    // 1 => GameStateBuilder::gameSetup(2)->build(), 

    ST_START_GAME_ENGINE => GameStateBuilder::create()
        ->name(START_GAME_ENGINE)
        ->description('')
        ->type(StateType::GAME)
        ->action('stStartGameEngine')
        ->build(),

    // ....###....########..#######..##.....##.####..######.
    // ...##.##......##....##.....##.###...###..##..##....##
    // ..##...##.....##....##.....##.####.####..##..##......
    // .##.....##....##....##.....##.##.###.##..##..##......
    // .#########....##....##.....##.##.....##..##..##......
    // .##.....##....##....##.....##.##.....##..##..##....##
    // .##.....##....##.....#######..##.....##.####..######.

    // ....###.....######..########.####..#######..##....##..######.
    // ...##.##...##....##....##.....##..##.....##.###...##.##....##
    // ..##...##..##..........##.....##..##.....##.####..##.##......
    // .##.....##.##..........##.....##..##.....##.##.##.##..######.
    // .#########.##..........##.....##..##.....##.##..####.......##
    // .##.....##.##....##....##.....##..##.....##.##...###.##....##
    // .##.....##..######.....##....####..#######..##....##..######.

    ST_PLAYER_SETUP_CHOOSE_CARD => GameStateBuilder::create()
        ->name(PLAYER_SETUP_CHOOSE_CARD)
        ->description(clienttranslate('All players must select a card'))
        ->descriptionmyturn(clienttranslate('${you}'))
        ->type(StateType::MULTIPLE_ACTIVE_PLAYER)
        ->args('argsAtomicAction')
        ->possibleactions([
            // these actions are called from the front with bgaPerformAction, and matched to the function on the game.php file
            'act' . PLAYER_SETUP_CHOOSE_CARD,
            'actTakeAtomicAction',
        ])
        ->transitions([
            'next' => ST_RESOLVE_STACK
        ])
        ->build(),

    ST_TAKE_ACTION => GameStateBuilder::create()
        ->name(TAKE_ACTION)
        ->description(clienttranslate('${actplayer} must perform an action'))
        ->descriptionmyturn(clienttranslate('${you}'))
        ->type(StateType::ACTIVE_PLAYER)
        ->args('argsAtomicAction')
        ->possibleactions([
            // these actions are called from the front with bgaPerformAction, and matched to the function on the game.php file
            'act' . TAKE_ACTION,
            'actTakeAtomicAction',
            'actRestart',
            'actUndoToStep',
        ])
        ->transitions([
            'playCard' => 4,
            'pass' => 4,
        ])
        ->build(),

    ST_ROLL_DICE => GameStateBuilder::create()
        ->name(ROLL_DICE)
        ->description('')
        ->type(StateType::GAME)
        ->action('stAtomicAction')
        ->build(),

    ST_CHECK_HAND_SIZE => GameStateBuilder::create()
        ->name(CHECK_HAND_SIZE)
        ->description('')
        ->type(StateType::GAME)
        ->action('stAtomicAction')
        ->build(),

    ST_RESOLVE_MARKET_DISCARD => GameStateBuilder::create()
        ->name(RESOLVE_MARKET_DISCARD)
        ->description('')
        ->type(StateType::GAME)
        ->action('stAtomicAction')
        ->build(),

    ST_REFILL_MARKET => GameStateBuilder::create()
        ->name(REFILL_MARKET)
        ->description('')
        ->type(StateType::GAME)
        ->action('stAtomicAction')
        ->build(),

    ST_INDULGE => GameStateBuilder::create()
        ->name(INDULGE)
        ->description(clienttranslate('${actplayer} must indulge or pass'))
        ->descriptionmyturn(clienttranslate('${you} must indulge or pass'))
        ->type(StateType::ACTIVE_PLAYER)
        ->args('argsAtomicAction')
        ->possibleactions([
            // these actions are called from the front with bgaPerformAction, and matched to the function on the game.php file
            'act' . INDULGE,
            'actPass',
        ])
        ->build(),

    ST_LIE_LOW => GameStateBuilder::create()
        ->name(LIE_LOW)
        ->description(clienttranslate('${actplayer} must lie low or pass'))
        ->descriptionmyturn(clienttranslate('${you} must indulge or pass'))
        ->type(StateType::ACTIVE_PLAYER)
        ->args('argsAtomicAction')
        ->possibleactions([
            // these actions are called from the front with bgaPerformAction, and matched to the function on the game.php file
            'act' . LIE_LOW,
            'actPass',
        ])
        ->build(),

    ST_ACCUSE => GameStateBuilder::create()
        ->name(ACCUSE)
        ->description(clienttranslate('${actplayer} must accuse or pass'))
        ->descriptionmyturn(clienttranslate('${you} must accuse or pass'))
        ->type(StateType::ACTIVE_PLAYER)
        ->args('argsAtomicAction')
        ->possibleactions([
            'act' . ACCUSE,
            'actPass',
        ])
        ->build(),

    ST_CRUISE => GameStateBuilder::create()
        ->name(CRUISE)
        ->description(clienttranslate('${actplayer} is cruising'))
        ->descriptionmyturn(clienttranslate('${you} are cruising'))
        ->type(StateType::ACTIVE_PLAYER)
        ->args('argsAtomicAction')
        ->possibleactions([
            'act' . CRUISE,
            'actPass',
        ])
        ->build(),

    ST_SHOP => GameStateBuilder::create()
        ->name(SHOP)
        ->description(clienttranslate('${actplayer} is shopping'))
        ->descriptionmyturn(clienttranslate('${you} are shopping'))
        ->type(StateType::ACTIVE_PLAYER)
        ->args('argsAtomicAction')
        ->possibleactions([
            'act' . SHOP,
            'actPass',
        ])
        ->build(),

    ST_THROW_FESTIVITY => GameStateBuilder::create()
        ->name(THROW_FESTIVITY)
        ->description(clienttranslate('${actplayer} must throw a festivity'))
        ->descriptionmyturn(clienttranslate('${you} must throw a festivity'))
        ->type(StateType::ACTIVE_PLAYER)
        ->args('argsAtomicAction')
        ->possibleactions([
            'actThrow' . THROW_FESTIVITY,
            'actPass',
        ])
        ->build(),

    ST_MOVE_PAWN => GameStateBuilder::create()
        ->name(MOVE_PAWN)
        ->description(clienttranslate('${actplayer} must move their pawn'))
        ->descriptionmyturn(clienttranslate('${you}'))
        ->type(StateType::ACTIVE_PLAYER)
        ->args('argsAtomicAction')
        ->possibleactions([
            'act' . MOVE_PAWN,
            'actTakeAtomicAction',
        ])
        ->build(),

    ST_ADD_EXCESS_CARDS_TO_GOSSIP => GameStateBuilder::create()
        ->name(ADD_EXCESS_CARDS_TO_GOSSIP)
        ->description(clienttranslate('${actplayer} must add excess cards to the gossip pile'))
        ->descriptionmyturn(clienttranslate('${you}'))
        ->type(StateType::ACTIVE_PLAYER)
        ->args('argsAtomicAction')
        ->action('stAtomicAction')
        ->possibleactions([
            'actAddExcessCardsToGossip',
            'actTakeAtomicAction',
            'actRestart',
            'actUndoToStep',
        ])
        ->build(),

    ST_FESTIVITY_SETUP_ROUND => GameStateBuilder::create()
        ->name(FESTIVITY_SETUP_ROUND)
        ->description('')
        ->type(StateType::GAME)
        ->action('stAtomicAction')
        ->build(),

    ST_FESTIVITY_REVEAL_TOP_CARD_VICE_DECK => GameStateBuilder::create()
        ->name(FESTIVITY_REVEAL_TOP_CARD_VICE_DECK)
        ->description('')
        ->type(StateType::GAME)
        ->action('stAtomicAction')
        ->build(),

    ST_FESTIVITY_PLAY_CARD => GameStateBuilder::create()
        ->name(FESTIVITY_PLAY_CARD)
        ->description(clienttranslate('${actplayer} must play a card'))
        ->descriptionmyturn(clienttranslate('${you}'))
        ->type(StateType::ACTIVE_PLAYER)
        ->args('argsAtomicAction')
        ->possibleactions([
            'actFestivityPlayCard',
            'actTakeAtomicAction',
            'actPassOptionalAction',
            'actRestart',
            'actUndoToStep',
        ])
        ->build(),

    ST_FESTIVITY_CLEANUP => GameStateBuilder::create()
        ->name(FESTIVITY_CLEANUP)
        ->description('')
        ->type(StateType::GAME)
        ->action('stAtomicAction')
        ->build(),

    ST_FESTIVITY_DETERMINE_WINNING_SET => GameStateBuilder::create()
        ->name(FESTIVITY_DETERMINE_WINNING_SET)
        ->description('')
        ->type(StateType::GAME)
        ->action('stAtomicAction')
        ->build(),

    ST_FINAL_SCORING => GameStateBuilder::create()
        ->name(FINAL_SCORING)
        ->description('')
        ->type(StateType::GAME)
        ->action('stAtomicAction')
        ->build(),

    ST_FESTIVITY_SCORE_JOY => GameStateBuilder::create()
        ->name(FESTIVITY_SCORE_JOY)
        ->description('')
        ->type(StateType::GAME)
        ->action('stAtomicAction')
        ->build(),

    ST_FESTIVITY_SCORE_BONUS => GameStateBuilder::create()
        ->name(FESTIVITY_SCORE_BONUS)
        ->description('')
        ->type(StateType::GAME)
        ->action('stAtomicAction')
        ->build(),

    ST_FESTIVITY_GENERATE_GOSSIP => GameStateBuilder::create()
        ->name(FESTIVITY_GENERATE_GOSSIP)
        ->description(clienttranslate('${actplayer} must generate gossip'))
        ->descriptionmyturn(clienttranslate('${you}'))
        ->type(StateType::ACTIVE_PLAYER)
        ->args('argsAtomicAction')
        ->possibleactions([
            'actTakeAtomicAction',
            'actFestivityGenerateGossip',
            'actPass',
        ])
        ->build(),

    ST_FESTIVITY_SELECT_WINNING_SET => GameStateBuilder::create()
        ->name(FESTIVITY_SELECT_WINNING_SET)
        ->description(clienttranslate('${actplayer} must select the winning set'))
        ->descriptionmyturn(clienttranslate('${you}'))
        ->type(StateType::ACTIVE_PLAYER)
        ->args('argsAtomicAction')
        ->possibleactions([
            'actTakeAtomicAction',
            'actFestivitySelectWinningSet',
            'actPass',
        ])
        ->build(),

    ST_LOG_PHASE => GameStateBuilder::create()
        ->name(LOG_PHASE)
        ->description('')
        ->type(StateType::GAME)
        ->action('stAtomicAction')
        ->build(),

    ST_FESTIVITY_CHOOSE_NEXT_FOILED_THREAT => GameStateBuilder::create()
        ->name(FESTIVITY_CHOOSE_NEXT_FOILED_THREAT)
        ->description(clienttranslate('${actplayer} must choose the next threat to foil'))
        ->descriptionmyturn(clienttranslate('${you}'))
        ->type(StateType::ACTIVE_PLAYER)
        ->args('argsAtomicAction')
        ->possibleactions([
            'actFestivityChooseNextFoiledThreat',
            'actPass',
            'actTakeAtomicAction',
        ])
        ->build(),

    ST_FESTIVITY_TAKE_MATCHING_CUBES => GameStateBuilder::create()
        ->name(FESTIVITY_TAKE_MATCHING_CUBES)
        ->description(clienttranslate('${actplayer} may take matching cubes'))
        ->descriptionmyturn(clienttranslate('${you}'))
        ->type(StateType::ACTIVE_PLAYER)
        ->args('argsAtomicAction')
        ->possibleactions([
            'actFestivityTakeMatchingCubes',
            'actPass',
            'actTakeAtomicAction',
        ])
        ->build(),

    ST_FESTIVITY_FOIL_THREAT => GameStateBuilder::create()
        ->name(FESTIVITY_FOIL_THREAT)
        ->description('')
        ->type(StateType::GAME)
        ->action('stAtomicAction')
        ->build(),

    ST_FESTIVITY_FOIL_THREAT_ADD_TO_SAFE_PILE => GameStateBuilder::create()
        ->name(FESTIVITY_FOIL_THREAT_ADD_TO_SAFE_PILE)
        ->description('')
        ->type(StateType::GAME)
        ->action('stAtomicAction')
        ->build(),

    ST_END_OF_WEEK_REVEAL_THREATS => GameStateBuilder::create()
        ->name(END_OF_WEEK_REVEAL_THREATS)
        ->description('')
        ->type(StateType::GAME)
        ->action('stAtomicAction')
        ->build(),

    ST_END_OF_WEEK_SOCIETY_INVESTIGATES => GameStateBuilder::create()
        ->name(END_OF_WEEK_SOCIETY_INVESTIGATES)
        ->description('')
        ->type(StateType::GAME)
        ->action('stAtomicAction')
        ->build(),

    ST_END_OF_WEEK_CHECK_FOR_RAIDS => GameStateBuilder::create()
        ->name(END_OF_WEEK_CHECK_FOR_RAIDS)
        ->description('')
        ->type(StateType::GAME)
        ->action('stAtomicAction')
        ->build(),

    ST_END_OF_WEEK_CHECK_GAME_END => GameStateBuilder::create()
        ->name(END_OF_WEEK_CHECK_GAME_END)
        ->description('')
        ->type(StateType::GAME)
        ->action('stAtomicAction')
        ->build(),

    ST_END_OF_WEEK_ENCOUNTER_SOCIETY => GameStateBuilder::create()
        ->name(END_OF_WEEK_ENCOUNTER_SOCIETY)
        ->description(clienttranslate('${actplayer} must resolve their encounter with the Society'))
        ->descriptionmyturn(clienttranslate('${you} must resolve your encounter with the Society'))
        ->type(StateType::MULTIPLE_ACTIVE_PLAYER)
        ->args('argsAtomicAction')
        ->possibleactions([
            'actEndOfWeekEncounterSociety',
            'actPass',
            'actTakeAtomicAction',
        ])
        ->transitions([
            'next' => ST_RESOLVE_STACK
        ])
        ->build(),

    ST_END_OF_WEEK_CLEANUP => GameStateBuilder::create()
        ->name(END_OF_WEEK_CLEANUP)
        ->description('')
        ->type(StateType::GAME)
        ->action('stAtomicAction')
        ->build(),

    ST_DISCARD_ITEM => GameStateBuilder::create()
        ->name(DISCARD_ITEM)
        ->description(clienttranslate('${actplayer} must discard an item'))
        ->descriptionmyturn(clienttranslate('${you}'))
        ->type(StateType::ACTIVE_PLAYER)
        ->args('argsAtomicAction')
        ->possibleactions([
            'actDiscardItem',
            'actPass',
            'actTakeAtomicAction',
        ])
        ->build(),

    ST_EXAMINE_GOSSIP_PILE => GameStateBuilder::create()
        ->name(EXAMINE_GOSSIP_PILE)
        ->description(clienttranslate('${actplayer} may take a card from the gossip pile'))
        ->descriptionmyturn(clienttranslate('${you}'))
        ->type(StateType::ACTIVE_PLAYER)
        ->args('argsAtomicAction')
        ->possibleactions([
            'actExamineGossipPile',
            'actPass',
            'actTakeAtomicAction',

        ])
        ->build(),

    ST_PLACE_ENCOUNTER_TOKEN => GameStateBuilder::create()
        ->name(PLACE_ENCOUNTER_TOKEN)
        ->description(clienttranslate('${actplayer} must place an encounter token'))
        ->descriptionmyturn(clienttranslate('${you}'))
        ->type(StateType::ACTIVE_PLAYER)
        ->args('argsAtomicAction')
        ->possibleactions([
            'actPlaceEncounterToken',
            'actPass',
            'actTakeAtomicAction',
            'actRestart',
            'actUndoToStep',
        ])
        ->build(),

    ST_FESTIVITY_BOTTLE_OF_GIN_CHECK => GameStateBuilder::create()
        ->name(FESTIVITY_BOTTLE_OF_GIN_CHECK)
        ->description('')
        ->type(StateType::GAME)
        ->action('stAtomicAction')
        ->build(),

    ST_FESTIVITY_USE_BOTTLE_OF_GIN => GameStateBuilder::create()
        ->name(FESTIVITY_USE_BOTTLE_OF_GIN)
        ->description(clienttranslate('${actplayer} may use a Bottle of Gin'))
        ->descriptionmyturn(clienttranslate('${you}'))
        ->type(StateType::MULTIPLE_ACTIVE_PLAYER)
        ->args('argsAtomicAction')
        ->possibleactions([
            'actFestivityUseBottleOfGin',
            'actPass',
            'actTakeAtomicAction',
        ])
        ->transitions([
            'next' => ST_RESOLVE_STACK
        ])
        ->build(),

    ST_PLAY_VIOLIN => GameStateBuilder::create()
        ->name(PLAY_VIOLIN)
        ->description('')
        ->type(StateType::GAME)
        ->action('stAtomicAction')
        ->build(),

    ST_FESTIVITY_PLAY_DRESS => GameStateBuilder::create()
        ->name(FESTIVITY_PLAY_DRESS)
        ->description(clienttranslate('${actplayer} may play a Dress'))
        ->descriptionmyturn(clienttranslate('${you}'))
        ->type(StateType::ACTIVE_PLAYER)
        ->args('argsAtomicAction')
        ->possibleactions([
            'actFestivityPlayDress',
            'actPassFestivityPlayDress',
            'actTakeAtomicAction',
        ])
        ->build(),

    ST_END_OF_WEEK_USE_DOMINO => GameStateBuilder::create()
        ->name(END_OF_WEEK_USE_DOMINO)
        ->description(clienttranslate('${actplayer} may play Domino'))
        ->descriptionmyturn(clienttranslate('${you}'))
        ->type(StateType::MULTIPLE_ACTIVE_PLAYER)
        ->args('argsAtomicAction')
        ->possibleactions([
            'actEndOfWeekUseDomino',
            'actPass',
            'actTakeAtomicAction',
        ])
        ->transitions([
            'next' => ST_RESOLVE_STACK
        ])
        ->build(),
];
