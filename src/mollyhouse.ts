/**
 *------
 * BGA framework: Gregory Isabelli & Emmanuel Colin & BoardGameArena
 * MollyHouse implementation : © Frans Bongers fjmbongers@gmail.com
 *
 * This code has been produced on the BGA studio platform for use on http://boardgamearena.com.
 * See http://en.boardgamearena.com/#!doc/Studio for more information.
 * -----
 *
 * mollyhouse.js
 *
 * MollyHouse user interface script
 *
 * In this file, you are describing the logic of your user interface, in Javascript language.
 *
 */
// declare const define; // TODO: check if we comment here or in bga-animations module?
// declare const ebg;
// declare const $;
declare const dijit: any;
// declare const dojo: Dojo;
// declare const _: (stringToTranslate: string) => string;
// declare const g_gamethemeurl;
declare const playSound: any;
declare var noUiSlider: any;

function sleep(ms: number) {
  return new Promise((r) => setTimeout(r, ms));
}

class MollyHouse implements Game {
  public gamedatas!: MollyHouseGamedatas;

  // Default
  public animationManager!: AnimationManager;
  //  public settings: Settings;
  public gameOptions!: GamedatasAlias['gameOptions'];
  public notificationManager!: NotificationManager;
  public playerOrder!: number[];
  //  public tooltipManager: TooltipManager;

  // Boiler plate
  //  private alwaysFixTopActions: boolean;
  //  private alwaysFixTopActionsMaximum: number;
  //  public tooltipsToMap: [tooltipId: number, card_id: string][] = [];
  public _connections!: unknown[];
  public _displayedTooltip: any = null;
  public _dragndropMode = false; // Not used but present in boiler plate code
  public _helpMode = false; // Use to implement help mode
  private _last_notif: {
    logId: any;
    mobileLogId: any;
    msg: Notif<unknown>;
  } | null = null;
  //  public _last_tooltip_id = 0;
  private _notif_uid_to_log_id: Record<string, unknown> = {};
  private _notif_uid_to_mobile_log_id: Record<string, unknown> = {};
  private _selectableNodes: HTMLElement[] = []; // TODO: use to keep track of selectable classed?
  public mobileVersion: boolean = false;
  private isLoadingComplete: boolean = false;

  // Card managers
  public diceManager!: MollyHouseDiceManager;
  public encounterTokenManager!: EncounterTokenManager;
  public indictmentManager!: IndictmentManager;
  public itemManager!: ItemManager;
  public viceCardManager!: ViceCardManager;
  public joyMarkerManager!: JoyMarkerManager;
  public bga!: Bga<any, GamedatasAlias>;

  private states = {
    ConfirmPartialTurn,
    ConfirmTurn,
    TakeAction,
    PlayerSetupChooseCard,
    Indulge,
    LieLow,
    Accuse,
    AddExcessCardsToGossip,
    Cruise,
    Shop,
    MovePawn,
    FestivityPlayCard,
    FestivityGenerateGossip,
    FestivitySelectWinningSet,
    FestivityChooseNextFoiledThreat,
    FestivityTakeMatchingCubes,
    EndOfWeekEncounterSociety,
    DiscardItem,
    NewspaperNotice,
    UseDomino,
    ExamineGossipPile,
    PlaceEncounterToken,
    FestivityUseBottleOfGin,
    EndOfWeekUseDomino,
    FestivityPlayDress,
    ResolveChoice,
  };

  constructor() {
    console.log('MollyHouse constructor');
  }

  // ..#######..##.....##.########.########..########..####.########..########..######.
  // .##.....##.##.....##.##.......##.....##.##.....##..##..##.....##.##.......##....##
  // .##.....##.##.....##.##.......##.....##.##.....##..##..##.....##.##.......##......
  // .##.....##.##.....##.######...########..########...##..##.....##.######....######.
  // .##.....##..##...##..##.......##...##...##...##....##..##.....##.##.............##
  // .##.....##...##.##...##.......##....##..##....##...##..##.....##.##.......##....##
  // ..#######.....###....########.##.....##.##.....##.####.########..########..######.

  private overrideAddToLog(): void {
    const originalAddToLog =
      // @ts-ignore
      this.bga.notifications.game.notifqueue.addToLog.bind(
        // @ts-ignore
        this.bga.notifications.game.notifqueue,
      );
    // @ts-ignore
    this.bga.notifications.game.notifqueue.addToLog = (input: unknown) => {
      // @ts-ignore

      const res = originalAddToLog(input);
      this.addLogClass();

      return res;
    };
  }

  /**
   * Setup undo/cancel log tracking for notifications
   * Intercepts log placement to map notification UIDs to log IDs
   * @private
   */
  private overrideOnPlaceLogOnChannel(): void {
    const originalOnPlaceLogOnChannel =
      // @ts-ignore
      this.bga.gameui.onPlaceLogOnChannel.bind(this.bga.gameui);
    // @ts-ignore
    this.bga.gameui.onPlaceLogOnChannel = (msg: Notif<unknown>) => {
      // @ts-ignore
      const currentLogId = this.bga.gameui.notifqueue.next_log_id;
      // @ts-ignore
      const currentMobileLogId = this.bga.gameui.next_log_id;
      const res = originalOnPlaceLogOnChannel(msg);

      this._notif_uid_to_log_id[msg.uid] = currentLogId;
      this._notif_uid_to_mobile_log_id[msg.uid] = currentMobileLogId;
      this._last_notif = {
        logId: currentLogId,
        mobileLogId: currentMobileLogId,
        msg,
      };

      return res;
    };
  }

  private overrideSetLoader() {
    const originalSetLoader =
      // @ts-ignore
      this.bga.gameui.setLoader.bind(
        // @ts-ignore
        this.bga.gameui,
      );

    // @ts-ignore
    this.bga.gameui.setLoader = (value: any, max: any) => {
      originalSetLoader(value, max);

      if (!this.isLoadingComplete && value >= 100) {
        this.isLoadingComplete = true;
        this.onLoadingComplete();
      }
    };
  }

  onLoadingComplete() {
    this.updateLayout();
    // BgaAutofit.init({ scaleStep: 0.025, rootElement: document.body });
  }

  private overrideUpdatePlayerOrdering() {
    const original =
      // @ts-ignore
      this.bga.gameui.updatePlayerOrdering.bind(
        // @ts-ignore
        this.bga.gameui,
      );

    // @ts-ignore
    this.bga.gameui.updatePlayerOrdering = () => {
      original();
      // const container = document.getElementById('player_boards');
      // if (!container) {
      //   return;
      // }

      // this.playerOrder.forEach((playerId) => {
      //   const playerBoard = document.getElementById(
      //     `overall_player_board_${playerId}`,
      //   )!;
      //   container.insertAdjacentElement('beforeend', playerBoard);
      // });
    };
  }

  // ..######..########.########.##.....##.########.
  // .##....##.##..........##....##.....##.##.....##
  // .##.......##..........##....##.....##.##.....##
  // ..######..######......##....##.....##.########.
  // .......##.##..........##....##.....##.##.......
  // .##....##.##..........##....##.....##.##.......
  // ..######..########....##.....#######..##.......
  public setup(gamedatas: MollyHouseGamedatas) {
    this.overrideAddToLog();
    this.overrideOnPlaceLogOnChannel();
    this.overrideSetLoader();
    this.overrideUpdatePlayerOrdering();

    console.log('bga', this.bga);

    const body = document.getElementById('ebd-body');
    this.mobileVersion = !!body && body.classList.contains('mobile_version');

    // Create a new div for buttons to avoid BGA auto clearing it
    document
      .getElementById('generalactions')!
      .insertAdjacentHTML(
        'afterend',
        "<div id='customActions' style='display:inline-block'></div>",
      );

    document
      .getElementById('game_play_area')!
      .insertAdjacentHTML('afterbegin', tplPlayArea());

    this.gamedatas = gamedatas;
    this.gameOptions = gamedatas.gameOptions;

    debug('gamedatas', gamedatas);
    this.setupPlayerOrder(gamedatas.playerOrder);
    debug('game', this);

    this._connections = [];

    TooltipManager.create(this);
    Settings.create(this);
    const settings = Settings.getInstance();

    this.animationManager = new AnimationManager(this, {
      duration:
        settings.get(PREF_SHOW_ANIMATIONS) === DISABLED
          ? 0
          : 2100 - (settings.get(PREF_ANIMATION_SPEED) as number),
    });

    StaticData.create(this);
    this.diceManager = new MollyHouseDiceManager(this);
    this.encounterTokenManager = new EncounterTokenManager(this);
    this.indictmentManager = new IndictmentManager(this);
    this.itemManager = new ItemManager(this);
    this.viceCardManager = new ViceCardManager(this);
    this.joyMarkerManager = new JoyMarkerManager(this);
    Interaction.create(this);
    PlayerManager.create(this);
    this.notificationManager = new NotificationManager(this);

    Board.create(this);
    Festivity.create(this);
    GatherEvidence.create(this);
    Market.create(this);
    if (this.playerOrder.includes(this.getPlayerId())) {
      Hand.create(this);
    }

    Object.values(this.states).forEach((state) => state.create(this));

    PlayerManager.getInstance()
      .getPlayers()
      .forEach((player) => {
        player.updateEncounterTokens(
          this.gamedatas.players[player.getPlayerId()],
        );
      });

    this.notificationManager.setupNotifications();
    MollyHouseHelpManager.create(this);

    //  this.tooltipManager.setupTooltips();
    debug('Ending game setup');
  }

  // Sets player order with current player at index 0 if player is in the game
  setupPlayerOrder(playerOrder: number[]) {
    const currentPlayerId = this.getPlayerId();
    const isInGame = playerOrder.includes(currentPlayerId);
    if (isInGame) {
      while (playerOrder[0] !== currentPlayerId) {
        const firstItem = playerOrder.shift()!;
        playerOrder.push(firstItem);
      }
    }
    this.playerOrder = playerOrder;
  }

  //  .####.##....##.########.########.########.....###.....######..########.####..#######..##....##
  //  ..##..###...##....##....##.......##.....##...##.##...##....##....##.....##..##.....##.###...##
  //  ..##..####..##....##....##.......##.....##..##...##..##..........##.....##..##.....##.####..##
  //  ..##..##.##.##....##....######...########..##.....##.##..........##.....##..##.....##.##.##.##
  //  ..##..##..####....##....##.......##...##...#########.##..........##.....##..##.....##.##..####
  //  ..##..##...###....##....##.......##....##..##.....##.##....##....##.....##..##.....##.##...###
  //  .####.##....##....##....########.##.....##.##.....##..######.....##....####..#######..##....##

  ///////////////////////////////////////////////////
  //// Game & client states

  // onEnteringState: this method is called each time we are entering into a new game state.
  //                  You can use this method to perform some user interface changes at this moment.
  public onEnteringState(stateName: string, args: any) {
    console.log('Entering state: ' + stateName, args);
    const activePlayerIds: number[] | undefined = args.args?.activePlayerIds;
    const playerIsActiveAndStateExists =
      this.bga.players.isCurrentPlayerActive() &&
      this.states[stateName as keyof typeof this.states];

    const currentPlayerId = this.getPlayerId();
    // UI changes for active player
    if (
      playerIsActiveAndStateExists &&
      (!activePlayerIds || activePlayerIds.includes(currentPlayerId))
    ) {
      this.states[stateName as keyof typeof this.states]
        .getInstance()
        .onEnteringState(args.args);
    } else if (this.states[stateName as keyof typeof this.states]) {
      this.states[stateName as keyof typeof this.states]
        .getInstance()
        .setDescription(
          (activePlayerIds || Number(args.active_player)) as any,
          args.args,
        );
    }

    // Undo last steps
    if (args.args && args.args.previousSteps) {
      args.args.previousSteps.forEach((stepId: number) => {
        let logEntry = $('logs').querySelector(
          `.log.notif_newUndoableStep[data-step="${stepId}"]`,
        ) as HTMLElement;
        if (logEntry) {
          this.onClick(logEntry, () => this.undoToStep({ stepId }));
        }

        logEntry = document.querySelector(
          `.chatwindowlogs_zone .log.notif_newUndoableStep[data-step="${stepId}"]`,
        ) as HTMLElement;
        if (logEntry) {
          this.onClick(logEntry, () => this.undoToStep({ stepId }));
        }
      });
    }
  }

  // onLeavingState: this method is called each time we are leaving a game state.
  //                 You can use this method to perform some user interface changes at this moment.
  //
  public onLeavingState(stateName: string) {
    if (this.states[stateName as keyof typeof this.states]) {
      this.states[stateName as keyof typeof this.states]
        .getInstance()
        .onLeavingState();
    }
    this.clearPossible();
  }

  // onUpdateActionButtons: in this method you can manage "action buttons" that are displayed in the
  //                        action status bar (ie: the HTML links in the status bar).
  //
  public onUpdateActionButtons(stateName: string, args: any) {
    // console.log('onUpdateActionButtons: ' + stateName);
  }

  // .##.....##.########.##.......########.....##.....##..#######..########..##....##
  // .##.....##.##.......##.......##.....##....###...###.##.....##.##.....##.##......
  // .##.....##.##.......##.......##.....##....####.####.##.....##.##.....##.##......
  // .#########.######...##.......########.....##.###.##.##.....##.##.....##.######..
  // .##.....##.##.......##.......##...........##.....##.##.....##.##.....##.##......
  // .##.....##.##.......##.......##...........##.....##.##.....##.##.....##.##......
  // .##.....##.########.########.##...........##.....##..#######..########..########

  //  public toggleHelpMode(b: boolean) {
  // 	 console.log('toggleHelpMode', this.bga.defaultTooltipPosition);
  // 	 if (b) this.activateHelpMode();
  // 	 else this.deactivateHelpMode();
  //  }

  //  activateHelpMode() {
  // 	 this._helpMode = true;
  // 	 dojo.addClass('ebd-body', 'help-mode');
  // 	 this._displayedTooltip = null;
  // 	 document.body.addEventListener(
  // 		 'click',
  // 		 this.closeCurrentTooltip.bind(this)
  // 	 );
  //  }

  //  deactivateHelpMode() {
  // 	 this.closeCurrentTooltip();
  // 	 this._helpMode = false;
  // 	 dojo.removeClass('ebd-body', 'help-mode');
  // 	 document.body.removeEventListener(
  // 		 'click',
  // 		 this.closeCurrentTooltip.bind(this)
  // 	 );
  //  }

  closeCurrentTooltip() {
    if (!this._helpMode) return;

    if (this._displayedTooltip == null) return;
    else {
      this._displayedTooltip.close();
      this._displayedTooltip = null;
    }
  }

  //  .##.....##.########.####.##.......####.########.##....##
  //  .##.....##....##.....##..##........##.....##.....##..##.
  //  .##.....##....##.....##..##........##.....##......####..
  //  .##.....##....##.....##..##........##.....##.......##...
  //  .##.....##....##.....##..##........##.....##.......##...
  //  .##.....##....##.....##..##........##.....##.......##...
  //  ..#######.....##....####.########.####....##.......##...

  public clearInterface() {
    Board.getInstance().clearInterface();
    PlayerManager.getInstance().clearInterface();
    Market.getInstance().clearInterface();
    Festivity.getInstance().clearInterface();
  }

  clearPossible() {
    this.bga.statusBar.removeActionButtons();
    dojo.empty('customActions');

    dojo.forEach(this._connections, dojo.disconnect);
    this._connections = [];
    this._selectableNodes.forEach((node) => {
      if ($(node)) {
        node.classList.remove(SELECTABLE);
        node.classList.remove(SELECTED);
      }
    });
    this._selectableNodes = [];

    //  // TODO: remove this and handle via _selectableNodes
    dojo.query(`.${SELECTABLE}`).removeClass(SELECTABLE);
    dojo.query(`.${SELECTED}`).removeClass(SELECTED);

    //  this.gameMap.clearSelectable();
  }

  public getPlayerId(): number {
    return this.bga.players.getCurrentPlayerId();
  }

  /**
   * Typescript wrapper for framework functions
   */
  // public framework(): Framework {
  //   return this as unknown as Framework;
  // }

  onCancel() {
    this.clearPossible();
    this.bga.states.restoreServerGameState();
  }

  // .########...#######..####.##.......########.########.
  // .##.....##.##.....##..##..##.......##.......##.....##
  // .##.....##.##.....##..##..##.......##.......##.....##
  // .########..##.....##..##..##.......######...########.
  // .##.....##.##.....##..##..##.......##.......##...##..
  // .##.....##.##.....##..##..##.......##.......##....##.
  // .########...#######..####.########.########.##.....##

  // .########..##..........###....########.########
  // .##.....##.##.........##.##......##....##......
  // .##.....##.##........##...##.....##....##......
  // .########..##.......##.....##....##....######..
  // .##........##.......#########....##....##......
  // .##........##.......##.....##....##....##......
  // .##........########.##.....##....##....########

  /*
   * Custom connect that keep track of all the connections
   *  and wrap clicks to make it work with help mode
   */
  connect(node: HTMLElement, action: string, callback: Function) {
    this._connections.push(dojo.connect($(node), action, callback));
  }

  onClick(node: HTMLElement, callback: Function, temporary = true) {
    let safeCallback = (evt: PointerEvent) => {
      evt.stopPropagation();
      // @ts-expect-error
      if (this.bga.actions.game.isInterfaceLocked()) {
        return false;
      }
      if (this._helpMode) {
        return false;
      }
      callback(evt);
    };

    if (temporary) {
      this.connect($(node), 'click', safeCallback);
      // dojo.removeClass(node, 'unselectable'); // replace with pr_selectable / pr_selected
      // @ts-ignore
      dojo.addClass(node, 'selectable');
      this._selectableNodes.push(node);
    } else {
      dojo.connect($(node), 'click', safeCallback);
    }
  }

  undoToStep({ stepId }: { stepId: string | number }) {
    // this.stopActionTimer();
    this.bga.actions.performAction('actUndoToStep', {
      stepId,
    });
  }

  public updateLayout() {
    const settings = Settings.getInstance();

    if (!Settings.getInstance()) {
      return;
    }

    $('play-area-container').setAttribute(
      'data-two-columns',
      settings.get(PREF_TWO_COLUMN_LAYOUT) + ``,
    );

    const ROOT = document.documentElement;
    let WIDTH = $('play-area-container').getBoundingClientRect()['width'] - 8;
    const LEFT_COLUMN = 1500;
    const RIGHT_COLUMN = 1000;

    if (settings.get(PREF_TWO_COLUMN_LAYOUT) === PREF_ENABLED) {
      WIDTH = WIDTH - 8; // grid gap + padding
      const size = Number(settings.get(PREF_COLUMN_SIZES));
      const proportions = [size, 100 - size];
      const LEFT_SIZE = (proportions[0] * WIDTH) / 100;
      const leftColumnScale = LEFT_SIZE / LEFT_COLUMN;
      ROOT.style.setProperty('--leftColumnScale', `${leftColumnScale}`);
      ROOT.style.setProperty('--mapSizeMultiplier', '1');
      const RIGHT_SIZE = (proportions[1] * WIDTH) / 100;
      const rightColumnScale = RIGHT_SIZE / RIGHT_COLUMN;
      ROOT.style.setProperty('--rightColumnScale', `${rightColumnScale}`);

      $('play-area-container').style.gridTemplateColumns =
        `${LEFT_SIZE}px ${RIGHT_SIZE}px`;
    } else {
      const LEFT_SIZE = WIDTH;
      const leftColumnScale = LEFT_SIZE / LEFT_COLUMN;
      ROOT.style.setProperty('--leftColumnScale', `${leftColumnScale}`);
      // ROOT.style.setProperty(
      //   '--mapSizeMultiplier',
      //   `${
      //     Number(settings.get(PREF_SINGLE_COLUMN_MAP_SIZE)) / 100
      //   }`
      // );
      const RIGHT_SIZE = WIDTH;
      const rightColumnScale = RIGHT_SIZE / RIGHT_COLUMN;
      ROOT.style.setProperty('--rightColumnScale', `${rightColumnScale}`);
    }
  }

  // .########.########.....###....##.....##.########.##......##..#######..########..##....##
  // .##.......##.....##...##.##...###...###.##.......##..##..##.##.....##.##.....##.##...##.
  // .##.......##.....##..##...##..####.####.##.......##..##..##.##.....##.##.....##.##..##..
  // .######...########..##.....##.##.###.##.######...##..##..##.##.....##.########..#####...
  // .##.......##...##...#########.##.....##.##.......##..##..##.##.....##.##...##...##..##..
  // .##.......##....##..##.....##.##.....##.##.......##..##..##.##.....##.##....##..##...##.
  // .##.......##.....##.##.....##.##.....##.########..###..###...#######..##.....##.##....##

  // ..#######..##.....##.########.########..########..####.########..########..######.
  // .##.....##.##.....##.##.......##.....##.##.....##..##..##.....##.##.......##....##
  // .##.....##.##.....##.##.......##.....##.##.....##..##..##.....##.##.......##......
  // .##.....##.##.....##.######...########..########...##..##.....##.######....######.
  // .##.....##..##...##..##.......##...##...##...##....##..##.....##.##.............##
  // .##.....##...##.##...##.......##....##..##....##...##..##.....##.##.......##....##
  // ..#######.....###....########.##.....##.##.....##.####.########..########..######.

  /**
   * Apparently onAdding<notif id>ToLog is called with every notification
   */
  onAddingNewUndoableStepToLog(notif: {
    logId: number;
    mobileLogId: number;
    msg: Notif<{
      preserve: string;
      processed: boolean;
      stepId: number | string;
    }>;
  }) {
    if (!$(`log_${notif.logId}`)) return;
    let stepId = notif.msg.args.stepId;
    $(`log_${notif.logId}`).dataset.step = stepId as string;
    if ($(`dockedlog_${notif.mobileLogId}`))
      $(`dockedlog_${notif.mobileLogId}`).dataset.step = stepId as string;

    if (
      (
        this.gamedatas.gamestate as ActiveGamestate<{
          previousSteps?: number[];
        }>
      ).args.previousSteps?.includes(Number(stepId))
    ) {
      this.onClick($(`log_${notif.logId}`), () => this.undoToStep({ stepId }));
      if ($(`dockedlog_${notif.mobileLogId}`))
        this.onClick($(`dockedlog_${notif.mobileLogId}`), () =>
          this.undoToStep({ stepId }),
        );
    }
  }

  /*
   * Remove non standard zoom property
   */
  onScreenWidthChange() {
    this.updateLayout();
  }

  public bgaFormatText(
    log: string,
    args: Record<string, string | number | boolean | Record<string, unknown>>,
  ): { log: string; args: any } {
    try {
      if (log && args && !args.processed) {
        args.processed = true;

        // replace all keys that start with 'logToken'
        Object.entries(args).forEach(([key, value]) => {
          if (key.startsWith('tkn_')) {
            args[key] = getTokenDiv({
              key,
              value: value as string,
              game: this,
            });
          } else if (key.startsWith('_private')) {
            Object.entries(args[key] as Record<string, unknown>).forEach(
              ([privateKey, privateValue]) => {
                (args[key] as any)[privateKey] = getTokenDiv({
                  key: privateKey,
                  value: privateValue as string,
                  game: this,
                });
              },
            );
          }
        });
      }
    } catch (e) {
      console.error(log, args, 'Exception thrown', (e as Error).stack);
    }
    return { log, args };
  }

  /*
   * cancelLogs:
   *   strikes all log messages related to the given array of notif ids
   */
  checkLogCancel(notifId: string) {
    if (
      this.gamedatas.canceledNotifIds != null &&
      this.gamedatas.canceledNotifIds.includes(notifId)
    ) {
      //  this.cancelLogs([notifId]);
    }
  }

  public cancelLogs(notifIds: string[]) {
    notifIds.forEach((uid) => {
      if (this._notif_uid_to_log_id.hasOwnProperty(uid)) {
        let logId = this._notif_uid_to_log_id[uid];
        if ($('log_' + logId)) dojo.addClass('log_' + logId, 'cancel');
      }
      if (this._notif_uid_to_mobile_log_id.hasOwnProperty(uid)) {
        let mobileLogId = this._notif_uid_to_mobile_log_id[uid];
        if ($('dockedlog_' + mobileLogId))
          dojo.addClass('dockedlog_' + mobileLogId, 'cancel');
      }
    });
  }

  addLogClass() {
    if (this._last_notif == null) {
      return;
    }

    let notif = this._last_notif as any;
    let type = notif.msg.type;
    if (type == 'history_history') {
      type = notif.msg.args.originalType;
    }

    if ($('log_' + notif.logId)) {
      dojo.addClass('log_' + notif.logId, 'notif_' + type);

      var methodName =
        'onAdding' + type.charAt(0).toUpperCase() + type.slice(1) + 'ToLog';
      (this as any)[methodName]?.(notif);
    }
    if ($('dockedlog_' + notif.mobileLogId)) {
      dojo.addClass('dockedlog_' + notif.mobileLogId, 'notif_' + type);
    }

    //  while (this.tooltipsToMap.length) {
    // 	 const tooltipToMap = this.tooltipsToMap.pop();
    // 	 if (!tooltipToMap || !tooltipToMap[1]) {
    // 		 console.error('error tooltipToMap', tooltipToMap);
    // 	 } else {
    // 		 this.addLogTooltip({
    // 			 tooltipId: tooltipToMap[0],
    // 			 cardId: tooltipToMap[1],
    // 		 });
    // 	 }
    //  }
  }

  addLogTooltip({ tooltipId, cardId }: { tooltipId: number; cardId: string }) {
    //  this.tooltipManager.addCardTooltip({
    // 	 nodeId: `gest_tooltip_${tooltipId}`,
    // 	 cardId,
    //  });
  }

  updateLogTooltips() {
    // console.log("tooltipsToMap", this.tooltipsToMap);
    // TODO: check how to update this. For now needs refresh
  }
}
