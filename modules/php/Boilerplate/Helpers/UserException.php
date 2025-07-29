<?php
namespace Bga\Games\MollyHouseFrans\Boilerplate\Helpers;
use Bga\Games\MollyHouseFrans\Game;

class UserException extends \BgaUserException
{
  public function __construct($str)
  {
    parent::__construct(Game::get()::translate($str));
  }
}
?>
