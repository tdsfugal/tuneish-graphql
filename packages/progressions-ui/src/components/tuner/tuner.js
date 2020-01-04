import React from "react"
import Tone from "tone"

import TunerWorker from "./tuner-worker"

class Tuner extends React.Component {
  constructor(props) {
    super(props)

    this.tunerView = props.tunerView

    // Tone.UserMedia.enumerateDevices().then(d => console.log(d))
    this.userMedia = new Tone.UserMedia(0)
    this.state = { status: this.userMedia.state, freq: -1, note: null, cent: 0 }

    // Set up the callbacks bound to "this"
    this.updateTunerView = params => {
      this.setState(params)
    }
    this.updateAppState = note => {
      console.log("update app")
      console.log(note)
    }
  }

  componentDidMount() {
    this.userMedia
      .open()
      .then(um => {
        // console.log(`Volume = ${um.volume.value}`)
        // console.log(`Units = ${um.volume.units}`)
        // console.log(`DeviceId = ${um.deviceId}`)
        // console.log(`GroupId = ${um.deviceId}`)
        // console.log(`Label = ${um.label}`)
        // console.log(`State = ${um.state}`)
        // console.log(`ChannelCountMode = ${um.channelCountMode}`)
        // console.log(`ChannelInterpretation = ${um.channelInterpretation}`)
        // console.log(`ChannelCount = ${um.channelCount}`)
        // console.log(`NumberOfInputs = ${um.numberOfInputs}`)
        // console.log(`NumberOfOutputs = ${um.numberOfOutputs}`)
        // console.log(`Mute = ${um.mute}`)

        // Set up the worker
        this.worker = new TunerWorker(
          um,
          this.updateTunerView,
          this.updateAppState
        )
        return um
      })
      .then(um => {
        // Start the component views
        this.setState({ status: um.state })
      })
      .catch(x => console.log(x))
  }

  componentWillUnmount() {
    this.worker.close()
    this.userMedia.close()
  }

  render() {
    const { TunerView } = this.props
    const { status, freq, note, cent } = this.state
    if (status === "started" && freq > 0) {
      return (
        <svg
          viewBox="0 0 400 400"
          width="400px"
          height="400px"
          xmlns="http://www.w3.org/2000/svg"
        >
          <TunerView freq={freq} note={note} cent={cent} />
        </svg>
      )
    } else {
      return null
    }
  }
}

export default Tuner
