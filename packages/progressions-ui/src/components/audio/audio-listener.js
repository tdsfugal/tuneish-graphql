import React from "react"

import FrequencyDetector from "./frequency-detector"

export default class AudioListener extends React.Component {
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
    this.fastUpdate = () => {
      console.log("fast update")
    }

    this.stableUpdate = () => {
      console.log("stable update")
    }

    this._frequencyDetector = new FrequencyDetector(
      this.fastUpdate,
      this.stableUpdate
    )

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
