import React from "react"

const String = ({ tunedTo, yPos, thick, nFrets, width }) => {
  return (
    <rect key={yPos} x="0" y={yPos} width={width} height={thick} fill="#AAA" />
  )
}

export default ({ tuning }) => {
  const width = 1000
  const height = 20 + 30 * (tuning.length - 1)
  const color = "#420"

  // Compute the strings
  const strings = tuning.map((note, ind) => {
    const yPos = (10 + 30 * ind - 2).toString()
    const thick = "4"
    return (
      <String
        tunedTo={note}
        nFrets={21}
        yPos={yPos}
        thick={thick}
        width={width}
      />
    )
  })
  return (
    <div width="100%">
      <svg viewBox="0 0 1000 200" xmlns="http://www.w3.org/2000/svg">
        <rect x="0" y="0" width={width} height={height} fill={color} />
        {strings}
      </svg>
    </div>
  )
}
