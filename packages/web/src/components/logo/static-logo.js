import React from "react"

const RADIUS = 100
const OUTER_WHITE_RADIUS = RADIUS
const OUTER_BLACK_RADIUS = 0.7 * RADIUS
const INNER_RADIUS = 0.2 * RADIUS

const DEG_2_RAD = Math.PI / 180

// The array starts with the 3'oclock key, black Gs/Am, and increases counterclockwise
// The first number is the key index
// The next value is a boolean. True means white, false means black.
// The next two are the two inner angles. These are in 12 equal divisions
// The final two, if any, are the outer angles for white keys. There are 7 equal divisions.
const inner_angle_step = 360 / 12

let inner_angle = -inner_angle_step / 2 // Will be the back edge of the first key
let outer_angle = -inner_angle_step / 2 // will be the back edge of the first white key

// The fourth outer angle must line up with the seventh inner angle, so there are two
// outer steps.  They're close, but not equal.
const outer_angle_step_0 = (7 * inner_angle_step) / 4
const outer_angle_step_1 = (5 * inner_angle_step) / 3

const keyDefs = [
  [0, true],
  [1, false],
  [2, true],
  [3, false],
  [4, true],
  [5, false],
  [6, true],
  [7, true],
  [8, false],
  [9, true],
  [10, false],
  [11, true],
].map(def => {
  // the back inner angle
  def.push(inner_angle)
  // the front inner angle.  Every key, black or white, gets the same division.
  inner_angle += inner_angle_step
  def.push(inner_angle)
  // white keys get two more angles to make the outer part of the keyboard even.
  if (def[1]) {
    // the back outer angle
    def.push(outer_angle)
    // the front outer angle
    outer_angle += def[0] < 7 ? outer_angle_step_0 : outer_angle_step_1
    def.push(outer_angle)
  }
  return def
})

const StaticLogo = () => {
  const keys = keyDefs.map(def => {
    const white = def[1]

    // Compute the inner geometry which is the same for all the keys, white or black
    const rad0_i = DEG_2_RAD * def[2]
    const rad1_i = DEG_2_RAD * def[3]
    const s0_i = Math.sin(rad0_i)
    const c0_i = Math.cos(rad0_i)
    const s1_i = Math.sin(rad1_i)
    const c1_i = Math.cos(rad1_i)

    const ir = INNER_RADIUS
    const x0 = +ir * c0_i
    const y0 = -ir * s0_i
    const xn = +ir * c1_i
    const yn = -ir * s1_i

    // The rest is dependant on what type of key it is.
    let d = null
    if (white) {
      // compute the more complex white key geometry
      const rad0_o = DEG_2_RAD * def[4]
      const rad1_o = DEG_2_RAD * def[5]
      const s0_o = Math.sin(rad0_o)
      const c0_o = Math.cos(rad0_o)
      const s1_o = Math.sin(rad1_o)
      const c1_o = Math.cos(rad1_o)
      // // ...and path
      const or = OUTER_WHITE_RADIUS
      const mr = OUTER_BLACK_RADIUS

      const x1 = +mr * c0_i
      const y1 = -mr * s0_i

      const x2 = +mr * c0_o
      const y2 = -mr * s0_o

      const x3 = +or * c0_o
      const y3 = -or * s0_o

      const x4 = +or * c1_o
      const y4 = -or * s1_o

      const x5 = +mr * c1_o
      const y5 = -mr * s1_o

      const x6 = +mr * c1_i
      const y6 = -mr * s1_i

      d = `
        M ${x0} ${y0}
        L ${x1} ${y1}
        A ${mr} ${mr} ${(rad0_o + rad0_i) / 2} 0 1 ${x2} ${y2}
        L ${x3} ${y3}
        A ${or} ${or} ${(rad1_o + rad0_o) / 2} 0 0 ${x4} ${y4}
        L ${x5} ${y5}
        A ${mr} ${mr} ${(rad1_i - rad0_o) / 2} 0 1 ${x6} ${y6}
        L ${xn} ${yn}
        A ${ir} ${ir} ${(rad1_i + rad0_i) / 2} 0 1 ${x0} ${y0}
      `
    } else {
      // compute the simpler black key geometry
      const or = OUTER_BLACK_RADIUS

      const x1 = +or * c0_i
      const y1 = -or * s0_i
      const x2 = +or * c1_i
      const y2 = -or * s1_i

      d = `
        M ${x0} ${y0}
        L ${x1} ${y1}
        A ${or} ${or} ${(rad1_i + rad0_i) / 2} 0 0 ${x2} ${y2}
        L ${xn} ${yn}
        A ${ir} ${ir} ${(rad1_i + rad0_i) / 2} 0 1 ${x0} ${y0}
      `
    }

    // instantiate the element
    return (
      <path
        key={`l-${def[0]}`}
        d={d}
        fill={white ? "white" : "black"}
        stroke="black"
      />
    )
  })

  return (
    <div
      css={{
        width: `${3 * RADIUS}px`,
        height: `${3 * RADIUS}px`,
      }}
    >
      <svg
        width="100%"
        height="100%"
        viewBox={`-${RADIUS} -${RADIUS} ${2 * RADIUS} ${2 * RADIUS}`}
        xmlns="http://www.w3.org/2000/svg"
      >
        {keys}
        <circle key="ci" cx="0" cy="0" r={INNER_RADIUS} fill="rebeccapurple" />
      </svg>
    </div>
  )
}

export default StaticLogo
