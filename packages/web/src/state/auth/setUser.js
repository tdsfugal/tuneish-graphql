import gql from "graphql-tag"

import apolloClient from "../apollo/client"
import { createGuestUser } from "../apollo/graphql/user"

const SET_USER = gql`
  mutation SetUser(
    $username: String!
    $isConfirmed: Boolean!
    $email: String!
    $nickname: String!
  ) {
    setUser(
      username: $username
      isConfirmed: $isConfirmed
      email: $email
      nickname: $nickname
    ) @client
  }
`

export default async function setUser({
  username,
  email,
  isConfirmed,
  nickname,
  guest = false,
}) {
  if (guest) {
    await apolloClient.mutate({
      mutation: SET_USER,
      variables: createGuestUser(),
    })
  } else {
    await apolloClient.mutate({
      mutation: SET_USER,
      variables: { username, isConfirmed, email, nickname },
    })
  }
}
