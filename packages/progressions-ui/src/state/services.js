import startUserInput from "./audio/input"

export default class Services {
  constructor() {
    this.stopFunctions = {}
  }

  start(store) {
    // Start audio
    this.stopFunctions["audioInput"] = startUserInput(store)
  }

  stop() {
    this.stopFunctions.map(func => func())
  }
}
