class Settings {
  private static instance: Settings;
  protected game: GameAlias;

  public settings: Record<string, string | number> = {};

  private selectedTab: SettingsTabId = 'baseSettings';
  public preferenceValues: Record<string, string | number> = {};
  public sliderValues: Record<string, number[]> = {};

  constructor(game: GameAlias) {
    this.game = game;
    const gamedatas = game.gamedatas;

    this.setup(gamedatas);
  }

  public static create(game: GameAlias) {
    Settings.instance = new Settings(game);
  }

  public static getInstance() {
    return Settings.instance;
  }

  // ..######..########.########.##.....##.########.
  // .##....##.##..........##....##.....##.##.....##
  // .##.......##..........##....##.....##.##.....##
  // ..######..######......##....##.....##.########.
  // .......##.##..........##....##.....##.##.......
  // .##....##.##..........##....##.....##.##.......
  // ..######..########....##.....#######..##.......

  private setupSettingsContainer() {
    const header = document.querySelectorAll('#ingame_menu_content > h2')[0];
    if (header) {
      header.remove();
    }
    const firstPreferenceNode = document.querySelectorAll(
      '#ingame_menu_content > .preference_choice'
    )[0];
    firstPreferenceNode.insertAdjacentHTML(
      'beforebegin',
      tplSettingsContainer(this.isMobileVersion())
    );
  }

  private addTabs() {
    const config = getSettingsConfig();

    const tabsNode = document.getElementById('preference-tabs');
    const contentNode = document.getElementById('preference-content');

    Object.entries(config).forEach(([tabId, { name }]) => {
      tabsNode.insertAdjacentHTML('beforeend', tplSettingsTab(tabId, name));
      contentNode.insertAdjacentHTML('beforeend', tplSettingsTabContent(tabId));
      document
        .getElementById(`preference-tab-${tabId}`)
        .addEventListener('click', (event: MouseEvent) => {
          event.preventDefault();
          event.stopPropagation();
          this.changeTab(tabId as SettingsTabId);
        });

      document.getElementById(`preference-content-${tabId}`).style.display =
        'none';
    });
  }

  private moveExisitingPreferences() {
    const contentNode = document.getElementById(
      'preference-content-baseSettings'
    );

    document
      .querySelectorAll('#ingame_menu_content > .preference_choice')
      .forEach((node) => {
        contentNode.insertAdjacentElement('beforeend', node);
      });
  }

  private setupSelect(tabId: string, config: PlayerPreferenceSelectConfig) {
    const { id, visibleCondition } = config;

    const visible =
      !visibleCondition ||
      (visibleCondition &&
        visibleCondition.values.includes(
          this.preferenceValues[visibleCondition.id]
        ));

    const tabContentNode = document.getElementById(
      `preference-content-${tabId}`
    );

    tabContentNode.insertAdjacentHTML(
      'beforeend',
      tplPlayerPrefenceSelectRow({
        setting: config,
        currentValue: this.preferenceValues[config.id] as string,
        visible,
      })
    );
    1;
    const controlId = `setting_${id}`;
    $(controlId).addEventListener('change', () => {
      const value = $(controlId).value;
      this.onChangePreferenceValue(id, value);
    });
  }

  private setupSlider(tabId: string, config: PlayerPreferenceSliderConfig) {
    const { id, visibleCondition, label } = config;
    const visible =
      !visibleCondition ||
      (visibleCondition &&
        visibleCondition.values.includes(
          this.preferenceValues[visibleCondition.id]
        ));

    const tabContentNode = document.getElementById(
      `preference-content-${tabId}`
    );

    tabContentNode.insertAdjacentHTML(
      'beforeend',
      tplPlayerPrefenceSliderRow({
        id: id,
        label: label,
        visible,
      })
    );
    const sliderConfig = {
      ...config.sliderConfig,
      start: this.preferenceValues[id],
    };
    noUiSlider.create($('setting_' + id), sliderConfig);

    let currentValue = sliderConfig.range.min;
    const sliderValues = [];
    while (currentValue <= sliderConfig.range.max) {
      sliderValues.push(currentValue);
      currentValue += sliderConfig.step;
    }
    this.sliderValues[id] = sliderValues;

    this.updateSliderLabelValue(id, this.preferenceValues[id] as string);

    $('setting_' + id).noUiSlider.on('slide', (arg) => {
      this.onChangePreferenceValue(id, arg[0] as string);
      this.updateSliderLabelValue(id, arg[0] as string);
    });
  }

  private setupPreferences() {
    const config = getSettingsConfig();

    Object.values(config).forEach(({ id: tabId, config: tabConfig }) => {
      Object.values(tabConfig).forEach((preferenceConfig) => {
        const { id, type, defaultValue, onChangeInSetup } = preferenceConfig;

        const value = this.getValue(id, defaultValue);
        this.preferenceValues[id] = value;

        // Add content to modal
        if (type === 'select') {
          this.setupSelect(tabId, preferenceConfig);
        } else if (type === 'slider') {
          this.setupSlider(tabId, preferenceConfig);
        }

        // Call change method to update interface based on current value
        const methodName = this.getMethodName(id);
        if (onChangeInSetup && value && this[methodName]) {
          this[methodName](value);
        }
      });
    });
  }

  setup(gamedatas: GamedatasAlias) {
    this.setupSettingsContainer();
    this.addTabs();
    this.moveExisitingPreferences();
    this.setupPreferences();

    // Add event listener to prevent menu from closing when sliding a slider
    document
      .getElementById(`preference-content`)
      .addEventListener('click', (event: MouseEvent) => {
        event.preventDefault();
        event.stopPropagation();
      });

    this.changeTab(this.selectedTab);
  }

  //  .##.....##.########.####.##.......####.########.##....##
  //  .##.....##....##.....##..##........##.....##.....##..##.
  //  .##.....##....##.....##..##........##.....##......####..
  //  .##.....##....##.....##..##........##.....##.......##...
  //  .##.....##....##.....##..##........##.....##.......##...
  //  .##.....##....##.....##..##........##.....##.......##...
  //  ..#######.....##....####.########.####....##.......##...

  private changeTab(id: SettingsTabId) {
    const currentTab = document.getElementById(
      `preference-tab-${this.selectedTab}`
    );

    const currentTabContent = document.getElementById(
      `preference-content-${this.selectedTab}`
    );

    currentTab.removeAttribute('data-state');
    if (currentTabContent) {
      currentTabContent.style.display = 'none';
    }

    this.selectedTab = id;
    const tab = document.getElementById(`preference-tab-${id}`);
    const tabContent = document.getElementById(
      `preference-content-${this.selectedTab}`
    );
    tab.setAttribute('data-state', 'selected');
    if (tabContent) {
      tabContent.style.display = '';
    }
  }

  private checkAnmimationSpeedVisisble() {
    const sliderNode = document.getElementById('setting_row_animationSpeed');
    if (!sliderNode) {
      return;
    }
    if (this.settings[PREF_SHOW_ANIMATIONS] === PREF_ENABLED) {
      sliderNode.style.display = '';
    } else {
      sliderNode.style.display = 'none';
    }
  }

  private checkColumnSizesVisisble() {
    const sliderNode = document.getElementById('setting_row_columnSizes');
    const mapSizeSliderNode = document.getElementById(
      'setting_row_singleColumnMapSize'
    );

    if (!sliderNode) {
      return;
    }
    //     if (!(sliderNode && mapSizeSliderNode)) {
    //   return;
    // }

    if (this.preferenceValues['twoColumnsLayout'] === PREF_ENABLED) {
      sliderNode.style.display = '';
      mapSizeSliderNode.style.display = 'none';
    } else {
      sliderNode.style.display = 'none';
      mapSizeSliderNode.style.display = '';
    }
  }

  public get(id: string): string | number | null {
    return this.preferenceValues[id] || null;
  }

  private getLocalStorageKey(id: string) {
    return `${this.game.framework().game_name}-${this.getSuffix(id)}`;
  }

  private getMethodName(id: string) {
    return `onChange${this.getSuffix(id)}`;
  }

  private getSuffix(id: string) {
    return id.charAt(0).toUpperCase() + id.slice(1);
  }

  private getValue(
    id: string,
    defaultValues: PreferenceDefaultValues<number | string>
  ) {
    const localValue = localStorage.getItem(this.getLocalStorageKey(id));

    const defaultValue = this.isMobileVersion()
      ? defaultValues.mobile
      : defaultValues.desktop;

    return localValue || defaultValue;
  }

  private isMobileVersion() {
    const body = document.getElementById('ebd-body');
    const mobileVersion = body && body.classList.contains('mobile_version');
    return mobileVersion;
  }

  // ..#######..##....##.....######..##.....##....###....##....##..######...########
  // .##.....##.###...##....##....##.##.....##...##.##...###...##.##....##..##......
  // .##.....##.####..##....##.......##.....##..##...##..####..##.##........##......
  // .##.....##.##.##.##....##.......#########.##.....##.##.##.##.##...####.######..
  // .##.....##.##..####....##.......##.....##.#########.##..####.##....##..##......
  // .##.....##.##...###....##....##.##.....##.##.....##.##...###.##....##..##......
  // ..#######..##....##.....######..##.....##.##.....##.##....##..######...########

  private onChangePreferenceValue(id: string, value: string) {
    const suffix = this.getSuffix(id);
    this.preferenceValues[id] = value;
    localStorage.setItem(this.getLocalStorageKey(id), value);
    const methodName = this.getMethodName(id);

    if (this[methodName]) {
      this[methodName](value);
    }
  }

  private updateSliderLabelValue(id: string, value: string) {
    const numberValue = Number(value); 
    if (isNaN(numberValue)) {
      return;
    }
    const index = this.sliderValues[id].indexOf(numberValue);
    if (index === -1) {
      return;
    }
    const labelNode = document.getElementById(`slider-${id}-label-value`);
    if (labelNode) {
      labelNode.innerText = `(${index + 1}/${this.sliderValues[id].length})`;
    }
  }

  public onChangeTwoColumnLayout(value: string) {
    this.checkColumnSizesVisisble();
    const node = document.getElementById('play-area-container');
    if (node) {
      node.setAttribute('data-two-columns', value);
    }
    this.game.updateLayout();
  }

  public onChangeColumnSizes(value: string) {
    this.game.updateLayout();
  }

  public onChangeSingleColumnMapSize(value: string) {
    this.game.updateLayout();
  }

  public onChangeCardSizeInLog(value: number) {
    // console.log("onChangeCardSizeInLogSetting", value);
    const ROOT = document.documentElement;
    ROOT.style.setProperty('--logCardScale', `${Number(value) / 100}`);
  }

  public onChangeSizeOfHand(value: number) {
    const ROOT = document.documentElement;
    ROOT.style.setProperty('--handScale', `${Number(value) / 100}`);
  }

  public onChangeAnimationSpeed(value: number) {
    const duration = 2100 - value;
    debug('onChangeAnimationSpeedSetting', duration);
    this.game.animationManager.getSettings().duration = duration;
  }

  public onChangeShowAnimations(value: string) {
    if (value === PREF_ENABLED) {
      this.game.animationManager.getSettings().duration = Number(
        this.settings[PREF_ANIMATION_SPEED]
      );
    } else {
      this.game.animationManager.getSettings().duration = 0;
    }
    this.checkAnmimationSpeedVisisble();
  }

  public onChangeCardInfoInTooltip(value: string) {
    // this.game.cardArea.updateTooltips();
    this.game.updateLogTooltips();
  }
}
