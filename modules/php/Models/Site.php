<?php

namespace Bga\Games\MollyHouse\Models;

use Bga\Games\MollyHouse\Boilerplate\Core\Notifications;

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
  protected $action = null;
  protected $evidence;

  protected $attributes = [
    'id' => ['site_id', 'str'],
    'location' => 'site_location',
    'state' => ['site_state', 'int'],
    'evidence' => ['evidence', 'int'],
    'raidedOrDangerous' => ['raided_or_dangerous', 'int'],
  ];

  protected $staticAttributes = [
    'action',
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

  public function isDangerous()
  {
    return $this->raidedOrDangerous === 1;
  }

  public function isRaided()
  {
    return $this->raidedOrDangerous === 1;
  }

  public function isOpen()
  {
    return !$this->isRaided();
  }

  public function isMollyHouse()
  {
    return in_array($this->getId(), MOLLY_HOUSES);
  }

  public function generateEvidence($amount)
  {
    $this->incEvidence($amount);

    Notifications::endOfWeekGenerateEvidence(
      $this,
      $amount
    );
  }

  public function setRaided($isRaided)
  {
    if ($isRaided) {
      $this->setRaidedOrDangerous(1);
    } else {
      $this->setRaidedOrDangerous(0);
    }
  }

  public function setDangerousCruising($isRaided)
  {
    if ($isRaided) {
      $this->setRaidedOrDangerous(1);
    } else {
      $this->setRaidedOrDangerous(0);
    }
  }
}
