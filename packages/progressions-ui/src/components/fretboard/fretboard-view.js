import React from "react"

import FrettedNote from "./fretted-note"

const STRING_THICKNESS = 4
const FRET_THICKNESS = 1
const BOARD_COLOR = "#420"

const String = ({ yPos, length }) => {
  return (
    <rect
      x="0"
      y={(yPos - STRING_THICKNESS / 2).toString()}
      width={length}
      height={STRING_THICKNESS.toString()}
      fill="#AAA"
    />
  )
}

const Fret = ({ xPos, boardWidth }) => {
  return (
    <rect
      x={xPos.toString()}
      y="0"
      width={FRET_THICKNESS.toString()}
      height={boardWidth}
      fill="#933"
    />
  )
}

export default ({
  tuning,
  boardLength,
  boardWidth,
  stringPositions,
  fretPositions,
}) => {
  // Compute the frets
  const frets = fretPositions.map((xPos, fret) => {
    return <Fret key={`f_${fret}`} xPos={xPos} boardWidth={boardWidth} />
  })

  // Compute the strings
  const strings = stringPositions.map((yPos, string) => {
    return <String key={`s_${string}`} yPos={yPos} length={boardLength} />
  })

  // Compute the notes
  const notes = [
    <FrettedNote key="foo" stringPosition={20} fretPosition={50} />,
  ]

  // Render the package deal
  return (
    <div width="100%">
      <svg viewBox="0 0 1000 200" xmlns="http://www.w3.org/2000/svg">
        <rect
          key="board"
          x="0"
          y="0"
          width={boardLength}
          height={boardWidth}
          fill={BOARD_COLOR}
        />
        {frets}
        {strings}
        {notes}
      </svg>
    </div>
  )
}
