import React from "react"
import gql from "graphql-tag"
import { useQuery } from "@apollo/react-hooks"

const GET_FAST_NOTE = gql`
  {
    fast_note @client {
      freq
      note
      cent
    }
  }
`

const Tuner = () => {
  const { loading, error, data } = useQuery(GET_FAST_NOTE)
  if (loading) return "Loading..."
  if (error) return `Error! ${error.message}`

  const { freq, note, cent } = data.fast_note

  const width = Math.abs(cent * 2)
  const x = cent < 0 ? 120 - width : 120
  const color = "gray"
  const noteDisplay = note ? `${note.names[0]}${note.oct}` : ""
  return (
    <svg
      width="200px"
      height="100px"
      viewBox="0 0 200 100"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="20" y="0" width="200" height="80" fill="#ddd" />
      <rect x={x} y="0" width={width} height="80" fill={color} />
      <text x="50" y="50">
        {noteDisplay}
      </text>
      )
    </svg>
  )
}

export default Tuner
