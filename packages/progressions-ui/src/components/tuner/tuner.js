import React from "react"
import Tone from "tone"

import TunerView from "./tuner-view"
import MeterView from "./meter-view"

class Tuner extends React.Component {
  constructor(props) {
    super()
    console.log(`Supported = ${Tone.UserMedia.supported}`)
    Tone.UserMedia.enumerateDevices().then(d => console.log(d))
    this.userMedia = new Tone.UserMedia(0)
    this.state = { status: this.userMedia.state }
  }

  componentDidMount() {
    this.userMedia
      .open()
      .then(um => {
        console.log(`Volume = ${um.volume.value}`)
        console.log(`Units = ${um.volume.units}`)
        console.log(`DeviceId = ${um.deviceId}`)
        console.log(`GroupId = ${um.deviceId}`)
        console.log(`Label = ${um.label}`)
        console.log(`State = ${um.state}`)
        console.log(`ChannelCountMode = ${um.channelCountMode}`)
        console.log(`ChannelInterpretation = ${um.channelInterpretation}`)
        console.log(`ChannelCount = ${um.channelCount}`)
        console.log(`NumberOfInputs = ${um.numberOfInputs}`)
        console.log(`NumberOfOutputs = ${um.numberOfOutputs}`)
        console.log(`Mute = ${um.mute}`)

        const ctx = um.context

        console.log(ctx)

        this.setState({ status: um.state })
      })
      .catch(x => console.log(x))
  }

  componentWillUnmount() {
    this.userMedia.close()
  }

  render() {
    const { status } = this.state
    if (status === "started") {
      return (
        <svg
          viewBox="0 0 400 400"
          width="400px"
          height="400px"
          xmlns="http://www.w3.org/2000/svg"
        >
          <TunerView userMedia={this.userMedia} />
          <MeterView userMedia={this.userMedia} />
        </svg>
      )
    }
    return null
  }
}

export default Tuner
