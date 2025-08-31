//  .########..#######...#######..##.......########.####.########.
//  ....##....##.....##.##.....##.##..........##.....##..##.....##
//  ....##....##.....##.##.....##.##..........##.....##..##.....##
//  ....##....##.....##.##.....##.##..........##.....##..########.
//  ....##....##.....##.##.....##.##..........##.....##..##.......
//  ....##....##.....##.##.....##.##..........##.....##..##.......
//  ....##.....#######...#######..########....##....####.##.......

//  .##.....##....###....##....##....###.....######...########.########.
//  .###...###...##.##...###...##...##.##...##....##..##.......##.....##
//  .####.####..##...##..####..##..##...##..##........##.......##.....##
//  .##.###.##.##.....##.##.##.##.##.....##.##...####.######...########.
//  .##.....##.#########.##..####.#########.##....##..##.......##...##..
//  .##.....##.##.....##.##...###.##.....##.##....##..##.......##....##.
//  .##.....##.##.....##.##....##.##.....##..######...########.##.....##

class TooltipManager {
  private static instance: TooltipManager;
  private game: GameAlias;
  // This can't be used since some versions of safari don't support it
  // private idRegex = /(?<=id=")[a-z]*_[0-9]*_[0-9]*(?=")/;
  // private idRegex = /id="[a-z]*_[0-9]*_[0-9]*"/;

  private _customTooltipIdCounter: number = 0;
  private _registeredCustomTooltips = {};

  constructor(game: GameAlias) {
    this.game = game;
  }

  public static create(game: GameAlias) {
    TooltipManager.instance = new TooltipManager(game);
  }

  public static getInstance() {
    return TooltipManager.instance;
  }

  public addTextToolTip({
    nodeId,
    text,
    custom = true,
  }: {
    nodeId: string;
    text: string;
    custom?: boolean;
  }) {
    if (custom) {
      this.addCustomTooltip(
        nodeId,
        tplTextTooltip({
          text,
        })
      );
    } else {
      this.game.framework().addTooltipHtml(
        nodeId,
        tplTextTooltip({
          text,
        }),
        400
      );
    }
  }

  public removeTooltip(nodeId: string) {
    this.game.framework().removeTooltip(nodeId);
  }

  public setupTooltips() {}

  public addCardTooltip({
    nodeId,
    cardId,
  }: {
    nodeId: string;
    cardId: string;
  }) {
    // const card = this.game.gamedatas.staticData.cards[cardId];
    // const html = tplGestCardTooltip({
    //   card,
    //   game: this.game,
    //   imageOnly:
    //     this.game.settings.get({ id: PREF_CARD_INFO_IN_TOOLTIP }) === DISABLED,
    // });
    // this.addCustomTooltip(nodeId, html);
  }

  // ..######..########.########.##.....##.########.
  // .##....##.##..........##....##.....##.##.....##
  // .##.......##..........##....##.....##.##.....##
  // ..######..######......##....##.....##.########.
  // .......##.##..........##....##.....##.##.......
  // .##....##.##..........##....##.....##.##.......
  // ..######..########....##.....#######..##.......

  public addBoardTooltips() {}

  // .##.....##.########.##.......########.....##.....##..#######..########..########
  // .##.....##.##.......##.......##.....##....###...###.##.....##.##.....##.##......
  // .##.....##.##.......##.......##.....##....####.####.##.....##.##.....##.##......
  // .#########.######...##.......########.....##.###.##.##.....##.##.....##.######..
  // .##.....##.##.......##.......##...........##.....##.##.....##.##.....##.##......
  // .##.....##.##.......##.......##...........##.....##.##.....##.##.....##.##......
  // .##.....##.########.########.##...........##.....##..#######..########..########

  /**
   * Tooltip to work with help mode
   */
  registerCustomTooltip(html, id = null) {
    id =
      id ||
      this.game.framework().game_name +
        '-tooltipable-' +
        this._customTooltipIdCounter++;
    this._registeredCustomTooltips[id] = html;
    return id;
  }
  public attachRegisteredTooltips() {
    Object.keys(this._registeredCustomTooltips).forEach((id) => {
      if ($(id)) {
        this.addCustomTooltip(id, this._registeredCustomTooltips[id], {
          forceRecreate: true,
        });
      }
    });
    this._registeredCustomTooltips = {};
  }
  public addCustomTooltip(
    id: string,
    html: string | Function,
    config: { delay?: number; midSize?: boolean; forceRecreate?: boolean } = {}
  ) {
    if (!document.getElementById(id)) {
      return;
    }
    config = Object.assign(
      {
        delay: 400,
        midSize: true,
        forceRecreate: false,
      },
      config
    ) as { delay: 400; midSize: boolean; forceRecreate: boolean };

    // Handle dynamic content out of the box
    let getContent = () => {
      let content = typeof html === 'function' ? html() : html;
      if (config.midSize) {
        content = '<div class="midSizeDialog">' + content + '</div>';
      }
      return content;
    };

    if (this.game.framework().tooltips[id] && !config.forceRecreate) {
      this.game.framework().tooltips[id].getContent = getContent;
      return;
    }

    let tooltip = new dijit.Tooltip({
      //        connectId: [id],
      getContent,
      position: this.game.framework().defaultTooltipPosition,
      showDelay: config.delay,
    });
    this.game.framework().tooltips[id] = tooltip;
    dojo.addClass(id, 'tooltipable');
    dojo.place(
      `<div class='help-marker'>
            <svg><use href="#help-marker-svg" /></svg>
          </div>`,
      id
    );

    dojo.connect($(id), 'click', (evt) => {
      if (!this.game._helpMode) {
        tooltip.close();
      } else {
        evt.stopPropagation();

        if (tooltip.state == 'SHOWING') {
          this.game.closeCurrentTooltip();
        } else {
          this.game.closeCurrentTooltip();
          tooltip.open($(id));
          this.game._displayedTooltip = tooltip;
        }
      }
    });

    tooltip.showTimeout = null;
    dojo.connect($(id), 'mouseenter', (evt) => {
      evt.stopPropagation();
      if (!this.game._helpMode && !this.game._dragndropMode) {
        if (tooltip.showTimeout != null) clearTimeout(tooltip.showTimeout);

        tooltip.showTimeout = setTimeout(() => {
          if ($(id)) tooltip.open($(id));
        }, config.delay);
      }
    });

    dojo.connect($(id), 'mouseleave', (evt) => {
      evt.stopPropagation();
      if (!this.game._helpMode && !this.game._dragndropMode) {
        tooltip.close();
        if (tooltip.showTimeout != null) clearTimeout(tooltip.showTimeout);
      }
    });
  }
}
