import React from "react"

// import FrequencyDetector from "./frequency-detector"

export default class AudioListener extends React.Component {
  constructor(props) {
    super(props)

    if (typeof window == undefined) {
      // if not in a browser then no "window" for the Tone package to use.
      console.log("Not in browser, listening disabled")
      // this._frequencyDetector = null
      this.state = {
        status: "inactive",
      }
      return
    }

    this.fastUpdate = () => {
      console.log("fast update")
    }

    this.stableUpdate = () => {
      console.log("stable update")
    }

    console.log("In Browser, listening enabled.")
    // this._frequencyDetector = new FrequencyDetector(
    //   this.fastUpdate,
    //   this.stableUpdate
    // )
    this.state = {
      status: "stopped",
      freq: -1,
      note: null,
      cent: 0,
    }
  }

  componentDidMount() {
    if (this.state.status === "inactive") return
    this.start()
  }

  componentWillUnmount() {
    this.stop()
  }

  start() {
    // this._userMedia
    //   // Start the user media service. This asks the user if they are willing to be monitored.
    //   .open(this.fastUpdate, this.stableUpdate)
    //   // If here, then the user has accepted.  Start the services.
    //   .then(userMedia => {
    //     // Start the worker with callbacks
    //     this._frequencyDetector = new TunerWorker(
    //       userMedia,
    //       this.fastUpdate,
    //       this.stableUpdate
    //     )
    //     // Start the component views
    //     this.setState({ status: this._userMediaManager.state() })
    //
    //     // console.log(`Volume = ${um.volume.value}`)
    //     // console.log(`Units = ${um.volume.units}`)
    //     // console.log(`DeviceId = ${um.deviceId}`)
    //     // console.log(`GroupId = ${um.deviceId}`)
    //     // console.log(`Label = ${um.label}`)
    //     // console.log(`State = ${um.state}`)
    //     // console.log(`ChannelCountMode = ${um.channelCountMode}`)
    //     // console.log(`ChannelInterpretation = ${um.channelInterpretation}`)
    //     // console.log(`ChannelCount = ${um.channelCount}`)
    //     // console.log(`NumberOfInputs = ${um.numberOfInputs}`)
    //     // console.log(`NumberOfOutputs = ${um.numberOfOutputs}`)
    //     // console.log(`Mute = ${um.mute}`)
    //
    //     console.log("Tuner is started")
    //   })
    //   .catch(x => {
    //     // If here, then the user declined. Make sure everuthing is stopped and carry on as usual.
    //     this.stop()
    //     console.log(x)
    //   })
  }

  stop() {
    // if (this._userMedia) this._userMedia.close()
    // if (this._frequencyDetector) this._frequencyDetector.stop()
  }

  render() {
    // eventually this will be a control for the user to start and stop the tuner
    return <div class="tuner"></div>
  }
}
