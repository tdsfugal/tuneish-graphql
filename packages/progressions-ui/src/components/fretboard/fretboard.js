import React from "react"

const String = ({ yPos, thick, width }) => {
  return (
    <rect
      x="0"
      y={yPos.toString()}
      width={width}
      height={thick.toString()}
      fill="#AAA"
    />
  )
}

const Fret = ({ xPos, thick, height }) => {
  return (
    <rect
      x={xPos.toString()}
      y="0"
      width={thick.toString()}
      height={height}
      fill="#933"
    />
  )
}

export default ({ tuning }) => {
  const width = 1000
  const height = 20 + 30 * (tuning.length - 1)
  const color = "#420"

  // Compute the strings
  const strings = tuning.map((note, ind) => {
    const thick = 4 // Base on the note.  TODO
    const yPos = 10 + 30 * ind - thick / 2
    const key = `s_${note}`
    return <String key={key} yPos={yPos} thick={thick} width={width} />
  })

  // Compute the strings
  const frets = []
  for (let fret = 0; fret < 21; fret++) {
    const thick = 1 // Base on the note.  TODO
    const xPos = 10 + 30 * fret // TODO
    const key = `f_${fret}`
    frets.push(<Fret key={key} xPos={xPos} thick={thick} height={height} />)
  }
  // Render the package deal
  return (
    <div width="100%">
      <svg viewBox="0 0 1000 200" xmlns="http://www.w3.org/2000/svg">
        <rect
          key="wood"
          x="0"
          y="0"
          width={width}
          height={height}
          fill={color}
        />
        {frets}
        {strings}
      </svg>
    </div>
  )
}
