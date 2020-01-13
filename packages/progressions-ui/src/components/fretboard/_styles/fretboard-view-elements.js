import React from "react"

const STRING_THICKNESS = 4
const FRET_THICKNESS = 1
const BOARD_COLOR = "#420"

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
      x={xPos.toString()}
      y="0"
      width={FRET_THICKNESS.toString()}
      height={boardWidth}
      fill="#933"
    />
  )
}

export const NoteView = ({ noteName, stringPosition, fretPosition }) => {
  return (
    <>
      <circle r={10} cx={fretPosition} cy={stringPosition} fill={"green"} />
      <text
        x={(fretPosition - 5).toString()}
        y={(stringPosition + 5).toString()}
        fill={"white"}
        style={{ fontSize: 14 }}
      >
        {noteName}
      </text>
    </>
  )
}
