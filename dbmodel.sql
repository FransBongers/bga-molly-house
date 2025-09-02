
-- ------
-- BGA framework: Gregory Isabelli & Emmanuel Colin & BoardGameArena
-- MollyHouse implementation : © <Your name here> <Your email address here>
-- 
-- This code has been produced on the BGA studio platform for use on http://boardgamearena.com.
-- See http://en.boardgamearena.com/#!doc/Studio for more information.
-- -----

-- dbmodel.sql

-- This is the file where you are describing the database schema of your game
-- Basically, you just have to export from PhpMyAdmin your table structure and copy/paste
-- this export here.
-- Note that the database itself and the standard tables ("global", "stats", "gamelog" and "player") are
-- already created and must not be created here

-- Note: The database schema is created from this file when the game starts. If you modify this file,
--       you have to restart a game to see your changes in database.

-- Example 1: create a standard "card" table to be used with the "Deck" tools (see example game "hearts"):

-- CREATE TABLE IF NOT EXISTS `card` (
--   `card_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
--   `card_type` varchar(16) NOT NULL,
--   `card_type_arg` int(11) NOT NULL,
--   `card_location` varchar(16) NOT NULL,
--   `card_location_arg` int(11) NOT NULL,
--   PRIMARY KEY (`card_id`)
-- ) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;


-- Example 2: add a custom field to the standard "player" table
-- ALTER TABLE `player` ADD `player_my_custom_field` INT UNSIGNED NOT NULL DEFAULT '0';
CREATE TABLE IF NOT EXISTS `global_variables` (
  `name` varchar(50) NOT NULL,
  `value` json,
  PRIMARY KEY (`name`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8;
CREATE TABLE IF NOT EXISTS `user_preferences` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `player_id` int(10) NOT NULL,
  `pref_id` int(10) NOT NULL,
  `pref_value` int(10) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8;
CREATE TABLE IF NOT EXISTS `log` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `move_id` int(10) NOT NULL,
  `table` varchar(32) NOT NULL,
  `primary` varchar(32) NOT NULL,
  `type` varchar(32) NOT NULL,
  `affected` JSON,
  PRIMARY KEY (`id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8;
ALTER TABLE `gamelog`
ADD `cancel` TINYINT(1) NOT NULL DEFAULT 0;

CREATE TABLE IF NOT EXISTS `indictment_cards` (
  `card_id` varchar(100) NOT NULL,
  `card_location` varchar(32) NOT NULL,
  `card_state` int(10) DEFAULT 0,
  PRIMARY KEY (`card_id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8;
CREATE TABLE IF NOT EXISTS `items` (
  `item_id` varchar(100) NOT NULL,
  `item_location` varchar(32) NOT NULL,
  `item_state` int(10) DEFAULT 0,
  `type` varchar(32) NOT NULL,
  PRIMARY KEY (`item_id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8;
CREATE TABLE IF NOT EXISTS `vice_cards` (
  `card_id` varchar(100) NOT NULL,
  `card_location` varchar(32) NOT NULL,
  `card_state` int(10) DEFAULT 0,
  `hidden` tinyint(1) DEFAULT 0,
  `festivity_value` int(10) DEFAULT 0,
  PRIMARY KEY (`card_id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8;
CREATE TABLE IF NOT EXISTS `sites` (
  `site_id` varchar(100) NOT NULL,
  `site_location` varchar(32) NOT NULL,
  `site_state` int(10) DEFAULT 0,
  `raided_or_dangerous` tinyint(1) DEFAULT 0,
  `evidence` int(10) DEFAULT 0,
  PRIMARY KEY (`site_id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8;
CREATE TABLE IF NOT EXISTS `pawns` (
  `pawn_id` varchar(32) NOT NULL,
  `pawn_location` varchar(32) NOT NULL,
  `pawn_state` int(10) DEFAULT 0,
  PRIMARY KEY (`pawn_id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8;
CREATE TABLE IF NOT EXISTS `encounter_tokens` (
  `token_id` varchar(100) NOT NULL,
  `token_location` varchar(32) NOT NULL,
  `token_state` int(10) DEFAULT 0,
  `hidden` tinyint(1) DEFAULT 1,
  `type` varchar(32) NOT NULL,
  `color` varchar(32) NOT NULL,
  PRIMARY KEY (`token_id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8;
CREATE TABLE IF NOT EXISTS `players_extra` (
  `player_extra_id` varchar(32) NOT NULL,
  `player_extra_location` varchar(32) NOT NULL,
  `player_extra_state` int(10) DEFAULT 0,
  `cubes_cups` int(10) DEFAULT 0,
  `cubes_pentacles` int(10) DEFAULT 0,
  `cubes_fans` int(10) DEFAULT 0,
  `cubes_hearts` int(10) DEFAULT 0,
  `draw_tokens` int(10) DEFAULT 0,
  PRIMARY KEY (`player_extra_id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8;
