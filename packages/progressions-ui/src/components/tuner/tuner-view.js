import React from "react"

export default class TunerView extends React.Component {
  constructor() {
    super()
    this.state = { width: 150 }
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({ width: 120 })
    }, 1000)
  }

  render() {
    const { width } = this.state
    const color = "gray"
    return <rect x="0" y="0" width={width} height="80" fill={color} />
  }
}
