<?php

namespace Bga\Games\MollyHouse\Managers;


class Sites extends \Bga\Games\MollyHouse\Boilerplate\Helpers\Pieces
{
  protected static $table = 'sites';
  protected static $prefix = 'site_';
  protected static $customFields = [
    'evidence',
    'raided_or_dangerous'
  ];
  protected static $autoremovePrefix = false;
  protected static $autoreshuffle = false;
  protected static $autoIncrement = false;

  protected static function cast($card)
  {
    return self::getCardInstance($card['site_id'], $card);
  }

  public static function getCardInstance($id, $data = null)
  {
    // $prefix = self::getClassPrefix($id);

    $className = "\Bga\Games\MollyHouse\Sites\\$id";
    return new $className($data);
  }

  /**
   * getStaticUiData : return static data
   */
  public static function getStaticUiData()
  {
    $pieces = self::getAll()->toArray();

    $data = [];
    foreach ($pieces as $index => $piece) {
      $data[$piece->getId()] = $piece->getStaticData();
    }
    return $data;
  }


  // ..######..########.########.##.....##.########.
  // .##....##.##..........##....##.....##.##.....##
  // .##.......##..........##....##.....##.##.....##
  // ..######..######......##....##.....##.########.
  // .......##.##..........##....##.....##.##.......
  // .##....##.##..........##....##.....##.##.......
  // ..######..########....##.....#######..##.......


  private static function setupLoadSites()
  {
    // Load list of cards

    $sites = [];

    foreach (SITES as $index => $siteId) {
      $sites[$siteId] = [
        'id' => $siteId,
        'location' => 'board_' . $index,
        'raided_or_dangerous' => 0,
      ];
    }

    // Create the cards
    self::create($sites, null);
  }


  /* Creation of the cards */
  public static function setupNewGame($players = null, $options = null)
  {
    self::setupLoadSites();
  }

  //  .##.....##.########.####.##.......####.########.##....##
  //  .##.....##....##.....##..##........##.....##.....##..##.
  //  .##.....##....##.....##..##........##.....##......####..
  //  .##.....##....##.....##..##........##.....##.......##...
  //  .##.....##....##.....##..##........##.....##.......##...
  //  .##.....##....##.....##..##........##.....##.......##...
  //  ..#######.....##....####.########.####....##.......##...

  /**
   * Get all sites
   * @param stepsToTake array of steps to take, e.g. [1, 2, 3]
   * @param fromSiteId the site id to start from, e.g. MOTHER_CLAPS
   */
  public static function getSitesAtDistance($stepsToTake, $fromSiteId)
  {
    $sites = self::getAll();
    if (count($stepsToTake) === 0) {
      return $sites;
    }

    $pawnIndex = array_search($fromSiteId, SITES);
    $sitesToMoveTo = [];

    foreach ($stepsToTake as $stepToTake) {
      if ($stepToTake === 0) {
        $sitesToMoveTo[$fromSiteId] = $sites[$fromSiteId];
      }

      foreach ([$stepToTake, -$stepToTake] as $steps) {
        $highestIndex = count(SITES) - 1;
        $toIndex = $pawnIndex + $steps;
        if ($toIndex > $highestIndex) {
          $toIndex = $toIndex - $highestIndex - 1;
        } else if ($toIndex < 0) {
          $toIndex = $highestIndex + $toIndex + 1;
        }

        $toSiteId = SITES[$toIndex];
        $sitesToMoveTo[$toSiteId] = $sites[$toSiteId];
      }
    }

    return $sitesToMoveTo;
  }
}
