<?php

namespace Bga\Games\MollyHouse\Models;

class IndictmentCard extends \Bga\Games\MollyHouse\Boilerplate\Helpers\DB_Model
{
  protected $id;
  protected $table = 'indictment_cards';
  protected $primary = 'card_id';
  protected $location;
  protected $state;
  protected $used;

  protected $acquittedResult;
  protected $convictedValue;
  protected $convictedResult;
  protected $text;
  protected $type;

  protected $attributes = [
    'id' => ['card_id', 'str'],
    'location' => 'card_location',
    'state' => ['card_state', 'int'],
  ];

  protected $staticAttributes = [
    'acquittedResult',
    'convictedValue',
    'convictedResult',
    'text',
    'type',
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
