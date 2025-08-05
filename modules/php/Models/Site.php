<?php

namespace Bga\Games\MollyHouse\Models;

class Site extends \Bga\Games\MollyHouse\Boilerplate\Helpers\DB_Model
{
  protected $id;
  protected $table = 'sites';
  protected $primary = 'site_id';
  protected $location;
  protected $state;
  protected $used;

  protected $locationOrder;
  protected $name;
  protected $address = '';
  protected $suit;
  protected $raidedOrDangerous;

  protected $attributes = [
    'id' => ['site_id', 'str'],
    'location' => 'site_location',
    'state' => ['site_state', 'int'],
    'raidedOrDangerous' => ['raided_or_dangerous', 'int'],
  ];

  protected $staticAttributes = [
    'locationOrder',
    'name',
    'address',
    'suit',
  ];
  public function jsonSerialize(): array
  {
    $data = parent::jsonSerialize();
    return $data;
  }

  public function getUiData()
  {
    // Notifications::log('getUiData card model', []);
    return $this->jsonSerialize(); // Static datas are already in js file
  }

  
}
