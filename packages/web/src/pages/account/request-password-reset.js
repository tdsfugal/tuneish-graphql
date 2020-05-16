import React, { useState } from "react"
import { useNavigate } from "@reach/router"

import { checkEmail } from "../../util/account"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import {
  ColumnView,
  ItemView,
  FormFrameView,
  InputItemView,
  InputLabelView,
  ButtonView,
} from "../../components/_styles"

import { User } from "../../state/auth"

const DEFAULT_EMAIL_MESSAGE = "What email is the account under?"

const RequestPasswordResetPage = props => {
  const [emailObj, setEmailObj] = useState({
    value:
      props.location && props.location.state && props.location.state.email
        ? props.location.state.email
        : "",
    ok:
      props.location && props.location.state && props.location.state.email
        ? true
        : false,
    msg: DEFAULT_EMAIL_MESSAGE,
  })

  const navigate = useNavigate()

  const updateEmailObj = event => {
    const value = event.target.value
    const { ok, msg } = checkEmail(value, DEFAULT_EMAIL_MESSAGE)
    setEmailObj({ value, ok, msg })
  }

  const submitRequest = async event => {
    event.preventDefault()
    const response = await User.requestPasswordReset({
      username: emailObj.value,
    })
    console.log(response)
    const { error } = response
    if (!error)
      navigate("/account/reset-password", {
        state: { email: emailObj.value },
      })
    setEmailObj({
      value: "",
      ok: false,
      msg: error,
    })
  }

  return (
    <Layout title="Request Password Reset">
      <SEO title="Request Password Reset Page" />
      <ColumnView>
        <ItemView>
          <FormFrameView>
            <InputLabelView>{emailObj.msg}</InputLabelView>
            <InputItemView
              ok={emailObj.ok}
              id="username"
              name="username"
              autocomplete="username"
              placeholder="  Email"
              value={emailObj.value}
              onChange={updateEmailObj}
            />
            <ButtonView ok={emailObj.ok} onClick={submitRequest}>
              Submit Request
            </ButtonView>
          </FormFrameView>
        </ItemView>
      </ColumnView>
    </Layout>
  )
}

export default RequestPasswordResetPage
