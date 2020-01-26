import React from "react"
import { connect } from "react-redux"

import { FretboardTunerView } from "./fretboard-view-elements"

const FretboardTunerIndicator = ({
  tuning,
  stringPositions,
  fretPositions,
  left,
  freq,
  note,
  cent,
  range_focus,
  low_fret,
  high_fret,
}) => {
  // Note - It isn't important to explicitly know if the tuner is on. Fast notes show up only
  //        when it is active.  A null indicator on the note value is sufficient.
  if (!note) return null

  const min_fret = range_focus ? low_fret : 0
  const max_fret = range_focus ? high_fret : fretPositions.length - 1
  return tuning.map(({ tone, octave }, string) => {
    const deltaTone = note.tone - tone
    const deltaOct = note.oct - octave
    const fret = deltaTone + 12 * deltaOct
    if (fret < min_fret || fret > max_fret) return null
    return (
      <FretboardTunerView
        key={`str-${string}`}
        noteName={note.name}
        stringPosition={stringPositions[string]}
        fretPosition={fretPositions[fret]}
      />
    )
  })
}

const mapStateToProps = ({
  range_focus,
  hand_range,
  fast_note,
  left_handed,
}) => {
  return {
    left: left_handed,
    freq: fast_note.freq,
    note: fast_note.note,
    cent: fast_note.cent,
    range_focus: range_focus,
    low_fret: hand_range.low_fret,
    high_fret: hand_range.high_fret,
  }
}

export default connect(mapStateToProps)(FretboardTunerIndicator)
