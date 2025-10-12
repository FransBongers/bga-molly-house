const tplSettingsContainer = (
  isMobileVersion: boolean
) => `<div class="preference-container" ${
  isMobileVersion ? 'data-version="mobile"' : ''
}>
  <div id="preference-header" class="preference-header">
    <h2>${_('Preferences')}</h2>
    <div id="preference-tabs"></div>
  </div>
  <div id="preference-content">
  </div>
</div>`;

const tplSettingsTab = (id: string, name: string) => `
  <div id="preference-tab-${id}" class="preference-tab">
    <span>${_(name)}</span>
  </div>`;

const tplSettingsTabContent = (id: string) => `
    <div id="preference-content-${id}" class="preference-tab-content">
    </div>
  `;

const tplPlayerPrefenceSelectRow = ({
  setting,
  currentValue,
  visible = true,
}: {
  setting: PlayerPreferenceSelectConfig;
  currentValue: string;
  visible: boolean;
}) => {
  let values = setting.options
    .map(
      (option) =>
        `<option value='${option.value}' ${
          option.value === currentValue ? 'selected="selected"' : ''
        }>${_(option.label)}</option>`
    )
    .join('');

  return `
    <div id="setting_row_${setting.id}" class="preference_choice"${
    !visible ? ` style="display: none;"` : ''
  }>
         <div class="row-data row-data-large">
         <div class="label">${_(setting.label)}</div>
         <div class="row-value">
                 <select id="setting_${
                   setting.id
                 }" class="preference_control game_preference_control" style="display: block;">
        ${values}
        </select>
         </div>
     </div>
    </div>
  `;
};

const tplPlayerPrefenceSliderRow = ({
  label,
  id,
  visible = true,
}: {
  label: string;
  id: string;
  visible?: boolean;
}) => {
  return `
  <div id="setting_row_${id}" class="preference_choice"${
    !visible ? ` style="display: none;"` : ''
  }>
        <div class="row-data row-data-large">
        <div class="row-label">${_(label)}</div>
        <div class="row-value" style="padding-right: 10px;">
          <div id="setting_${id}" class=""></div>
        </div>
    </div>
  </div>
  `;
};
