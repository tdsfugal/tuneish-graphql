import React from "react"
import { connect } from "react-redux"

import { FooterControl } from "../_styles"
import { TOGGLE_HAND_INDICATOR } from "../../state/action-types"

const HandIndicatorControl = ({ hand_indicator, toggleHandIndicator }) => (
  <FooterControl
    key={"handInd"}
    active={hand_indicator}
    onClick={() => toggleHandIndicator(!hand_indicator)}
  >
    <p>Hand</p>
  </FooterControl>
)

const mapStateToProps = state => {
  return { hand_indicator: state.hand_indicator }
}

const mapDispatchToProps = dispatch => {
  return {
    // dispatching plain actions
    toggleHandIndicator: hand_indicator =>
      dispatch({ type: TOGGLE_HAND_INDICATOR, hand_indicator }),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HandIndicatorControl)
