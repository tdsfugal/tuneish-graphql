import React, { useState } from "react"
import { useNavigate } from "@reach/router"
import { Link } from "gatsby"

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
  User,
  NEW_PASSWORD_REQUIRED_ERROR,
  MFA_REQUIRED_ERROR,
  SET_UP_MFA_ERROR,
  USER_NOT_CONFIRMED_ERROR,
  PASSWORD_IS_INCORRECT_ERROR,
  EMAIL_NOT_RECOGNIZED_ERROR,
  UNKNOWN_AUTH_ERROR,
} from "../../state/auth"

import { checkEmail, checkPassword } from "../../util/account"

const DEFAULT_EMAIL_MESSAGE = "Your email is your username:"
const DEFAULT_PASSWORD_MESSAGE = "Password:"

const LoginPage = props => {
  const navigate = useNavigate()
  const [emailObj, setEmailObj] = useState({
    value: "",
    ok: false,
    msg: DEFAULT_EMAIL_MESSAGE,
  })
  const [passwordObj, setPasswordObj] = useState({
    value: "",
    ok: false,
    msg: DEFAULT_PASSWORD_MESSAGE,
  })
  const [allPass, setAllPass] = useState(false)
  const [importUserName, setImportUserName] = useState(true)

  const updateEmailObj = event => {
    const value = event.target.value
    const { ok, msg } = checkEmail(value, DEFAULT_EMAIL_MESSAGE)
    setAllPass(ok && passwordObj.ok)
    setEmailObj({ value, ok, msg })
  }

  const updatePasswordObj = event => {
    const value = event.target.value
    const { ok, msg } = checkPassword(value, DEFAULT_PASSWORD_MESSAGE)
    setAllPass(emailObj.ok && ok)
    setPasswordObj({ value, ok, msg })
  }

  const continueAsGuest = async event => {
    // prevent the form from reloading the page
    event.preventDefault()
    event.stopPropagation()

    // if all criteria are OK then process the click
    User.logOut()
    navigate("/")
  }

  const submitLogin = async event => {
    // prevent the form from reloading the page
    event.preventDefault()
    event.stopPropagation()

    // if all criteria are OK then process the click
    if (allPass) {
      const { error, user } = await User.logIn({
        email: emailObj.value,
        password: passwordObj.value,
      })

      if (error === NEW_PASSWORD_REQUIRED_ERROR) {
        // TODO
        console.log(error)
        return
      }

      if (error === MFA_REQUIRED_ERROR) {
        // TODO
        console.log(error)
        return
      }

      if (error === SET_UP_MFA_ERROR) {
        // TODO
        console.log(error)
        return
      }

      if (error === USER_NOT_CONFIRMED_ERROR)
        navigate("/account/confirm-account")

      if (error === PASSWORD_IS_INCORRECT_ERROR) {
        setPasswordObj({ value: "", ok: false, msg: "Password is incorrect" })
        return
      }

      if (error === EMAIL_NOT_RECOGNIZED_ERROR) {
        setEmailObj({ value: "", ok: false, msg: "Email not recognized" })
        return
      }

      if (error === UNKNOWN_AUTH_ERROR) {
        // Ignore it, I guess?
        return
      }
      // All checks passed, head home
      if (user) navigate("/")
    }
  }

  if (
    importUserName &&
    props &&
    props.location &&
    props.location.state &&
    props.location.state.username
  ) {
    // Do not continue to reset the email with the username. Once is enough.
    setImportUserName(false)
    updateEmailObj({ target: { value: props.location.state.username } })
  }

  return (
    <Layout title="Login">
      <SEO title="Login" />
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
            <InputLabelView>{passwordObj.msg}</InputLabelView>
            <InputItemView
              ok={passwordObj.ok}
              id="password"
              name="password"
              autocomplete="password"
              type="password"
              placeholder="  Password"
              value={passwordObj.value}
              onChange={updatePasswordObj}
            />
            <ButtonView ok={allPass} onClick={submitLogin}>
              Login
            </ButtonView>
            <Link to="/account/signup">
              <p>Don't have an account?</p>
            </Link>
            <Link to="/account/request-password-reset">
              <p>Forgot your password?</p>
            </Link>
            <ButtonView onClick={continueAsGuest}>Continue as Guest</ButtonView>
          </FormFrameView>
        </ItemView>
      </ColumnView>
    </Layout>
  )
}

export default LoginPage
