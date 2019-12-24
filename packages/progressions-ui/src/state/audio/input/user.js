import Tone from "tone"

export default store => {
  const input = new Tone.UserMedia()
  input.open().then(arr => {
    console.log("Media opened")
    console.log(arr)
  })

  return () => input.close()
}
