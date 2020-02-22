import React from "react"
import gql from "graphql-tag"
import { useQuery, useMutation } from "@apollo/react-hooks"

import { FooterControl } from "../_styles"

const GET_LEFT_HANDED = gql`
  query {
    fretboard @client {
      left_handed
    }
  }
`

const UPDATE_LEFT_HANDED = gql`
  mutation UpdateLeftHanded($left_handed: Boolean!) {
    updateLeftHanded(left_handed: $left_handed) @client
  }
`

const LeftHandedControl = () => {
  const { loading, error, data } = useQuery(GET_LEFT_HANDED)
  const [updateLeftHanded] = useMutation(UPDATE_LEFT_HANDED)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>

  const { left_handed } = data.fretboard

  const toggleLeftHanded = () =>
    updateLeftHanded({ variables: { left_handed: !left_handed } })

  return (
    <FooterControl key={"lh"} active={left_handed} onClick={toggleLeftHanded}>
      <p>Lefty?</p>
    </FooterControl>
  )
}

export default LeftHandedControl
