import React from "react"
import gql from "graphql-tag"
import { useQuery } from "@apollo/react-hooks"

const GET_CURRENT_KEY = gql`
  {
    current_key @client {
      name
      type
    }
  }
`

const Key = () => {
  const { loading, error, data } = useQuery(GET_CURRENT_KEY)

  if (loading) return "Loading..."
  if (error) return `Error! ${error.message}`

  const { name, type } = data.current_key

  return (
    <span>
      {name} {type}
    </span>
  )
}
export default Key
