import React from "react"
import PropTypes from "prop-types"

import KeyArcView from "./key-arc-view"

// This higher order component handles the note metadata
const KeyArc = ({ pos, r_outer, r_inner, theory }) => {
  const note = theory.getNote(pos)

  return (
    <KeyArcView pos={pos} r_outer={r_outer} r_inner={r_inner} note={note} />
  )
}

KeyArc.propTypes = {
  pos: PropTypes.number.isRequired,
  r_outer: PropTypes.number.isRequired,
  r_inner: PropTypes.number.isRequired,
  theory: PropTypes.object.isRequired,
}

export default KeyArc
