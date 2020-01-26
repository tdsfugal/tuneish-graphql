import React from "react"
import { connect } from "react-redux"

import { FooterControl } from "../_styles"
import { TOGGLE_FRETLESS } from "../../state/action-types"

const FretlessControl = ({ fretless, toggleFretless }) => (
  <FooterControl active={fretless} onClick={() => toggleFretless(!fretless)}>
    <p>Fretless</p>
  </FooterControl>
)

const mapStateToProps = state => {
  return { fretless: state.fretless }
}

const mapDispatchToProps = dispatch => {
  return {
    // dispatching plain actions
    toggleFretless: fretless => dispatch({ type: TOGGLE_FRETLESS, fretless }),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FretlessControl)