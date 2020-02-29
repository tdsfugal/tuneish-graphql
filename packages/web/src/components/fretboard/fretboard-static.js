import React from "react"
import gql from "graphql-tag"
import { useQuery } from "@apollo/react-hooks"

import { BoardView, FretView, StringView, DotView } from "../_styles"

const PUT_DOTS_AT = [
  { fret: 3 },
  { fret: 5 },
  { fret: 7 },
  { fret: 9 },
  { fret: 12, double: true },
  { fret: 15 },
  { fret: 17 },
  { fret: 19 },
  { fret: 21 },
  { fret: 24, double: true },
  { fret: 27 },
  { fret: 29 },
  { fret: 31 },
  { fret: 33 },
  { fret: 36, double: true },
]

const GET_FRETLESS = gql`
  {
    fretboard @client {
      fretless
    }
  }
`

const FretboardStatic = ({
  tuning,
  boardLength,
  boardWidth,
  stringPositions,
  fretPositions,
}) => {
  const { loading, error, data } = useQuery(GET_FRETLESS)

  if (loading) return "Loading..."
  if (error) return `Error! ${error.message}`

  const { fretless } = data.fretboard

  // Compute the board
  const board = <BoardView boardLength={boardLength} boardWidth={boardWidth} />

  // Compute the frets
  const frets = fretless
    ? []
    : fretPositions.map((xPos, fret) => {
        return (
          <FretView key={`f_${fret}`} xPos={xPos} boardWidth={boardWidth} />
        )
      })

  // Compute the strings
  const strings = stringPositions.map((yPos, string) => {
    return <StringView key={`s_${string}`} yPos={yPos} length={boardLength} />
  })

  // Compute the dots
  const dots = PUT_DOTS_AT.map(({ fret, double = false }) => {
    if (fret === 0 || fret >= fretPositions.length) return null
    const xPos = fretless
      ? fretPositions[fret]
      : (fretPositions[fret - 1] + fretPositions[fret]) / 2
    return (
      <DotView
        key={`d_${fret}`}
        xPos={xPos}
        boardWidth={boardWidth}
        double={double}
      />
    )
  })

  // Render the package deal
  return (
    <svg id="fretboard-static">
      {board}
      {frets}
      {strings}
      {dots}
    </svg>
  )
}

export default FretboardStatic