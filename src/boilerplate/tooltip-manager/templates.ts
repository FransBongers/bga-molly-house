/**
 * Boilerplate

 */

const tplTextTooltip = ({ text, title }: { text: string; title?: string }) => {
  return `
  <div class="text-tooltip-container">
    ${title ? `<span class="title">${title}</span>` : ''}
    <span class="text">${text}</span>
  </div>
`;
};

const tplViceCardTooltip = (viceCard: ViceCard) => {
  return `
    <div class="vice-card-tooltip-container">
      <span class="title">${formatStringRecursive(
        _('${tkn_suit} ${value} (${type})'),
        {
          tkn_suit: viceCard.suit,
          value: viceCardValueText(viceCard.displayValue),
          type: viceCardTypeText(viceCard.type),
        },
      )}</span>
      ${
        viceCard.type === 'molly'
          ? `<span class="text">${formatStringRecursive(
              _(
                '${tkn_boldText_mollyBonus} score ${tkn_boldText_amount} joy whenever you add a ${tkn_suit} desire to your reputation.',
              ),
              {
                tkn_boldText_amount: viceCard.displayValue === 'Q' ? 3 : 2,
                tkn_boldText_mollyBonus: _('Molly bonus:'),
                tkn_suit: viceCard.suit,
              },
            )}</span>`
          : ''
      }
      ${
        viceCard.type === 'molly'
          ? `<span class="text">${formatStringRecursive(
              _('${tkn_boldText_ifDiscarded} place in gossip pile.'),
              {
                tkn_boldText_ifDiscarded: _('If discarded from market:'),
              },
            )}</span>`
          : ''
      }
      ${
        viceCard.type === 'threat' && viceCard.displayValue === 'C'
          ? `<span class="text">${formatStringRecursive(
              _(
                '${tkn_boldText_playedInFestivity} during Quiet Gatherings, treat constables as zero-value desires.',
              ),
              {
                tkn_boldText_playedInFestivity: _('When played in festivity:'),
              },
            )}</span>`
          : ''
      }
            ${
              viceCard.type === 'threat' && viceCard.displayValue === 'R'
                ? `<span class="text">${formatStringRecursive(
                    _(
                      '${tkn_boldText_playedInFestivity} set value to any number from zero to nine. This card will act as a desire of that value when determining the festivity rank.',
                    ),
                    {
                      tkn_boldText_playedInFestivity: _(
                        'When played in festivity:',
                      ),
                    },
                  )}</span>`
                : ''
            }
      ${
        viceCard.type === 'threat'
          ? `<span class="text">${formatStringRecursive(
              _(
                '${tkn_boldText_ifDiscarded} place in gossip pile and expose the most infamous player.',
              ),
              {
                tkn_boldText_ifDiscarded: _('If discarded from market:'),
              },
            )}</span>`
          : ''
      }
    </div>
  `;
};
