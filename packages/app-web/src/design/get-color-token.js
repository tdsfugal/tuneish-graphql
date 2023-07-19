import { semantic } from "./tokens";

export default function getColorToken(colorTokenPath) {
  try {
    let path = colorTokenPath.reverse();
    let color = semantic.colors;
    while (path.length > 0) {
      const x = path.pop();
      if (color.hasOwnProperty(x)) {
        color = color[x];
      } else {
        const msg = `Color tok path segment error: ${colorTokenPath.join(".")}`;
        throw new Error(msg);
      }
    }
    if (typeof color == "string") {
      return color;
    } else {
      const msg = `Color token path is too long: ${colorTokenPath.join(".")}`;
      throw new Error(msg);
    }
  } catch (e) {
    // TODO add real logging
    console.log(e);
    return null;
  }
}
