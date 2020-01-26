import React from "react"

const BOARD_COLOR = "#420"
const STRING_THICKNESS = 4
const FRET_THICKNESS = 3
const DOT_RADIUS = 3

export const BoardView = ({ boardLength, boardWidth }) => {
  return (
    <rect
      key="board"
      x="0"
      y="0"
      width={boardLength}
      height={boardWidth}
      fill={BOARD_COLOR}
    />
  )
}

export const StringView = ({ yPos, length }) => {
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

export const FretView = ({ xPos, boardWidth }) => {
  return (
    <rect
      x={xPos - FRET_THICKNESS / 2}
      y="0"
      width={FRET_THICKNESS}
      height={boardWidth}
      fill="#933"
    />
  )
}

export const DotView = ({ xPos, boardWidth, double = false }) => {
  const cy = boardWidth + 10
  if (double) {
    const halfSpace = DOT_RADIUS * 1.5 // The first 1.0 is to get to the center
    return (
      <>
        <circle cx={xPos - halfSpace} cy={cy} r={DOT_RADIUS} fill="black" />
        <circle cx={xPos + halfSpace} cy={cy} r={DOT_RADIUS} fill="black" />
      </>
    )
  } else {
    return <circle cx={xPos} cy={cy} r={DOT_RADIUS} fill="black" />
  }
}

const SCALE_COLORS = {
  1: "red",
  2: "transparent",
  3: "transparent",
  4: "blue",
  5: "blue",
  6: "transparent",
  7: "transparent",
}

const CHORD_COLORS = {
  1: "white",
  2: "white",
  3: "white",
  4: "white",
  5: "white",
  6: "white",
  7: "white",
}

export const FretNoteView = ({
  noteName,
  scaleIndex,
  stringPosition,
  fretPosition,
}) => {
  const chordIndex = 1
  const scaleColor = SCALE_COLORS[scaleIndex]
  const chordColor = CHORD_COLORS[chordIndex]
  return (
    <>
      <circle
        r={13}
        cx={fretPosition}
        cy={stringPosition}
        stroke={scaleColor}
        strokeWidth="3"
        fill="transparent"
      />
      <circle
        r={12}
        cx={fretPosition}
        cy={stringPosition}
        stroke="transparent"
        fill={chordColor}
      />
      <text
        x={fretPosition}
        y={(stringPosition + 5).toString()}
        fill="black"
        fontFamily="sans-serif"
        fontWeight="bold"
        fontSize="12"
        textAnchor="middle"
        textLength="19"
      >
        {noteName}
      </text>
    </>
  )
}

export const HandView = ({ xMin, xMax }) => {
  return <rect x={xMin} y="-50" width={xMax - xMin} height={30} fill="blue" />
}

export const FretboardTunerView = ({
  noteName,
  stringPosition,
  fretPosition,
}) => {
  return (
    <>
      <circle
        r={12}
        cx={fretPosition}
        cy={stringPosition}
        stroke="transparent"
        fill="purple"
      />
      <text
        x={fretPosition}
        y={(stringPosition + 5).toString()}
        fill="black"
        fontFamily="sans-serif"
        fontWeight="bold"
        fontSize="12"
        textAnchor="middle"
        textLength="19"
      >
        {noteName}
      </text>
    </>
  )
}
