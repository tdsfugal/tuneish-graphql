import React from "react"

export default ({ freq, note, cent }) => {
  const width = Math.abs(cent * 2)
  const x = cent < 0 ? 120 - width : 120
  const color = "gray"
  return (
    <>
      <rect x="20" y="0" width="200" height="80" fill="#ddd" />
      <rect x={x} y="0" width={width} height="80" fill={color} />
      <text x="50" y="50">
        {note.names[0]}
      </text>
    </>
  )
}
