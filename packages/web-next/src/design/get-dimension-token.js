import { semantic } from "./tokens";

export default function getDimensionToken(dimensionTokenPath) {
  try {
    let path = dimensionTokenPath.reverse();
    let dimension = semantic.dimensions;
    while (path.length > 0) {
      const x = path.pop();
      if (dimension.hasOwnProperty(x)) {
        dimension = dimension[x];
      } else {
        const msg = `Dimension path seg error: ${dimensionTokenPath.join(".")}`;
        throw new Error(msg);
      }
    }
    if (typeof dimension == "string") {
      return dimension;
    } else {
      const msg = `Dimension path is too long: ${dimensionTokenPath.join(".")}`;
      throw new Error(msg);
    }
  } catch (e) {
    // TODO add real logging
    console.log(e);
    return "Token Not Found";
  }
}
