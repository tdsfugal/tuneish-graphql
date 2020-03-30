import { now, continueWith, multicast, runEffects } from "@most/core"
import { newDefaultScheduler } from "@most/scheduler"
import { NULL_NOTE } from "../../theory"

export default class AudioDistributor {
  constructor() {
    this._audioSource = multicast(now(NULL_NOTE))
    this._scheduler = newDefaultScheduler()
    let active = false
    const delayedConnections = []

    this.setAudioSource = audioSource => {
      this._audioSource = continueWith(
        () => multicast(now(NULL_NOTE)),
        audioSource
      )
      active = true
      while (delayedConnections.length > 0) {
        const func = delayedConnections.pop()
        runEffects(func(this._audioSource), this._scheduler)
      }
    }

    this.connect = connectFunction => {
      if (active) {
        runEffects(connectFunction(this._audioSource), this._scheduler)
      } else {
        delayedConnections.push(connectFunction)
      }
    }

    this.stop = () => {
      this._audioSource = multicast(now(NULL_NOTE))
      active = false
    }
  }
}
