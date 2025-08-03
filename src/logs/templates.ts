/* ------- DEFAULT LOG TOKENS ------- */

const tlpLogTokenText = ({
  text,
  tooltipId,
  italic = false,
}: {
  text: string;
  tooltipId?: string;
  italic?: boolean;
}) =>
  `<span ${
    tooltipId ? `id="${tooltipId}" class="log_tooltip"` : ''
  } style="font-weight: 700;${italic ? ' font-style: italic;' : ''}">${_(
    text
  )}</span>`;

const tplLogTokenPlayerName = ({
  name,
  color,
}: {
  name: string;
  color: string;
}) => `<span class="playername" style="color:#${color};">${name}</span>`;

/* ------- GAME SPECIFIC LOG TOKENS ------- */

const tplLogTokenSuit = (suit: Suit) =>
  `<div class="log-token moho-suit" data-suit="${suit}"></div>`;

const tplLogTokenViceCard = (cardId: string) =>
  `<div class="log-token moho-vice-card" data-card-id="${cardId}"></div>`;