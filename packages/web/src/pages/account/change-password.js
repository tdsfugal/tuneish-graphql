import React, { useState } from "react"
import { useNavigate } from "@reach/router"

import { checkPassword, checkPasswordRepeat } from "../../util/account"

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

const DEFAULT_OLD_PASSWORD_MESSAGE = "Old Password"
const DEFAULT_NEW_PASSWORD_MESSAGE = "New Password"
const DEFAULT_NEW_PASSWORD_REPEAT_MESSAGE = "Repeat New Password"

const ChangePasswordPage = props => {
  const [allPass, setAllPass] = useState(false)

  const [oldPasswordObj, setOldPasswordObj] = useState({
    value: "",
    ok: false,
    msg: DEFAULT_OLD_PASSWORD_MESSAGE,
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

  const updateOldPasswordObj = event => {
    const value = event.target.value
    const { ok, msg } = checkPassword(value, DEFAULT_OLD_PASSWORD_MESSAGE)
    setAllPass(ok && newPasswordObj.ok && newPasswordRepeatObj.ok)
    setOldPasswordObj({ value, ok, msg })
  }

  const updateNewPasswordObj = event => {
    const value = event.target.value
    const { ok, msg } = checkPassword(value, DEFAULT_NEW_PASSWORD_MESSAGE)
    setAllPass(oldPasswordObj.ok && ok && newPasswordRepeatObj.ok)
    setNewPasswordObj({ value, ok, msg })
  }

  const updateNewPasswordRepeatObj = event => {
    const value = event.target.value
    const { ok, msg } = checkPasswordRepeat(newPasswordObj.value, value)
    setAllPass(oldPasswordObj.ok && newPasswordObj.ok && ok)
    setNewPasswordRepeatObj({ value, ok, msg })
  }

  const submitPasswords = async event => {
    // prevent the form from reloading the page
    event.preventDefault()
    event.stopPropagation()
    const { error } = User.changePassword({
      oldPassword: oldPasswordObj.value,
      newPassword: newPasswordObj.value,
    })
    if (!error) navigate("/")
  }

  return (
    <Layout title="Reset Password" restricted>
      <SEO title="Reset Password Page" />
      <ColumnView>
        <ItemView>
          <FormFrameView>
            <InputLabelView>{oldPasswordObj.msg}</InputLabelView>
            <InputItemView
              ok={oldPasswordObj.ok}
              id="oldPassword"
              name="password"
              autocomplete="password"
              type="password"
              placeholder="  Password"
              value={oldPasswordObj.value}
              onChange={updateOldPasswordObj}
            />
            <InputLabelView>{newPasswordObj.msg}</InputLabelView>
            <InputItemView
              ok={newPasswordObj.ok}
              id="newPassword"
              type="password"
              placeholder="  Password"
              value={newPasswordObj.value}
              onChange={updateNewPasswordObj}
            />
            <InputLabelView>{newPasswordRepeatObj.msg}</InputLabelView>
            <InputItemView
              ok={newPasswordRepeatObj.ok}
              id="newPasswordRepeat"
              type="password"
              placeholder="  Repeaat Password"
              value={newPasswordRepeatObj.value}
              onChange={updateNewPasswordRepeatObj}
            />
            <ButtonView ok={allPass} onClick={submitPasswords}>
              Change Password
            </ButtonView>
          </FormFrameView>
        </ItemView>
      </ColumnView>
    </Layout>
  )
}

export default ChangePasswordPage
