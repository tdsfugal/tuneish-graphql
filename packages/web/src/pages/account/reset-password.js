import React, { useState } from "react"
import { useNavigate } from "@reach/router"

import {
  checkEmail,
  checkConfCode,
  checkPassword,
  checkPasswordRepeat,
} from "../../util/account"

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

const DEFAULT_EMAIL_MESSAGE = "Account Email"
const DEFAULT_CONF_CODE_MESSAGE = "Enter confirmation code"
const DEFAULT_NEW_PASSWORD_MESSAGE = "New Password"
const DEFAULT_NEW_PASSWORD_REPEAT_MESSAGE = "Repeat New Password"

const ResetPasswordPage = props => {
  const [allPass, setAllPass] = useState(false)
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

  const [confCodeObj, setConfCodeObj] = useState({
    value: "",
    ok: false,
    msg: DEFAULT_CONF_CODE_MESSAGE,
  })

  const [newPasswordObj, setNewPasswordObj] = useState({
    value: "",
    ok: false,
    msg: DEFAULT_NEW_PASSWORD_MESSAGE,
  })
  const [newPasswordRepeatObj, setNewPasswordRepeatObj] = useState({
    value: "",
    ok: false,
    msg: DEFAULT_NEW_PASSWORD_REPEAT_MESSAGE,
  })
  const navigate = useNavigate()

  const updateEmailObj = event => {
    const value = event.target.value
    const { ok, msg } = checkEmail(value, DEFAULT_EMAIL_MESSAGE)
    setEmailObj({ value, ok, msg })
  }

  const updateConfCodeObj = event => {
    const value = event.target.value
    const { ok, msg } = checkConfCode(value, DEFAULT_CONF_CODE_MESSAGE)
    setAllPass(
      confCodeObj.ok && ok && newPasswordObj.ok && newPasswordRepeatObj.ok
    )
    setConfCodeObj({ value, ok, msg })
  }

  const updateNewPasswordObj = event => {
    const value = event.target.value
    const { ok, msg } = checkPassword(value, DEFAULT_NEW_PASSWORD_MESSAGE)
    setAllPass(confCodeObj.ok && ok && newPasswordRepeatObj.ok)
    setNewPasswordObj({ value, ok, msg })
  }

  const updateNewPasswordRepeatObj = event => {
    const value = event.target.value
    const { ok, msg } = checkPasswordRepeat(newPasswordObj.value, value)
    setAllPass(confCodeObj.ok && newPasswordObj.ok && ok)
    setNewPasswordRepeatObj({ value, ok, msg })
  }

  const submitNewPassword = async event => {
    // prevent the form from reloading the page
    event.preventDefault()
    event.stopPropagation()
    const response = await User.resetPassword({
      username: emailObj.value,
      code: confCodeObj.value,
      newPassword: newPasswordObj.value,
    })
    const { error } = response
    if (!error) navigate("/account/login")
  }

  return (
    <Layout title="Reset Password">
      <SEO title="Reset Password" />
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
            <InputLabelView>{confCodeObj.msg}</InputLabelView>
            <InputItemView
              ok={confCodeObj.ok}
              placeholder="  ConfCode"
              value={confCodeObj.value}
              onChange={updateConfCodeObj}
            />
            <InputLabelView>{newPasswordObj.msg}</InputLabelView>
            <InputItemView
              ok={newPasswordObj.ok}
              id="password"
              type="password"
              placeholder="  Password"
              value={newPasswordObj.value}
              onChange={updateNewPasswordObj}
            />
            <InputLabelView>{newPasswordRepeatObj.msg}</InputLabelView>
            <InputItemView
              ok={newPasswordRepeatObj.ok}
              id="passwordRepeat"
              type="password"
              placeholder="  Repeat Password"
              value={newPasswordRepeatObj.value}
              onChange={updateNewPasswordRepeatObj}
            />
            <ButtonView ok={allPass} onClick={submitNewPassword}>
              Reset Password
            </ButtonView>
          </FormFrameView>
        </ItemView>
      </ColumnView>
    </Layout>
  )
}

export default ResetPasswordPage
