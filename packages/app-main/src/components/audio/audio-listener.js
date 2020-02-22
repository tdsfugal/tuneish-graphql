import React, { useState, useEffect } from "react"

import { FooterControl } from "../_styles"

import FrequencyDetector from "./frequency-detector"

const AudioListener = () => {
  // Bind this component to the Apollo cache
  const updateStable = args => console.log("stable -- ", args)
  const updateFast = args => console.log("fast -- ", args)

  // The active state doesn't have to leave the component so useState is fine.
  const [active, updateActive] = useState(false)
  const [status, updateStatus] = useState("stopped")
  const [frequencyDetector] = useState(() => {
    console.log("((((((((((( NEW FREQUENCY DETECTOR )))))))))))")
    return new FrequencyDetector(updateFast, updateStable)
  })

  // Run this effect every time active changes
  useEffect(() => {
    // if not in a browser (e.g. SSR) then skip this effect.
    if (typeof window == undefined) {
      console.log("Not in browser, listening disabled")
      updateStatus("dead")
      return () => null
    }

    if (active) {
      if (status === "stopped") {
        updateStatus("starting")
        frequencyDetector.start(() => updateStatus("running"))
      }
    } else {
      if (status === "running") {
        updateStatus("stopping")
        frequencyDetector.stop(() => updateStatus("stopped"))
      }
    }
  }, [active, status, frequencyDetector])

  return (
    <FooterControl
      key={"al"}
      active={active}
      status={status}
      onClick={() => updateActive(!active)}
    >
      <div className="audio-listener"></div>
      <p>Tuner</p>
    </FooterControl>
  )
}

export default AudioListener
