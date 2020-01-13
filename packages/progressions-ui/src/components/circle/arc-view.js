import React from "react"

const ATOR = Math.PI / 180

export default ({
  pos,
  r_outer,
  r_inner,
  text,
  fill,
  stroke,
  strokeWidth = 2,
}) => {
  // centerline of the arc
  const angle = pos * 30

  // start angle
  const rad0 = (angle - 15) * ATOR
  const s0 = Math.sin(rad0)
  const c0 = Math.cos(rad0)

  // end angle
  const rad1 = (angle + 15) * ATOR
  const s1 = Math.sin(rad1)
  const c1 = Math.cos(rad1)

  // Compute the central point
  const rad = angle * ATOR
  const r_mid = (r_outer + r_inner) / 2
  const xc = r_mid * Math.sin(rad)
  const yc = -r_mid * Math.cos(rad)

  // Compute the four corners
  const x1 = r_inner * s0
  const y1 = -r_inner * c0

  const x2 = r_inner * s1
  const y2 = -r_inner * c1

  const x3 = r_outer * s1
  const y3 = -r_outer * c1

  const x4 = r_outer * s0
  const y4 = -r_outer * c0

  // Generate the SVG instructions for the boundary segments
  const inner = `A${r_inner} ${r_inner} 0  0,1 ${x2}, ${y2} `
  const right = `L${x3}, ${y3} `
  const outer = `A${r_outer} ${r_outer} 0  0,0 ${x4}, ${y4} `
  const left = `L${x1}, ${y1} `

  // Compute the text offset and oother parameters to make it look right
  const thick = r_outer - r_inner
  const yOff = thick * 0.17
  return (
    <>
      <path
        d={`M ${x1} ${y1} ${inner} ${right} ${outer} ${left} z`}
        fill={fill}
        stroke={stroke}
        strokeWidth={strokeWidth}
      />
      <text x={xc} y={yc + yOff} textAnchor="middle">
        {text}
      </text>
    </>
  )
}
