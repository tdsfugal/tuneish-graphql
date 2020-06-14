// import React, { useState } from "react"
import React from "react"
import { useNavigate } from "@reach/router"

// import { checkEmail, checkPassword } from "../../util/account"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import {
  ColumnView,
  ItemView,
  FormFrameView,
  // InputItemView,
  InputLabelView,
  ButtonView,
} from "../../components/_styles"

import { User } from "../../state/auth"

// const DEFAULT_EMAIL_MESSAGE = "Email for the account:"
// const DEFAULT_PASSWORD_MESSAGE = "Password for the account:"
const DELETE_WARNING_MESSAGE = "This permanently erases your account. Proceed?"

const DeleteAccountPage = props => {
  const navigate = useNavigate()
  //
  // const [emailObj, setEmailObj] = useState({
  //   value:
  //     props.location && props.location.state && props.location.state.email
  //       ? props.location.state.email
  //       : "",
  //   ok:
  //     props.location && props.location.state && props.location.state.email
  //       ? true
  //       : false,
  //   msg: DEFAULT_EMAIL_MESSAGE,
  // })
  // const [passwordObj, setPasswordObj] = useState({
  //   value: "",
  //   ok: false,
  //   msg: DEFAULT_PASSWORD_MESSAGE,
  // })
  //
  // const updateEmailObj = event => {
  //   const value = event.target.value
  //   const { ok, msg } = checkEmail(value)
  //   setEmailObj({ value, ok, msg })
  // }
  //
  // const updatePasswordObj = event => {
  //   const value = event.target.value
  //   const { ok, msg } = checkPassword(value)
  //   setPasswordObj({ value, ok, msg })
  // }

  const deleteAccount = async event => {
    // prevent the form from reloading the page
    event.preventDefault()
    event.stopPropagation()

    // if all criteria are OK then process the click
    // if (passwordObj.ok && emailObj.ok) {
    const { error } = await User.deleteAccount()
    // const { error } = await User.deleteAccount({
    //   username: emailObj.value,
    //   password: passwordObj.value,
    // })

    if (!error) navigate("/")
    // }
  }

  return (
    <Layout title="Delete Account" restricted>
      <SEO title="Delete Account" />
      <ColumnView>
        <ItemView>
          <FormFrameView>
            <InputLabelView>{DELETE_WARNING_MESSAGE}</InputLabelView>
            <ButtonView onClick={deleteAccount}>Delete</ButtonView>
          </FormFrameView>
        </ItemView>
      </ColumnView>
    </Layout>
  )
}

export default DeleteAccountPage

//
// <InputLabelView>{emailObj.msg}</InputLabelView>
// <InputItemView
//   placeholder="  Email"
//   value={emailObj.value}
//   onChange={updateEmailObj}
// />
// <InputLabelView>{passwordObj.msg}</InputLabelView>
// <InputItemView
//   placeholder="  Password"
//   type="password"
//   value={passwordObj.value}
//   onChange={updatePasswordObj}
// />
// <InputLabelView>{DELETE_WARNING_MESSAGE}</InputLabelView>
// <ButtonView
//   ok={emailObj.ok && passwordObj.ok}
//   onClick={deleteAccount}
// >
//   Delete
// </ButtonView>
