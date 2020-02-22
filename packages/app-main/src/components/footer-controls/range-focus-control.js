import React from "react"
import gql from "graphql-tag"
import { useQuery, useMutation } from "@apollo/react-hooks"

import { FooterControl } from "../_styles"

const GET_RANGE_ACTIVE = gql`
  query {
    fretboard @client {
      range_focus {
        active
      }
    }
  }
`

const UPDATE_RANGE_ACTIVE = gql`
  mutation UpdateRangeActive($active: Boolean!) {
    updateRangeActive(active: $active) @client
  }
`

const RangeFocusControl = () => {
  const { loading, error, data } = useQuery(GET_RANGE_ACTIVE)
  const [updateActive] = useMutation(UPDATE_RANGE_ACTIVE)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>

  const { active } = data.fretboard.range_focus

  const toggleActive = () => updateActive({ variables: { active: !active } })

  return (
    <FooterControl key={"rf"} active={active} onClick={toggleActive}>
      <p>Focus</p>
    </FooterControl>
  )
}
export default RangeFocusControl
