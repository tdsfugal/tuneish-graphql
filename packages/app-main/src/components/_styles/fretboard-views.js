import React from "react"

const BOARD_FRAME = 15
const BOARD_COLOR = "#420"
const STRING_THICKNESS = 4
const FRET_THICKNESS = 3
const DOT_RADIUS = 3

export const FretboardView = ({ boardLength, boardWidth, children }) => {
  const height = boardWidth + 2 * BOARD_FRAME
  const width = boardLength + 2 * BOARD_FRAME
  const viewDims = `-${BOARD_FRAME} -${BOARD_FRAME} ${width} ${height}`
  return (
    <div
      css={{
        flex: "1 1 auto",
        width: `${width}px`,
        height: `${height}px`,
        margin: "20px",
      }}
    >
      <svg viewBox={viewDims} xmlns="http://www.w3.org/2000/svg">
        {children}
      </svg>
    </div>
  )
}

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

const RAY_HEIGHT_FRACTION = 70 / 50 / 60
const RAY_WIDTH_FRACTION = 60 / 50 / 50 / 50

export const FretboardTunerView = ({ stringPosition, fretPosition, cents }) => {
  // compute the tuner rays.  They fade with age.
  const rays = cents.map((cent, index) => {
    const wide = RAY_WIDTH_FRACTION * cent * cent * cent
    const high = 16 + RAY_HEIGHT_FRACTION * cent * cent
    return (
      <line
        key={wide + index}
        x1={fretPosition - wide}
        y1={stringPosition + high}
        x2={fretPosition + wide}
        y2={stringPosition - high}
        stroke="yellow"
      />
    )
  })

  return (
    <>
      {rays}
      <circle
        r={16}
        cx={fretPosition}
        cy={stringPosition}
        stroke="orange"
        strokeWidth="2"
        fill="transparent"
      />
    </>
  )
}
