import React, { useState } from "react"

import { useNavigate } from "@reach/router"

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

import {
  checkEmail,
  checkNickName,
  checkPassword,
  checkPasswordRepeat,
} from "../../util/account"

import { User, USER_NAME_EXISTS_ERROR } from "../../state/auth"

const DEFAULT_EMAIL_MESSAGE = "Your Email is your Username"
const DEFAULT_NICKNAME_MESSAGE = "What should we call you?"
const DEFAULT_PASSWORD_MESSAGE = "Password must be 8-24 characters"
const DEFAULT_PASSWORD_REPEAT_MESSAGE = "Repeat the password"

const SignUpPage = () => {
  const [allPass, setAllPass] = useState(false)
  const [emailObj, setEmailObj] = useState({
    value: "",
    ok: false,
    msg: DEFAULT_EMAIL_MESSAGE,
  })
  const [nicknameObj, setNicknameObj] = useState({
    value: "",
    ok: false,
    msg: DEFAULT_NICKNAME_MESSAGE,
  })
  const [passwordObj, setPasswordObj] = useState({
    value: "",
    ok: false,
    msg: DEFAULT_PASSWORD_MESSAGE,
  })
  const [passwordRepeatObj, setPasswordRepeatObj] = useState({
    value: "",
    ok: false,
    msg: DEFAULT_PASSWORD_REPEAT_MESSAGE,
  })
  const navigate = useNavigate()

  const updateEmailObj = event => {
    const value = event.target.value
    const { ok, msg } = checkEmail(value, DEFAULT_EMAIL_MESSAGE)
    setAllPass(ok && nicknameObj.ok && passwordObj.ok && passwordRepeatObj.ok)
    setEmailObj({ value, ok, msg })
  }

  const updateNicknameObj = event => {
    const value = event.target.value
    const { ok, msg } = checkNickName(value, DEFAULT_NICKNAME_MESSAGE)
    setAllPass(emailObj.ok && ok && passwordObj.ok && passwordRepeatObj.ok)
    setNicknameObj({ value, ok, msg })
  }

  const updatepasswordObj = event => {
    const value = event.target.value
    const { ok, msg } = checkPassword(value, DEFAULT_PASSWORD_MESSAGE)
    setAllPass(emailObj.ok && nicknameObj.ok && ok && passwordRepeatObj.ok)
    setPasswordObj({ value, ok, msg })
    // Also check if it now matches the repeat password
    updatePasswordRepeatObj({ target: { value: passwordRepeatObj.value } })
  }

  const updatePasswordRepeatObj = event => {
    const value = event.target.value
    const { ok, msg } = checkPasswordRepeat(passwordObj.value, value)
    setAllPass(emailObj.ok && nicknameObj.ok && passwordObj.ok && ok)
    setPasswordRepeatObj({ value, ok, msg })
  }

  const submitSignupInfo = async event => {
    // prevent the form from reloading the page
    event.preventDefault()
    event.stopPropagation()

    // if all criteria are OK then process the click
    if (allPass) {
      const { error } = await User.signUp({
        email: emailObj.value,
        password: passwordObj.value,
        nickname: nicknameObj.value,
      })
      if (error === USER_NAME_EXISTS_ERROR) {
        setEmailObj({
          value: emailObj.value,
          ok: false,
          msg: USER_NAME_EXISTS_ERROR,
        })
      } else {
        navigate("/account/confirm-account", {
          state: { email: emailObj.value },
        })
      }
    }
  }

  return (
    <Layout title="Sign Up">
      <SEO title="SignUp Page" />
      <ColumnView>
        <ItemView>
          <FormFrameView>
            <InputLabelView>{emailObj.msg}</InputLabelView>
            <InputItemView
              ok={emailObj.ok}
              placeholder="  Email"
              value={emailObj.value}
              onChange={updateEmailObj}
            />
            <InputLabelView>{nicknameObj.msg}</InputLabelView>
            <InputItemView
              ok={nicknameObj.ok}
              placeholder="  Nickname"
              value={nicknameObj.value}
              onChange={updateNicknameObj}
            />
            <InputLabelView>{passwordObj.msg}</InputLabelView>
            <InputItemView
              ok={passwordObj.ok}
              type="password"
              placeholder="  Password"
              value={passwordObj.value}
              onChange={updatepasswordObj}
            />
            <InputLabelView>{passwordRepeatObj.msg}</InputLabelView>
            <InputItemView
              ok={passwordRepeatObj.ok}
              type="password"
              placeholder="  Password"
              value={passwordRepeatObj.value}
              onChange={updatePasswordRepeatObj}
            />
            <ButtonView ok={allPass} onClick={submitSignupInfo}>
              Sign Up
            </ButtonView>
          </FormFrameView>
        </ItemView>
      </ColumnView>
    </Layout>
  )
}

export default SignUpPage
