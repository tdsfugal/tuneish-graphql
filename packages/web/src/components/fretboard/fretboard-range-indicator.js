import React, { useState, useEffect, useRef } from "react"
import gql from "graphql-tag"
import { useQuery, useMutation } from "@apollo/react-hooks"

import { FretboardRangeView, FretboardRangeControlView } from "../_styles"

const EXTRA_WIDTH = 20

const GET_FRETBOARD = gql`
  {
    fretboard @client {
      left_handed
      range_focus {
        active
        low
        high
      }
    }
  }
`
const UPDATE_RANGE_FOCUS = gql`
  mutation UpdateRangeFocus($low: Int!, $high: Int) {
    updateRangeFocus(low: $low, high: $high) @client
  }
`

function computeFret(fretPositions, startFret, offset) {
  // This task is difficult because the fret positions are in svg units and the
  // offset is in pixels.  The pixels units vary with the width of the screen.
  let fret = startFret
  let delta = 0
  if (offset > 0) {
    while (offset > delta && fret < fretPositions.length) {
      delta = fretPositions[fret + 1] - fretPositions[startFret]
      fret += 1
    }
    return fret - 1
  } else if (offset < 0) {
    while (offset < delta && fret >= 0) {
      delta = fretPositions[fret - 1] - fretPositions[startFret]
      fret -= 1
    }
    return fret + 1
  } else {
    return startFret
  }
}

const FretboardRangeIndicator = ({ fretPositions }) => {
  const rangeIndicator = useRef(null)
  const [leftFocus, setLeftFocus] = useState(false)
  const [rightFocus, setRightFocus] = useState(false)
  const [drag, setDrag] = useState({})
  const [dragFret, setDragFret] = useState(null)
  const [updateRangeFocus] = useMutation(UPDATE_RANGE_FOCUS)
  const { loading, error, data } = useQuery(GET_FRETBOARD)

  const {
    left_handed,
    range_focus: { active, low, high },
  } =
    !error && !loading && data
      ? data.fretboard
      : { left_handed: false, range_focus: { active: false, low: 0, high: 0 } }

  const dragStart = side => {
    return event => {
      const screenCTM = rangeIndicator.current.getScreenCTM()
      setDrag({
        start: true,
        side,
        origin: event.pageX,
        startFret: side === "left" ? low : high,
        xScale: screenCTM.a > 0 ? 1 / screenCTM.a : 1,
      })
    }
  }

  useEffect(() => {
    const { start = false, origin, xScale, startFret, side } = drag

    const dragMove = event => {
      const offset = (event.pageX - origin) * xScale
      const newFret = computeFret(fretPositions, startFret, offset)
      if (newFret !== dragFret) {
        if (side === "left") {
          if (newFret < high)
            updateRangeFocus({ variables: { low: newFret, high } })
        } else {
          if (newFret > low)
            updateRangeFocus({ variables: { low, high: newFret } })
        }
        setDragFret(newFret)
      }
    }

    const dragStop = event => {
      document.removeEventListener("mousemove", dragMove)
      document.removeEventListener("mouseup", dragStop)
      setDrag({})
    }

    if (start) {
      const { side, origin, startFret, xScale } = drag
      document.addEventListener("mousemove", dragMove)
      document.addEventListener("mouseup", dragStop)
      setDrag({ start: false, side, origin, startFret, xScale })
    }
  }, [
    drag,
    setDrag,
    fretPositions,
    dragFret,
    setDragFret,
    high,
    low,
    updateRangeFocus,
  ])

  const xMin = left_handed ? fretPositions[high] : fretPositions[low]
  const xMax = left_handed ? fretPositions[low] : fretPositions[high]

  // condition is true for a moment every now and then because fretPositions
  // calc is sometimes out of sync with query results. Quick patch is to abort.
  if (xMin > xMax) return null

  if (active) {
    const focusHandler = side => {
      const setFocus = side === "left" ? setLeftFocus : setRightFocus
      return focus => {
        return event => {
          event.preventDefault()
          setFocus(focus)
        }
      }
    }

    return (
      <svg id="fretboard-range-indicator" ref={rangeIndicator}>
        <FretboardRangeView
          key="middle"
          xMin={xMin - EXTRA_WIDTH}
          xMax={xMax + EXTRA_WIDTH}
        />
        <FretboardRangeControlView
          key="left"
          xMin={xMin - EXTRA_WIDTH}
          xMax={xMin}
          focus={leftFocus}
          focusHandler={focusHandler("left")}
          dragging={drag.active && drag.side === "left"}
          dragStart={dragStart("left")}
        />
        <FretboardRangeControlView
          key="right"
          xMin={xMax}
          xMax={xMax + EXTRA_WIDTH}
          focus={rightFocus}
          focusHandler={focusHandler("right")}
          dragging={drag.active && drag.side === "right"}
          dragStart={dragStart("right")}
        />
      </svg>
    )
  }
  return null
}

export default FretboardRangeIndicator
