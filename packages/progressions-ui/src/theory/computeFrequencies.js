const computeFrequencies = () => {
  const A4 = 440 // Reference pitch, hz
  const semiTone = Math.pow(2, 1 / 12) // Even tempered

  const Cn4 = A4 * Math.pow(semiTone, -9)
  const Cs4 = A4 * Math.pow(semiTone, -8)
  const Dn4 = A4 * Math.pow(semiTone, -7)
  const Ds4 = A4 * Math.pow(semiTone, -6)
  const En4 = A4 * Math.pow(semiTone, -5)
  const Fn4 = A4 * Math.pow(semiTone, -4)
  const Fs4 = A4 * Math.pow(semiTone, -3)
  const Gn4 = A4 * Math.pow(semiTone, -2)
  const Gs4 = A4 * Math.pow(semiTone, -1)
  const An4 = A4
  const As4 = A4 * Math.pow(semiTone, +1)
  const Bn4 = A4 * Math.pow(semiTone, +2)

  const fours = [Cn4, Cs4, Dn4, Ds4, En4, Fn4, Fs4, Gn4, Gs4, An4, As4, Bn4]

  const frequencies = []
  let oct_mult = 1 / 32

  let oct, tone
  const upRatio = Math.pow(semiTone, 0.5)
  for (oct = -1; oct < 11; oct++) {
    for (tone = 0; tone < 12; tone++) {
      const f = fours[tone] * oct_mult
      frequencies.push({ oct: oct, tone: tone, freq: f, upper: f * upRatio })
    }
    oct_mult = oct_mult * 2
  }
  return frequencies
}

export default computeFrequencies
