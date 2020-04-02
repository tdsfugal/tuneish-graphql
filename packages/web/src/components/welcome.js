import React from "react"

const Welcome = () => {
  const path = `
    M 0,200
    C   0,200 200,150  250,110
    C 500,50  600,30   750,0
  `
  return (
    <svg
      width="500px"
      height="200px"
      viewBox="0 0 500 200"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <path id="WelcomePath" d={path} fill="none" stroke="none" />
      </defs>
      <text
        fontSize="120px"
        fontFamily="Brush Script MT, cursive"
        fill="rebeccapurple"
        stroke="#313"
      >
        <textPath href="#WelcomePath">Stay tuned!</textPath>
      </text>
    </svg>
  )
}

export default Welcome

//
