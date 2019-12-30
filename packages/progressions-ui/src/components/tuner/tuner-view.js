import React from "react"

const NORM = 10

export default class TunerView extends React.Component {
  constructor() {
    super()
    this.state = { width: 150 }
  }

  componentDidMount() {
    const { meter } = this.props
    console.log("meter:")
    console.log(meter)
    console.log(`NumberOfInputs = ${meter.numberOfInputs}`)
    setInterval(() => {
      const level = meter.getLevel()
      const factor = (level > -NORM ? NORM + level : NORM) / NORM
      console.log(`Level=${level}  Factor=${factor}`)
      this.setState({ width: 150 * factor })
    }, 500)
  }

  render() {
    const { width } = this.state
    const color = "gray"
    return (
      <svg
        viewBox="0 0 200 100"
        width="200px"
        height="100px"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="0" y="0" width={width} height="80" fill={color} />
      </svg>
    )
  }
}
