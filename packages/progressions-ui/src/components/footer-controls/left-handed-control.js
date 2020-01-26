import React from "react"
import { connect } from "react-redux"

import { FooterControl } from "../_styles"
import { TOGGLE_LEFT_HANDED } from "../../state/action-types"

const LeftHandedControl = ({ left_handed, toggleLeftHanded }) => (
  <FooterControl
    key={"left_handed"}
    active={left_handed}
    onClick={() => toggleLeftHanded(!left_handed)}
  >
    <p>Left Handed</p>
  </FooterControl>
)

const mapStateToProps = ({ left_handed }) => {
  return { left_handed }
}

const mapDispatchToProps = dispatch => {
  return {
    // dispatching plain actions
    toggleLeftHanded: left_handed =>
      dispatch({ type: TOGGLE_LEFT_HANDED, left_handed }),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LeftHandedControl)
