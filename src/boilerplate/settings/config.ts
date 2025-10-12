interface PreferenceOption {
  label: string;
  value: string;
}

interface PreferenceConfigBase {
  id: string;
  onChangeInSetup: boolean;
  label: string;
  visibleCondition?: {
    id: string;
    values: (string | number)[];
  };
}

interface PreferenceDefaultValues<T = string | number> {
  mobile: T;
  desktop: T;
  wideScreen: T;
}

interface PlayerPreferenceSelectConfig extends PreferenceConfigBase {
  defaultValue: PreferenceDefaultValues<string>;
  options: PreferenceOption[];
  type: 'select';
}

interface PlayerPreferenceSliderConfig extends PreferenceConfigBase {
  defaultValue: PreferenceDefaultValues<number>;
  sliderConfig: {
    step: number;
    padding: number;
    range: {
      min: number;
      max: number;
    };
  };
  type: 'slider';
}

type PlayerPreferenceConfig =
  | PlayerPreferenceSelectConfig
  | PlayerPreferenceSliderConfig;

interface PreferenceTab {
  id: SettingsTabId;
  name: string;
  config: Record<string, PlayerPreferenceConfig>;
}

const getSettingsConfig = (): Record<SettingsTabId, PreferenceTab> => ({
  baseSettings: {
    id: 'baseSettings',
    name: _('Base Settings'),
    config: {
      twoColumnLayout: {
        id: PREF_TWO_COLUMN_LAYOUT,
        onChangeInSetup: true,
        defaultValue: {
          mobile: 'disabled',
          desktop: 'enabled',
          wideScreen: 'enabled',
        },
        label: _('Two column layout'),
        type: 'select',
        options: [
          {
            label: _('Enabled'),
            value: 'enabled',
          },
          {
            label: _('Disabled (single column)'),
            value: 'disabled',
          },
        ],
      },
      columnSizes: {
        id: PREF_COLUMN_SIZES,
        onChangeInSetup: true,
        label: _('Column sizes'),
        defaultValue: {
          mobile: 50,
          desktop: 50,
          wideScreen: 50,
        },
        visibleCondition: {
          id: PREF_TWO_COLUMN_LAYOUT,
          values: [PREF_ENABLED],
        },
        sliderConfig: {
          step: 5,
          padding: 0,
          range: {
            min: 30,
            max: 70,
          },
        },
        type: 'slider',
      },
      // [PREF_SINGLE_COLUMN_MAP_SIZE]: {
      //   id: PREF_SINGLE_COLUMN_MAP_SIZE,
      //   onChangeInSetup: true,
      //   label: _('Map size'),
      //   defaultValue: 100,
      //   visibleCondition: {
      //     id: PREF_TWO_COLUMN_LAYOUT,
      //     values: [DISABLED],
      //   },
      //   sliderConfig: {
      //     step: 5,
      //     padding: 0,
      //     range: {
      //       min: 30,
      //       max: 100,
      //     },
      //   },
      //   type: 'slider',
      // },
      [PREF_CARD_SIZE_IN_LOG]: {
        id: PREF_CARD_SIZE_IN_LOG,
        onChangeInSetup: true,
        label: _('Size of cards in log'),
        defaultValue: {
          mobile: 0,
          desktop: 0,
          wideScreen: 0,
        },
        sliderConfig: {
          step: 5,
          padding: 0,
          range: {
            min: 0,
            max: 140,
          },
        },
        type: 'slider',
      },
      [PREF_SIZE_OF_HAND]: {
        id: PREF_SIZE_OF_HAND,
        onChangeInSetup: true,
        label: _('Size of hand'),
        defaultValue: {
          mobile: 100,
          desktop: 100,
          wideScreen: 100,
        },
        sliderConfig: {
          step: 5,
          padding: 0,
          range: {
            min: 40,
            max: 160,
          },
        },
        type: 'slider',
      },
      // [PREF_CARD_INFO_IN_TOOLTIP]: {
      //   id: PREF_CARD_INFO_IN_TOOLTIP,
      //   onChangeInSetup: false,
      //   defaultValue: PREF_ENABLED,
      //   label: _('Show card info in tooltip'),
      //   type: 'select',
      //   options: [
      //     {
      //       label: _('Enabled'),
      //       value: PREF_ENABLED,
      //     },
      //     {
      //       label: _('Disabled (card image only)'),
      //       value: PREF_DISABLED,
      //     },
      //   ],
      // },
    },
  },
  gameplay: {
    id: 'gameplay',
    name: _('Gameplay'),
    config: {
      [PREF_CONFIRM_END_OF_TURN_AND_PLAYER_SWITCH_ONLY]: {
        id: PREF_CONFIRM_END_OF_TURN_AND_PLAYER_SWITCH_ONLY,
        onChangeInSetup: false,
        defaultValue: {
          mobile: PREF_DISABLED,
          desktop: PREF_DISABLED,
          wideScreen: PREF_DISABLED,
        },
        label: _('Confirm end of turn and player switch only'),
        type: 'select',
        options: [
          {
            label: _('Enabled'),
            value: PREF_ENABLED,
          },
          {
            label: _('Disabled (confirm every move)'),
            value: PREF_DISABLED,
          },
        ],
      },
      [PREF_SHOW_ANIMATIONS]: {
        id: PREF_SHOW_ANIMATIONS,
        onChangeInSetup: false,
        defaultValue: {
          mobile: PREF_ENABLED,
          desktop: PREF_ENABLED,
          wideScreen: PREF_ENABLED,
        },
        label: _('Show animations'),
        type: 'select',
        options: [
          {
            label: _('Enabled'),
            value: PREF_ENABLED,
          },
          {
            label: _('Disabled'),
            value: PREF_DISABLED,
          },
        ],
      },
      [PREF_ANIMATION_SPEED]: {
        id: PREF_ANIMATION_SPEED,
        onChangeInSetup: false,
        label: _('Animation speed'),
        defaultValue: {
          mobile: 1600,
          desktop: 1600,
          wideScreen: 1600,
        },
        visibleCondition: {
          id: PREF_SHOW_ANIMATIONS,
          values: [PREF_ENABLED],
        },
        sliderConfig: {
          step: 100,
          padding: 0,
          range: {
            min: 100,
            max: 2000,
          },
        },
        type: 'slider',
      },
    },
  },
});
