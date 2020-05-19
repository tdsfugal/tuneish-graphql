import React from "react"
import gql from "graphql-tag"
import { useQuery, useMutation } from "@apollo/react-hooks"

import { FooterControl } from "../_styles"

const GET_FIVE_STRING = gql`
  query {
    fretboard @client {
      fiveString
    }
  }
`

const UPDATE_FIVE_STRING = gql`
  mutation UpdateFiveString($fiveString: Boolean!) {
    updateFiveString(fiveString: $fiveString) @client
  }
`

const FiveStringControl = () => {
  const { loading, error, data } = useQuery(GET_FIVE_STRING)
  const [updateFiveString] = useMutation(UPDATE_FIVE_STRING)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>

  const { fiveString } = data.fretboard

  const toggleFiveString = () =>
    updateFiveString({ variables: { fiveString: !fiveString } })

  return (
    <FooterControl key={"fv"} active={fiveString} onClick={toggleFiveString}>
      <p>FiveString</p>
    </FooterControl>
  )
}

export default FiveStringControl
