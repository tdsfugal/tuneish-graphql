export const getCrosses = arr => {
  const ups = []
  const downs = []
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) downs.push(i)
    if (arr[i] < arr[i + 1]) ups.push(i)
  }
  return { ups, downs }
}

export const autocorrelate = (max, min, crosses) => {
  const len = crosses.length
  const results = []
  for (let interval = min; interval < max; interval++) {
    let count = 0
    for (let i = 0; i < len - 1; i++) {
      const test = crosses[i] + interval
      let j = i
      while (j < len && crosses[j] <= test) {
        if (crosses[j] === test) count++
        j++
      }
    }
    if (count > 0) results.push([interval, count])
  }
  return results
}

export const combine = (a, b) => {
  // Intelligently zip the arrays together
  let i = 0
  let j = 0
  const result = []
  while (i < a.length && j < b.length) {
    if (a[i][0] === b[j][0]) {
      // Combine the values and continue
      const combined = [a[i][0], a[i][1] + b[j][1]]
      result.push(combined)
      i++
      j++
    } else if (a[i][0] < b[j][0]) {
      // pull the value off of a and continue
      result.push(a[i])
      i++
    } else {
      /// pull the value off of b and continue
      result.push(b[j])
      j++
    }
  }

  if (i < a.length) {
    // then a may have more values
    return result.concat(a.slice(i))
  } else if (j < a.length) {
    return result.concat(b.slice(j))
  } else {
    return result
  }
}

export const condense = (sampleRate, arr) => {
  // console.log(arr)
  // Try just getting the peak
  let peak = null
  let max = -1
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][1] > max) {
      max = arr[i][1]
      peak = arr[i][0]
    }
  }
  return sampleRate / peak
}

// Debounce
let history = []
export const debounce = note => {
  history.push(note) // Add the newest at the front
  if (history.length > 3) history.shift() // discard the oldest
  for (let i = 0; i < history.length - 1; i++) {
    if (history[i].oct !== note.oct || history[i].tone !== note.tone) {
      // There is no consensus.
      return null
    }
  }
  return note
}
