import React, { useState } from "react"
import { Link } from "gatsby"
import { Mutation } from "react-apollo"
import gql from "graphql-tag"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SUBSCRIBE_MUTATION = gql`
  mutation SignUp($firstName: String!, $lastName: String!, $email: String!) {
    signUp(firstName: $firstName, lastName: $lastName, email: $email) {
      result
    }
  }
`

const SubscriptionPage = () => {
  const [firstNameValue, setFirstNameValue] = useState("")
  const [lastNameValue, setLastNameValue] = useState("")
  const [emailValue, setEmailValue] = useState("")
  return (
    <Layout>
      <SEO title="Subscription Page" />
      <h1>Subscribe to the Mailing List</h1>
      <p>Please fill out the form:</p>
      <Mutation mutation={SUBSCRIBE_MUTATION}>
        {(signUp, { loading, error, data }) => (
          <React.Fragment>
            <form
              onSubmit={async event => {
                event.preventDefault()
                signUp({
                  variables: {
                    firstName: firstNameValue,
                    lastName: lastNameValue,
                    email: emailValue,
                  },
                })
              }}
            >
              <div style={{ padding: "20px" }}>
                <label htmlFor="firstNameInput">First Name: </label>
                <input
                  id="firstNameInput"
                  value={firstNameValue}
                  onChange={event => {
                    setFirstNameValue(event.target.value)
                  }}
                />
              </div>
              <div style={{ padding: "20px" }}>
                <label htmlFor="lastNameInput">Last Name: </label>
                <input
                  id="lastNameInput"
                  value={lastNameValue}
                  onChange={event => {
                    setLastNameValue(event.target.value)
                  }}
                />
              </div>
              <div style={{ padding: "20px" }}>
                <label htmlFor="emailInput">Email: </label>
                <input
                  id="emailInput"
                  value={emailValue}
                  onChange={event => {
                    setEmailValue(event.target.value)
                  }}
                />
              </div>
              <div style={{ padding: "20px" }}>
                <button type="submit">Subscribe!</button>
              </div>
            </form>
            <div style={{ padding: "20px" }}>
              {loading && <p>Loading...</p>}
              {error && (
                <p>An unknown error has occured. Please try again later...</p>
              )}
              {data && <p>{data.signUp.result}</p>}
            </div>
          </React.Fragment>
        )}
      </Mutation>
      <Link to="/">Go Back to the homepage</Link>
    </Layout>
  )
}

export default SubscriptionPage
