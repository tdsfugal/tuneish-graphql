import React from "react"

import FRET_POSITIONS from "../../theory/fret-positions"

const STRING_SPACING = 30
const EDGE_MARGIN = 10

const String = ({ yPos, thick, length }) => {
  return (
    <rect
      x="0"
      y={(yPos - thick / 2).toString()}
      width={length}
      height={thick.toString()}
      fill="#AAA"
    />
  )
}

const Fret = ({ xPos, thick, boardWidth }) => {
  return (
    <rect
      x={xPos.toString()}
      y="0"
      width={thick.toString()}
      height={boardWidth}
      fill="#933"
    />
  )
}

const computeFretPosition = (fret, scaleLength) => {
  return scaleLength * FRET_POSITIONS[fret]
}

const computeStringPosition = string => {
  return EDGE_MARGIN + STRING_SPACING * string
}

export default ({ tuning, nFrets }) => {
  const length = 1000
  const boardWidth = 2 * EDGE_MARGIN + STRING_SPACING * (tuning.length - 1)
  const color = "#420"

  // Compute the frets
  const frets = []
  const scaleLength = length / FRET_POSITIONS[nFrets]
  for (let fret = 1; fret < nFrets + 1; fret++) {
    const thick = 1 // Base on the note.  TODO
    const xPos = computeFretPosition(fret, scaleLength)
    const key = `f_${fret}`
    frets.push(
      <Fret key={key} xPos={xPos} thick={thick} boardWidth={boardWidth} />
    )
  }

  // Compute the strings
  const strings = tuning.map((note, string) => {
    const thick = 4 // Base on the note.  TODO
    const yPos = computeStringPosition(string)
    const key = `s_${note}`
    return <String key={key} yPos={yPos} thick={thick} length={length} />
  })

  // Compute the notes

  // Render the package deal
  return (
    <div width="100%">
      <svg viewBox="0 0 1000 200" xmlns="http://www.w3.org/2000/svg">
        <rect
          key="wood"
          x="0"
          y="0"
          width={length}
          height={boardWidth}
          fill={color}
        />
        {frets}
        {strings}
      </svg>
    </div>
  )
}
