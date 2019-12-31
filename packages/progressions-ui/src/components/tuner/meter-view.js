import React from "react"

const NORM = 70

export default class MeterView extends React.Component {
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
      const factor = (NORM + level) / NORM
      const width = 150 * (factor > 0 ? factor : 0)
      this.setState({ width, level })
    }, 100)
  }

  render() {
    const { width, level } = this.state
    const color = "green"
    return (
      <>
        <rect x="0" y="200" width={width} height="80" fill={color} />
        <text x="0" y="200">
          {level}
        </text>
      </>
    )
  }
}
