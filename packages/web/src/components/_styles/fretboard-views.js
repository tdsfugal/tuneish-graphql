import React from "react"

const BOARD_COLOR = "#420"
const STRING_THICKNESS = 4
const FRET_THICKNESS = 3
const DOT_RADIUS = 3

const BOARD_FRAME = 50
const MIN_SIZE = 0.2
const MAX_SIZE = 1.6

export const FretboardView = ({ boardLength, boardWidth, children }) => {
  // compute the desired pixel area.  If this is the flex size then svg space
  // and pixel space match up.
  const height = boardWidth + 2 * BOARD_FRAME
  const width = boardLength + 2 * BOARD_FRAME
  // The SVG rectangle (0,0) to (width, height) is framed by a BORDER_FRAME
  // sized margin to account for overflow in the drawn components (e.g. note markers)
  return (
    <div
      css={{
        minWidth: `${width * MIN_SIZE}px`,
        minHeight: `${height * MIN_SIZE}px`,
        maxWidth: `${width * MAX_SIZE}px`,
        maxHeight: `${height * MAX_SIZE}px`,
        width: "100%",
        height: "100%",
      }}
    >
      <svg
        width="100%"
        height="100%"
        viewBox={`-${BOARD_FRAME} -${BOARD_FRAME} ${width} ${height}`}
        xmlns="http://www.w3.org/2000/svg"
      >
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
 
const RING_COLORS = {
  0: "transparent",
  1: "#FDEEF4",
  2: "#C11B17",
  3: "#3BB9FF",
  4: "#1589FF",
  5: "#C0C0C0",
  6: "#C11B1799",
  7: "#3BB9FF55",
  8: "#1589FF55",
  9: "#C0C0C055",
}

const FILL_COLORS = {
  0: "transparent",
  1: "#FFFFFF",
  2: "#990012",
  3: "#FFFFFFDD",
}

const TEXT_COLORS = {
  0: "transparent",
  1: "black",
  2: "#FDEEF4", 
}

const CHORD_TEXT_COLORS = {
  1: "white",
  2: "black",
  3: "black",
  4: "black",
  5: "black",
  6: "black",
  7: "black",
}

export const FretNoteView = ({
  noteName, 
  colors: { ringColorIndex, fillColorIndex, textColorIndex },
  stringPosition,
  fretPosition,
}) => (
  <>
    <circle
      r={13}
      cx={fretPosition}
      cy={stringPosition}
      stroke={RING_COLORS[ringColorIndex]}
      strokeWidth="3"
      fill="transparent"
    />
    <circle
      r={12}
      cx={fretPosition}
      cy={stringPosition}
      stroke="transparent"
      fill={FILL_COLORS[fillColorIndex]}
    />
    <text
      x={fretPosition}
      y={(stringPosition + 5).toString()}
      fill={TEXT_COLORS[textColorIndex]}
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
