import React from "react"
import gql from "graphql-tag"
import { useMutation } from "@apollo/react-hooks"

import { ChordItemView, ChordSelectionView } from "../_styles"

const CHANGE_CHORD = gql`
  mutation ChangeChord($tonic: Tonic!, $chord: Chord!) {
    changeChord(tonic: $tonic, chord: $chord) @client
  }
`

const ChordSelections = ({ tonic, chords }) => {
  const [changeChord] = useMutation(CHANGE_CHORD)

  const chordViews = chords.map(chord => {
    const { suffix } = chord

    const handleClick = () => {
      changeChord({ variables: { tonic, chord } })
    }

    return (
      <ChordSelectionView key={`c-${suffix}`} onClick={handleClick}>
        <span>{`${tonic.root}${suffix}`}</span>
      </ChordSelectionView>
    )
  })

  return <ChordItemView>{chordViews}</ChordItemView>
}

export default ChordSelections
