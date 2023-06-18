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
        throw new Error("Path segment does not exist");
      }
    }
    if (typeof color == "string") {
      return color;
    } else {
      throw new Error("Path is too long");
    }
  } catch (e) {
    // TODO add real logging
    console.log(e);
    return null;
  }
}
