import React from "react"
import { connect } from "react-redux"

import { FooterControl } from "../_styles"
import { TOGGLE_RANGE_FOCUS } from "../../state/redux/action-types"

const RangeFocusControl = ({ range_focus, toggleRangeFocus }) => (
  <FooterControl
    key={"handInd"}
    active={range_focus}
    onClick={() => toggleRangeFocus(!range_focus)}
  >
    <p>Range Focus</p>
  </FooterControl>
)

const mapStateToProps = state => {
  return { range_focus: state.range_focus }
}

const mapDispatchToProps = dispatch => {
  return {
    // dispatching plain actions
    toggleRangeFocus: range_focus =>
      dispatch({ type: TOGGLE_RANGE_FOCUS, range_focus }),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RangeFocusControl)
