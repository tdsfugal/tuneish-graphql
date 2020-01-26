import React from "react"
import { connect } from "react-redux"

import { FooterControl } from "../_styles"
import { UPDATE_FRETLESS } from "../../state/action-types"

const FretlessControl = ({ fretless, updateFretless }) => (
  <FooterControl active={fretless} onClick={() => updateFretless(!fretless)}>
    <p>Fretless</p>
  </FooterControl>
)

const mapStateToProps = state => {
  return { fretless: state.fretless }
}

const mapDispatchToProps = dispatch => {
  return {
    // dispatching plain actions
    updateFretless: fretless => dispatch({ type: UPDATE_FRETLESS, fretless }),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FretlessControl)
