import { getDimensionToken } from "src/design";

const HEIGHT = parseInt(
  getDimensionToken(["nav_links", "button_height"]).match(/^\d*/)[0]
);
const MARGIN = parseInt(
  getDimensionToken(["nav_links", "margin"]).match(/^\d*/)[0]
);

const getLinkPos = ({ yPos, nButtons, linksHeight }) => {
  // filter out the out-of-bounds requests
  if (yPos < 0 || yPos > linksHeight) return `yPos=${yPos} out of bounds`;

  let pos = 0;
  let y = MARGIN;
  while (pos < nButtons && y < linksHeight) {
    if (yPos < y) return { type: "gap", pos };
    y += HEIGHT;
    if (yPos <= y) return { type: "button", pos };
    pos += 1;
    y += MARGIN;
  }
  return { type: "gap", pos };
};

export default getLinkPos;
