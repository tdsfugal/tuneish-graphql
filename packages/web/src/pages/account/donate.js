import React, { useState } from "react"
// import { useNavigate } from "@reach/router"

// import { checkConfCode, checkEmail } from "../../util/account"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import {
  ColumnView,
  ItemView,
  FormFrameView,
  // InputItemView,
  // InputLabelView,
  // ButtonView,
} from "../../components/_styles"
//
// import { User, ACCOUNT_ALREADY_CONFIRMED } from "../../state/auth"
//
// const DEFAULT_CONFCODE_MESSAGE = "Enter six digit code"
// const DEFAULT_EMAIL_MESSAGE = "Email"

const ManageAccountPage = props => {
  const [allPass, setAllPass] = useState(false)
  // const [confCodeObj, setConfCodeObj] = useState({
  //   value: "",
  //   ok: false,
  //   msg: DEFAULT_CONFCODE_MESSAGE,
  // })
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
  // const navigate = useNavigate()

  // const updateEmailObj = event => {
  // prevent the form from reloading the page
  // event.preventDefault()
  // event.stopPropagation()

  // if all criteria are OK then process the click
  //   const value = event.target.value
  //   const { ok, msg } = checkEmail(value)
  //   setAllPass(ok && confCodeObj.ok)
  //   setEmailObj({ value, ok, msg })
  // }
  //
  // const updateConfCodeObj = event => {
  //   const value = event.target.value
  //   const { ok } = checkConfCode(value)
  //   setAllPass(ok && emailObj.ok)
  //   // Ignore the message. Use workflow as is.
  //   setConfCodeObj({ value, ok, msg: confCodeObj.msg })
  // }
  //
  // const resendConfCode = async () => {
  //   const { err } = await User.resendConfCode({ username: emailObj.value })
  //   if (err === ACCOUNT_ALREADY_CONFIRMED) {
  //     navigate("/account/login", { state: { username: emailObj.value } })
  //   } else {
  //     setConfCodeObj({
  //       value: "",
  //       ok: false,
  //       msg: "New confirmation code sent",
  //     })
  //   }
  // }
  //
  // const submitConfCode = async () => {
  //   if (allPass) {
  //     const { error } = await User.confirmSignUp({
  //       username: emailObj.value,
  //       confCode: confCodeObj.value,
  //     })
  //     if (!error) {
  //       // Confirmation was successful
  //       navigate("/account/login", { state: { username: emailObj.value } })
  //     } else if (error === ACCOUNT_ALREADY_CONFIRMED) {
  //       // Confirmation not needed
  //       navigate("/account/login", { state: { username: emailObj.value } })
  //     } else {
  //       // Confirmation failed
  //       setConfCodeObj({
  //         value: "",
  //         ok: false,
  //         msg: "Verification failed. Please try again.",
  //       })
  //     }
  //   }
  // }

  return (
    <Layout title="Manage Your Account">
      <SEO title="Manage Account Page" />
      <ColumnView>
        <ItemView>
          <FormFrameView></FormFrameView>
        </ItemView>
      </ColumnView>
    </Layout>
  )
}

export default ManageAccountPage
