import pageMeta from "meta/pages";

const getPageMeta = (pagePath) => {
  try {
    // split the path.  Path should start with a leading /
    // Remove any blanks.  In particular, remove the leading blank from having
    // all paths start with a leading /.  The home path "/" will be an empty array.
    const parts = pagePath.split("/").filter((x) => x !== "");

    // step down the tree to get to the right node/leaf
    let m = pageMeta;
    while (parts.length > 0) {
      const next = parts.shift();
      if (m.children[next]) {
        m = m.children[next];
      } else {
        throw Error(`getPageMetadata: pagePath="${pagePath}" is invalid}`);
      }
    }

    // If metadata exists in this node return it, otherwise signal failure with an empty object.
    return m.data || {};
  } catch (e) {
    // console.log(e);
    return {};
  }
};

export default getPageMeta;
