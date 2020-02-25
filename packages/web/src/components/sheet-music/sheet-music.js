import React from "react"
import gql from "graphql-tag"
import { useQuery } from "@apollo/react-hooks"

import { SheetMusicView } from "../_styles"

const GET_CURRENT_KEY = gql`
  {
    current_key @client {
      name
      type
    }
  }
`

const SheetMusic = () => {
  const { loading, error, data } = useQuery(GET_CURRENT_KEY)

  if (loading) return "Loading..."
  if (error) return `Error! ${error.message}`

  const { name, type } = data.current_key

  return (
    <SheetMusicView>
      <h1>SheetMusic</h1>
      <h3>
        {name} {type}
      </h3>
    </SheetMusicView>
  )
}

export default SheetMusic
