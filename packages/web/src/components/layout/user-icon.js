import React, { useState } from "react"
import { Link } from "gatsby"
import gql from "graphql-tag"
import { useQuery } from "@apollo/react-hooks"
import { User } from "../../state/auth"

import { UserIconView, UserIconBurgerView, UserIconItemView } from "../_styles"

const GET_USER = gql`
  {
    user @client {
      username
      nickname
    }
  }
`

export default props => {
  const [hovering, setHovering] = useState(false)
  const { loading, error, data } = useQuery(GET_USER)

  if (loading) return "Loading..."
  if (error) return `Error! ${error.message}`

  const { username, nickname } = data.user

  const handleHoverStart = e => setHovering(true)
  const handleHoverStop = e => setHovering(false)

  let content = null

  if (hovering) {
    const loggedIn = username && username !== ""
    if (loggedIn) {
      const handleLogout = e => User.logOut()
      content = (
        <UserIconBurgerView>
          <Link to="/account/manage">
            <UserIconItemView>Account</UserIconItemView>
          </Link>
          <Link to="/home">
            <UserIconItemView onClick={handleLogout}>logout</UserIconItemView>
          </Link>
        </UserIconBurgerView>
      )
    } else {
      content = (
        <UserIconBurgerView>
          <Link to="/account/login">
            <UserIconItemView>login</UserIconItemView>
          </Link>
          <Link to="/account/signup">
            <UserIconItemView>signup</UserIconItemView>
          </Link>
        </UserIconBurgerView>
      )
    }
  } else {
    content = <UserIconView>{nickname}</UserIconView>
  }

  return (
    <div
      role="navigation"
      onMouseEnter={handleHoverStart}
      onMouseLeave={handleHoverStop}
    >
      {content}
    </div>
  )
}
