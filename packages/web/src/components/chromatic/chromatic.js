import React from "react"
import gql from "graphql-tag"
import { useQuery } from "@apollo/react-hooks"

import { ChromaticView } from "../_styles"

import ChromaRowKey from "./chroma-row-key"
import ChromaRowPlaying from "./chroma-row-playing"

const GET_KEY = gql`
  {
    current_key @client {
      pitches
      chromaticNames
    }
  }
`

const Chromatic = () => {
  const { loading, error, data } = useQuery(GET_KEY)

  if (error) return `Error! ${error.message}`
  if (loading || !data) return "Loading..."

  const { chromaticNames, pitches } = data.current_key
  return (
    <ChromaticView>
      <ChromaRowKey pitches={pitches} chromaticNames={chromaticNames} />
      <ChromaRowPlaying chromaticNames={chromaticNames} />
    </ChromaticView>
  )
}

export default Chromatic
