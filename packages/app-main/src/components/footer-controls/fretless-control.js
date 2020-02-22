import React from "react"
import gql from "graphql-tag"
import { useQuery, useMutation } from "@apollo/react-hooks"

import { FooterControl } from "../_styles"

const GET_FRETLESS = gql`
  query {
    fretboard @client {
      fretless
    }
  }
`

const UPDATE_FRETLESS = gql`
  mutation UpdateFretless($fretless: Boolean!) {
    updateFretless(fretless: $fretless) @client
  }
`

const FretlessControl = () => {
  const { loading, error, data } = useQuery(GET_FRETLESS)
  const [updateFretless] = useMutation(UPDATE_FRETLESS)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>

  const { fretless } = data.fretboard

  const toggleFretless = () =>
    updateFretless({ variables: { fretless: !fretless } })

  return (
    <FooterControl key={"fl"} active={fretless} onClick={toggleFretless}>
      <p>Fretless</p>
    </FooterControl>
  )
}

export default FretlessControl
