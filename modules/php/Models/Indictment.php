<?php

namespace Bga\Games\MollyHouse\Models;

use Bga\Games\MollyHouse\Boilerplate\Core\Notifications;
use Bga\Games\MollyHouse\Managers\DieManager;

class Indictment extends \Bga\Games\MollyHouse\Boilerplate\Helpers\DB_Model
{
  protected $id;
  protected $table = 'indictment_cards';
  protected $primary = 'card_id';
  protected $location;
  protected $state;
  protected $indictmentId;
  protected $hidden;

  protected $acquittedResult;
  protected $convictedValue;
  protected $convictedResult;
  protected $text;
  protected $type;


  protected $attributes = [
    'id' => ['card_id', 'str'],
    'location' => 'card_location',
    'state' => ['card_state', 'int'],
    'indictmentId' => ['indictment_id', 'str'],
    'hidden' => ['hidden', 'int'],
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
    return array_merge($data, [
      'hidden' => $this->hidden === 1,
      'type' => $this->type
    ]);
  }

  public function jsonSerializeAnonymous()
  {
    $data = $this->jsonSerialize();
    $data['indictmentId'] = null;
    return $data;
  }

  public function getUiData()
  {
    // Notifications::log('getUiData card model', []);
    return $this->jsonSerialize(); // Static datas are already in js file
  }

  public function discard($player)
  {
    $this->setLocation(DISCARD);

    Notifications::discardIndictment($player, $this);
  }

  public function reveal($player)
  {
    $this->setHidden(0);
    Notifications::revealIndictment($player, $this);
  }

  public function faceTrial($player)
  {
    $this->reveal($player);

    Notifications::message(
      clienttranslate('${player_name} is "${tkn_boldText_indictmentText}"'),
      [
        'player' => $player,
        'tkn_boldText_indictmentText' => $this->getText(),
        'i18n' => ['tkn_boldText_indictmentText']
      ]
    );

    $dieResult = DieManager::rollTenSided($player, false);

    if ($dieResult >= $this->getConvictedValue()) {
      Notifications::message(
        clienttranslate('${player_name} rolls ${tkn_boldText_dieResult} is ${tkn_boldText_trialResult}'),
        [
          'player' => $player,
          'tkn_boldText_dieResult' => $dieResult,
          'tkn_boldText_trialResult' => clienttranslate('Convicted'),
          'i18n' => ['tkn_boldText_trialResult']
        ]
      );
      $convictedResult = $this->getConvictedResult();
      if ($convictedResult === null) {
        $player->hang();
        return true;
      } else {
        $player->loseJoy(abs($convictedResult));
      }
    } else {
      Notifications::message(
        clienttranslate('${player_name} rolls ${tkn_boldText_dieResult} is ${tkn_boldText_trialResult}'),
        [
          'player' => $player,
          'tkn_boldText_dieResult' => $dieResult,
          'tkn_boldText_trialResult' => clienttranslate('Acquitted'),
          'i18n' => ['tkn_boldText_trialResult']
        ]
      );
      $player->loseJoy(abs($this->getAcquittedResult()));
    }
    return false;
  }
}
