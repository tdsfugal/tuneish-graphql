import React from "react"
import gql from "graphql-tag"
import { useQuery } from "@apollo/react-hooks"

import { FretboardView } from "../_styles"

import FRET_POSITIONS from "../../theory/fret-positions"

import FretboardStatic from "./fretboard-static"
import FretboardNotes from "./fretboard-notes"
import FretboardRangeIndicator from "./fretboard-range-indicator"
import FretboardTunerIndicator from "./fretboard-tuner-indicator"

const STRING_SPACING = 30
const EDGE_MARGIN = 10

const GET_FRETBOARD = gql`
  {
    fretboard @client {
      left_handed
    }
  }
`

const Fretboard = ({ tuning, nFrets }) => {
  const { loading, error, data } = useQuery(GET_FRETBOARD)

  if (loading) return "Loading..."
  if (error) return `Error! ${error.message}`

  const { left_handed } = data.fretboard

  // compute the internal SVG dimensions.  Does not affect the css pixel area.
  const boardLength = 1000
  const boardWidth = 2 * EDGE_MARGIN + STRING_SPACING * (tuning.length - 1)

  // Compute the length of the string. The fret positions are fractions of
  // the total string length, and the board is as long as the distance from the
  // nut to the last fret.
  const scaleLength = boardLength / FRET_POSITIONS[nFrets]

  // Compute the fret distances from the nut (invariant to left or right)
  const fretDistances = [0]
  for (let fret = 1; fret < nFrets + 1; fret++) {
    fretDistances.push(scaleLength * FRET_POSITIONS[fret])
  }

  // Compute fret X positions from left edge of board display (nut on right
  // handed fretboards, last fret on left handed boards) Indexed by "fret."
  const fretPositions = fretDistances.map(dist =>
    left_handed ? boardLength - dist : dist
  )

  // Compute the string distances from top edge of board display. Invariant
  // to left/right as both have the high strings at the top of the display.
  const stringPositions = tuning.map((note, string) => {
    return EDGE_MARGIN + STRING_SPACING * string
  })

  // Render the package deal
  return (
    <FretboardView boardLength={boardLength} boardWidth={boardWidth}>
      <FretboardStatic
        tuning={tuning}
        boardLength={boardLength}
        boardWidth={boardWidth}
        stringPositions={stringPositions}
        fretPositions={fretPositions}
      />
      <FretboardNotes
        tuning={tuning}
        boardLength={boardLength}
        boardWidth={boardWidth}
        stringPositions={stringPositions}
        fretPositions={fretPositions}
      />
      <FretboardTunerIndicator
        tuning={tuning}
        stringPositions={stringPositions}
        fretPositions={fretPositions}
      />
      <FretboardRangeIndicator
        boardLength={boardLength}
        fretPositions={fretPositions}
      />
    </FretboardView>
  )
}

export default Fretboard
