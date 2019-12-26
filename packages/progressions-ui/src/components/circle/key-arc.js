import React from "react"
import PropTypes from "prop-types"

import { connect } from "react-redux"

import KeyArcView from "./key-arc-view"

import CIRCLE_LABELS from "../../theory/circle-labels"

// This higher order component handles the note metadata
const KeyArc = ({ pos, r_outer, r_inner, tone, current_key }) => {
  const labels = CIRCLE_LABELS[current_key.acc]
  const note_name = labels[pos]

  const degree = current_key.tones.indexOf(tone)
  let degree_name = ""
  let degree_type = null
  switch (current_key.type) {
    case "Major":
      switch (degree) {
        case 0:
          degree_name = "I"
          degree_type = "Maj"
          break
        case 1:
          degree_name = "ii"
          degree_type = "Min"
          break
        case 2:
          degree_name = "iii"
          degree_type = "Min"
          break
        case 3:
          degree_name = "IV"
          degree_type = "Maj"
          break
        case 4:
          degree_name = "V"
          degree_type = "Maj"
          break
        case 5:
          degree_name = "vi"
          degree_type = "Min"
          break
        case 6:
          degree_name = "vii"
          degree_type = "Dim"
          break
        default:
          break
      }
      break

    case "minor":
      switch (degree) {
        case 0:
          degree_name = "i"
          degree_type = "Min"
          break
        case 1:
          degree_name = "ii"
          degree_type = "Dim"
          break
        case 2:
          degree_name = "III"
          degree_type = "Maj"
          break
        case 3:
          degree_name = "iv"
          degree_type = "Min"
          break
        case 4:
          degree_name = "v"
          degree_type = "Min"
          break
        case 5:
          degree_name = "VI"
          degree_type = "Maj"
          break
        case 6:
          degree_name = "VII"
          degree_type = "Maj"
          break
        default:
          break
      }
      break

    default:
      console.log("Unknown key type")
  }

  return (
    <KeyArcView
      pos={pos}
      r_outer={r_outer}
      r_inner={r_inner}
      note_name={note_name}
      degree_name={degree_name}
      degree_type={degree_type}
    />
  )
}

KeyArc.propTypes = {
  pos: PropTypes.number.isRequired,
  r_outer: PropTypes.number.isRequired,
  r_inner: PropTypes.number.isRequired,
  tone: PropTypes.number.isRequired,
  current_key: PropTypes.object.isRequired,
}

export default KeyArc
