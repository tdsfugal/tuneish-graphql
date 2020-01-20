import React from "react"
import { connect } from "react-redux"

const FretboardNoteIndicator = ({ freq, note, cent }) => {
  return null
}

const mapStateToProps = state => {
  return state.fast_note || { freq: 1, note: null, cent: 0 }
}

export default connect(mapStateToProps)(FretboardNoteIndicator)
