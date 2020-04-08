import React from "react"
import gql from "graphql-tag"
import { useQuery } from "@apollo/react-hooks"

import {
  ChordConsoleView,
  ChordColumnView,
  ChordItemView,
  ChordItemPadView,
} from "../_styles"

import {
  ROM_I,
  ROM_III,
  ROM_IV,
  ROM_V,
  ROM_VI,
  ROM_VII,
  ROM_i,
  ROM_ii,
  ROM_iii,
  ROM_iv,
  ROM_v,
  ROM_vi,
  ROM_vii,
  IONIAN,
  DORIAN,
  PHRYGIAN,
  LYDIAN,
  MIXOLYDIAN,
  AEOLIAN,
  LOCRIAN,
  compatibleChords,
  DIMINISHED_SYMBOL,
} from "../../theory"

import ChordSelections from "./chord-selections"
import ChordConsoleClearButton from "./chord-clear"

const GET_CURRENT_KEY = gql`
  {
    current_key @client {
      type
      pitches
      chromaticNames
    }
  }
`

const MODE_SELECTOR = {
  Major: [IONIAN, DORIAN, PHRYGIAN, LYDIAN, MIXOLYDIAN, AEOLIAN, LOCRIAN],
  minor: [AEOLIAN, LOCRIAN, IONIAN, DORIAN, PHRYGIAN, LYDIAN, MIXOLYDIAN],
}

const DEGREE_SELECTOR = {
  Major: [
    ROM_I,
    ROM_ii,
    ROM_iii,
    ROM_IV,
    ROM_V,
    ROM_vi,
    ROM_vii + DIMINISHED_SYMBOL,
  ],
  minor: [
    ROM_i,
    ROM_ii + DIMINISHED_SYMBOL,
    ROM_III,
    ROM_iv,
    ROM_v,
    ROM_VI,
    ROM_VII,
  ],
}

const ChordConsole = () => {
  const { loading, error, data } = useQuery(GET_CURRENT_KEY)

  if (loading) return "Loading..."
  if (error) return `Error! ${error.message}`

  const { type, pitches, chromaticNames } = data.current_key

  const chords = pitches.map((pitch, index) => {
    const tonic = {
      pitch,
      root: chromaticNames[pitch],
    }
    const degree = DEGREE_SELECTOR[type][index]
    const mode = MODE_SELECTOR[type][index]

    const chords = compatibleChords({ mode })

    return (
      <ChordColumnView key={`chc-${index}`}>
        <ChordItemPadView key="chp-d" />
        <ChordItemView key="chi-d">{degree}</ChordItemView>
        <ChordItemPadView key="chp-m" />
        <ChordItemView key="chi-m">{mode}</ChordItemView>
        <ChordItemPadView key="chp-c" />
        <ChordSelections key="chi-c" tonic={tonic} chords={chords} />
        <ChordItemPadView key="chp-e" />
      </ChordColumnView>
    )
  })

  return (
    <div>
      <ChordConsoleView>{chords}</ChordConsoleView>
      <ChordConsoleClearButton />
    </div>
  )
}

export default ChordConsole
