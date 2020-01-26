import React from "react"
import { connect } from "react-redux"

import { FooterControl } from "../_styles"

import { UPDATE_FAST_NOTE, UPDATE_STABLE_NOTE } from "../../state/action-types"

import FrequencyDetector from "./frequency-detector"

class AudioListener extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      status: "disabled",
      active: false,
    }

    // if not in a browser then no "window" for the Tone package to use.
    if (typeof window == undefined) {
      console.log("Not in browser, listening disabled")
      return
    }

    // set the initial state to stopped. Wait to start the frequency detector.
    this.state.status = "stopped"

    this.toggleActive = async () => {
      if (this.state.active) {
        this._frequencyDetector.stop(() => this.setState({ active: false }))
      } else {
        this._frequencyDetector.start(() => this.setState({ active: true }))
      }
    }
  }

  componentDidMount() {
    if (this.state.status === "disabled") return
    // construct a frequency detector that pushes updates to the redux state
    const { updateFast, updateStable } = this.props
    this._frequencyDetector = new FrequencyDetector(updateFast, updateStable)
  }

  componentWillUnmount() {
    this._frequencyDetector.stop(status => this.setState({ status }))
  }

  render() {
    const { active } = this.state
    return (
      <FooterControl key={"audio"} active={active} onClick={this.toggleActive}>
        <div className="audio-listener"></div>
        <p>Tuner</p>
      </FooterControl>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    // dispatching plain actions
    updateFast: ({ freq, note, cent }) =>
      dispatch({ type: UPDATE_FAST_NOTE, freq, note, cent }),
    updateStable: ({ note }) => dispatch({ type: UPDATE_STABLE_NOTE, note }),
  }
}

export default connect(null, mapDispatchToProps)(AudioListener)
