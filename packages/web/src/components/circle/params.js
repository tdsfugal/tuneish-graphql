import {
  ROM_I,
  ROM_III,
  ROM_IV,
  ROM_V,
  ROM_VI,
  ROM_VII,
  ROM_i,
  ROM_ii,
  ROM_iii,
  ROM_iv,
  ROM_v,
  ROM_vi,
  ROM_vii,
} from "../../theory"

export const TYPE_FILLS = {
  Maj: "purple",
  Min: "orange",
  Dim: "green",
}

export const DEGREE_STROKES = {
  [ROM_I]: "red",
  [ROM_i]: "red",

  [ROM_ii]: "white",

  [ROM_iii]: "white",
  [ROM_III]: "white",

  [ROM_IV]: "blue",
  [ROM_iv]: "blue",

  [ROM_V]: "blue",
  [ROM_v]: "blue",

  [ROM_vi]: "white",
  [ROM_VI]: "white",

  [ROM_vii]: "white",
  [ROM_VII]: "white",
}
