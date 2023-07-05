// Tier 1 tokens map the raw values values that the design system uses to abstract names.
// This allows minor adjustments to the raw values without affecting the basic approach.
// Foundation tokens are for internal use and should not be referenced in the app.
const foundation = {
  pallet: {
    white: "rgb(255,255,255)",
    black: "rgb(0,0,0)",
    dark: "rgb(18,18,18)",
    light: "rgb(237, 237, 237)",
    translucent_gray: "rgba(123, 123, 123, 0.8)",
    gray_1: "rgba(123, 123, 123,1.0",
    gray_1: "rgba(123, 123, 123,1.0",

    green_1: "darkseagreen",
    purple_1: "rebeccapurple",
    purple_2: "purple",
    purple_3: "#7241aa",
    orange_1: "orange",
  },
};

// Tier 2 tokens represent abstract concepts in the design system. Using these semantic values creates
// repeated themes in the visuals to provide harmonized user experiences.  Styles MAY reference these values,
// however it is preferable to use component tokens where possible to lock down the design.
export const semantic = {
  colors: {
    core: {
      primary: foundation.pallet.green_1,
      secondary: foundation.pallet.purple_1,
      tertiary: foundation.pallet.orange_1,
      secondary_light: foundation.pallet.purple_3,
      white: foundation.pallet.white,
      black: foundation.pallet.black,
      translucent: foundation.pallet.translucent_gray,
    },
    theory: {
      maj: foundation.pallet.purple_2,
      min: foundation.pallet.orange_1,
      dim: foundation.pallet.green_2,
      aug: foundation.pallet.dark,
      half_dim: foundation.pallet.dark,
      sus: foundation.pallet.dark,
      dom: foundation.pallet.dark,
    },
  },
  dimensions: {
    default: {
      button_height: "40px",
      button_width: "100px",
    },
    layout: {
      footer_height: "60px",
      header_height: "60px",
      nav_width: "200px",
      setup_width: "300px",
    },
    nav_links: {
      button_height: "40px",
      margin: "10px",
      padding: "5px",
    },
  },
};

// Tier 3 tokens apply the semantic tokens to specific use cases.
// These tokens will generally be referenced in styles as exceptions.
export const component = {};
