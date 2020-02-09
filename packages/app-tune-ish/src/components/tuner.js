import React from "react"
import { connect } from "react-redux"

const Tuner = ({ freq, note, cent }) => {
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

const mapStateToProps = state => {
  return state.fast_note || { freq: 1, note: null, cent: 0 }
}

export default connect(mapStateToProps)(Tuner)
