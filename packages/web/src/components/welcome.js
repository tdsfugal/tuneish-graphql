import React from "react"

const Welcome = () => {
  const path = `
    M 0,300
    C   0,300 250,250  350,210
    C 500,150 600,130  750,100
  `
  return (
    <svg
      width="750px"
      height="300px"
      viewBox="0 0 750 300"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <path id="WelcomePath" d={path} fill="none" stroke="none" />
      </defs>
      <text
        fontSize="190px"
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
