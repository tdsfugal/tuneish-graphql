import React from "react"
import gql from "graphql-tag"
import { useQuery, useMutation } from "@apollo/react-hooks"

const GET_CURRENT_KEY_TYPE = gql`
  query GetCurrentKey {
    current_key @client {
      type
    }
  }
`

const TOGGLE_CURRENT_KEY_TYPE = gql`
  mutation ToggleCurrentKeyType($type: MajMin) {
    toggleKeyType @client {
      type
    }
  }
`

export default () => {
  const { loading, error, data } = useQuery(GET_CURRENT_KEY_TYPE)
  const [toggleKeyType] = useMutation(TOGGLE_CURRENT_KEY_TYPE)

  const {
    current_key: { type },
  } = data

  const text = loading || error || !type || type === "Major" ? "M" : "m"

  const handleClick = e => {
    e.preventDefault()
    toggleKeyType()
  }

  return (
    <svg style={{ fontSize: "30px" }} onClick={handleClick}>
      <circle cx="0" cy="0" r="40" fill="rebeccapurple" />
      <text x="-13" y="10" stroke="#fff" fill="#eee">
        {text}
      </text>
    </svg>
  )
}
