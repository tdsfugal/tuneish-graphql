import React from "react"
import Tone from "tone"

const NORM = 70

export default class MeterView extends React.Component {
  constructor(props) {
    super(props)
    this.state = { level: -100 }
  }

  componentDidMount() {
    this.meter = new Tone.Meter()
    this.props.userMedia.connect(this.meter)
    console.log("meter:")
    console.log(this.meter)
    console.log(`NumberOfInputs = ${this.meter.numberOfInputs}`)
    setInterval(() => {
      this.setState({ level: this.meter.getLevel() })
    }, 100)
  }

  render() {
    const { level } = this.state
    const factor = (NORM + level) / NORM
    const width = 150 * (factor > 0 ? factor : 0)
    const color = "green"
    return <rect x="0" y="200" width={width} height="80" fill={color} />
  }
}
