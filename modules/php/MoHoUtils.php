<?php

namespace Bga\Games\MollyHouse;

use Bga\Games\MollyHouse\Boilerplate\Core\Notifications;

class MohoUtils
{
  public static function rollDie()
  {
    return bga_rand(1, 6);
  }


}
