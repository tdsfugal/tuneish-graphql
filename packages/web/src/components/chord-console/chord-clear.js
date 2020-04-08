import React from "react"
import gql from "graphql-tag"
import { useMutation } from "@apollo/react-hooks"

import { ChordConsoleButtonView } from "../_styles"

const CLEAR_CHORD = gql`
  mutation ClearChord {
    clearChord @client
  }
`

const ChordConsoleClearButton = ({ tonic, chords }) => {
  const [clearChord] = useMutation(CLEAR_CHORD)

  const handleClick = e => {
    e.preventDefault()
    clearChord()
  }

  return (
    <ChordConsoleButtonView key={`c-clear`} onClick={handleClick}>
      ClearChord
    </ChordConsoleButtonView>
  )
}

export default ChordConsoleClearButton
