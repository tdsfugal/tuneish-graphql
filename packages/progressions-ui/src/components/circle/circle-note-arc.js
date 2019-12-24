import React from "react"

const ATOR = Math.PI / 180

export default ({ i, r_outer, r_inner, tone }) => {
  const angle = i * 30
  const start_ang = (angle - 15) * ATOR
  const end_ang = (angle + 15) * ATOR

  const s0 = Math.sin(start_ang)
  const c0 = Math.cos(start_ang)
  const s1 = Math.sin(end_ang)
  const c1 = Math.cos(end_ang)

  const x1 = r_inner * s0
  const y1 = r_inner * c0

  const x2 = r_inner * s1
  const y2 = r_inner * c1

  const x3 = r_outer * s1
  const y3 = r_outer * c1

  const x4 = r_outer * s0
  const y4 = r_outer * c0

  const xt = (x1 + x2 + x3 + x4) / 4 - 12
  const yt = (y1 + y2 + y3 + y4) / 4 + 7

  const inner = `A${r_inner} ${r_inner} 0  0,0 ${x2}, ${y2} `
  const right = `L${x3}, ${y3} `
  const outer = `A${r_outer} ${r_outer} 0  0,1 ${x4}, ${y4} `
  const left = `L${x1}, ${y1} `

  const fill = i % 2 ? "#66AAEE" : "#EEAA66"

  return (
    <>
      <path
        d={`M ${x1} ${y1} ${inner} ${right} ${outer} ${left} z`}
        fill={fill}
        stroke="gray"
        strokeWidth="1px"
      />
      <text x={xt} y={yt}>
        {tone}
      </text>
    </>
  )
}
