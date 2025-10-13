/**
 * Boilerplate

 */

const tplTextTooltip = ({ text, title }: { text: string, title?: string }) => {
  return `
  <div class="text-tooltip-container">
    ${title ? `<span class="title">${title}</span>` : ''}
    <span class="text">${text}</span>
  </div>
`;

};
