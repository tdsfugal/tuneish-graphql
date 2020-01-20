import React from "react"
import { connect } from "react-redux"
import { UPDATE_FAST_NOTE, UPDATE_STABLE_NOTE } from "../../state/action-types"

import FrequencyDetector from "./frequency-detector"

class AudioListener extends React.Component {
  constructor(props) {
    super(props)

    if (typeof window == undefined) {
      // if not in a browser then no "window" for the Tone package to use.
      console.log("Not in browser, listening disabled")
      // this._frequencyDetector = null
      this.state = {
        status: "disabled",
      }
      return
    }
    console.log("In Browser, listening enabled.")

    // Set up the frequency detector to push updates to redux state
    const { updateFast, updateStable } = this.props
    this._frequencyDetector = new FrequencyDetector(updateFast, updateStable)

    // set the initial state to stopped. Wait to start the frequency detector.
    this.state = {
      status: "stopped",
    }
  }

  componentDidMount() {
    if (this.state.status === "disabled") return
    // Once the component is mounted Tone can add an audio component.  Ok to start
    this._frequencyDetector.start(status => this.setState({ status }))
  }

  componentWillUnmount() {
    this._frequencyDetector.stop(status => this.setState({ status }))
  }

  render() {
    // eventually this will be a control for the user to start and stop the tuner
    return <div className="audio-listener"></div>
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
