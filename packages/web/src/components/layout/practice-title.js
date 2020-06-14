import React from "react"

import gql from "graphql-tag"
import { useQuery } from "@apollo/react-hooks"

import KeyTitle from "./key-title"
import ChordTitle from "./chord-title"

const GET_KEY_AND_CHORD = gql`
  {
    current_key @client {
      name
      type
    }
    current_chord @client {
      root
      suffix
    }
  }
`

const PracticeTitle = () => {
  const { loading, error, data } = useQuery(GET_KEY_AND_CHORD)

  if (loading && !data) return null
  if (error) return `Error! ${error.message}`

  const { name, type } = data.current_key
  const { root, suffix } = data.current_chord

  const chord = root ? (
    <ChordTitle key="ch" root={root} suffix={suffix} />
  ) : null

  const key = <KeyTitle key="key" name={name} type={type} />

  return chord !== null ? <span>Chord {chord}</span> : <span>Key {key}</span>
}

export default PracticeTitle
