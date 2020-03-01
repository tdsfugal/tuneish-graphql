import React from "react"
import { Authenticator } from "aws-amplify-react"

export default ({ children }) => (
  <div>
    <Authenticator>{children}</Authenticator>
  </div>
)
