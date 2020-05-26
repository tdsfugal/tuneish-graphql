import unified from "unified"
import parse from "remark-parse"
import remark2react from "remark-react"

// This component transforms a string of markdown content into a set of
// Reaact components
const Remark = ({ content }) => {
  try {
    return unified()
      .use(parse)
      .use(remark2react)
      .processSync(content).contents
  } catch (e) {
    console.log(e)
    return null
  }
}

export default Remark
