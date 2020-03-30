import React, { useState, useEffect } from "react"
import { useQuery, useMutation } from "@apollo/react-hooks"
import gql from "graphql-tag"
import { tap, skipRepeatsWith } from "@most/core"

import { FooterControl } from "../_styles"
import { NULL_NOTE } from "../../theory"
import { Tuner, audioDistributor } from "../../streams"

const GET_NAMES_IN_CURRENT_KEY = gql`
  query GetCurrentKey {
    current_key @client {
      chromaticNames
    }
  }
`

const UPDATE_STABLE_NOTE = gql`
  mutation UpdateStableNote($note: NamedNote) {
    updateStableNote(note: $note) @client
  }
`

const AudioListener = () => {
  const [active, updateActive] = useState(false)
  const [status, updateStatus] = useState("stopped")

  // the key is needed to determine which note name to use
  const { loading, error, data } = useQuery(GET_NAMES_IN_CURRENT_KEY)

  const [updateStableNote] = useMutation(UPDATE_STABLE_NOTE)

  const updateStable =
    loading || error
      ? () => null
      : ({ tone, oct, idealFreq }) => {
          const { chromaticNames } = data.current_key
          const note =
            tone >= 0
              ? { name: chromaticNames[tone], tone, oct, idealFreq }
              : NULL_NOTE
          updateStableNote({ variables: { note } })
        }

  // The audio component holds the tuner singleton becaause it can only
  // exist inside a mounted component.  That poses a bit of a problem when
  // it comes to distributing the tuner products via streams.  A stream is
  // set up in the streams folder for this specific purpose.  The connection
  // is made here.
  const [tuner] = useState(() => {
    if (typeof window == undefined) {
      console.log("Not in browser, listening disabled")
      updateStatus("dead")
      return null
    } else {
      // Inside a mounted browser component. OK place to create a UserMedia
      // object, so it is a valid place to construct a Tuner instance.
      return new Tuner(audioStream => {
        console.log("((((((((((( NEW TUNER )))))))))))")
      })
    }
  })

  // Run this effect every time active changes
  useEffect(() => {
    if (!tuner) return

    if (active) {
      if (status === "stopped") {
        updateStatus("starting")
        tuner.start(audioS => {
          // Hook the new audio source up to the distributor in /streams
          audioDistributor.setAudioSource(audioS)
          audioDistributor.connect(audioSource => {
            // AudioListener
            // Filter out the repeats
            const stableS = skipRepeatsWith(
              (e1, e2) => e1.tone === e2.tone && e1.oct === e2.oct,
              audioSource
            )
            // And publish the changes via the GraphQL cache. This stable note
            // is not critically real-time, and distributing it this way
            // reduces the number of streams that must be supported.  The idea
            // here is to keep the footprint of the monadic stream package small
            // and managable in case there is ever an issue with technology.
            return tap(updateStable, stableS)
          })
          // Signal state change
          updateStatus("running")
        })
      }
    } else {
      if (status === "running") {
        updateStatus("stopping")
        audioDistributor.stop()
        tuner.stop(() => updateStatus("stopped"))
      }
    }
  }, [active, status, tuner, updateStable])

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
