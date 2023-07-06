export function getDimensionToken(path) {
  if (path[0] === "nav_links") {
    switch (path[1]) {
      case "button_height":
        return "30px";
      case "button_margin":
        return "10px";
      default:
        return "";
    }
  }
  return "Problem with the test fixture";
}
