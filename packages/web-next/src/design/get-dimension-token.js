import { semantic } from "./tokens";

export default function getColorToken(dimensionTokenPath) {
  try {
    let path = dimensionTokenPath.reverse();
    let dimension = semantic.dimensions;
    while (path.length > 0) {
      const x = path.pop();
      if (dimension.hasOwnProperty(x)) {
        dimension = dimension[x];
      } else {
        throw new Error("Path segment does not exist");
      }
    }
    if (typeof dimension == "string") {
      return dimension;
    } else {
      throw new Error("Path is too long");
    }
  } catch (e) {
    // TODO add real logging
    console.log(e);
    return null;
  }
}
