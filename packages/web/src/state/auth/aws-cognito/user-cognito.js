import { Auth } from "aws-amplify"

import {
  NEW_PASSWORD_REQUIRED_ERROR,
  MFA_REQUIRED_ERROR,
  SET_UP_MFA_ERROR,
  USER_NOT_CONFIRMED_ERROR,
  PASSWORD_RESET_REQUIRED_ERROR,
  PASSWORD_IS_INCORRECT_ERROR,
  EMAIL_NOT_RECOGNIZED_ERROR,
  USER_NAME_EXISTS_ERROR,
  ACCOUNT_ALREADY_CONFIRMED,
  RESET_LIMIT_EXCEEDED_ERROR,
  USER_NOT_FOUND_ERROR,
  USER_NOT_LOGGED_IN,
  UNKNOWN_AUTH_ERROR,
} from "../auth-errors"

import setUser from "../setUser"

export default class User {
  static async isLoggedIn() {
    const user = await Auth.currentAuthenticatedUser()
    return user !== undefined && user !== null
  }

  static async getCurrentUser() {
    try {
      const response = await Auth.currentAuthenticatedUser()
      return response
    } catch (e) {
      console.log(e)
      return null
    }
  }

  static async signUp({ email, password, nickname }) {
    try {
      const response = await Auth.signUp({
        username: email,
        password: password,
        attributes: {
          email,
          nickname,
        },
      })
      return { error: null, user: response }
    } catch (err) {
      if (err.code === "UsernameExistsException") {
        return { error: USER_NAME_EXISTS_ERROR, user: null }
      } else {
        console.log(err)
        return { error: UNKNOWN_AUTH_ERROR, user: null }
      }
    }
  }

  static async confirmSignUp({ username, confCode }) {
    try {
      const response = await Auth.confirmSignUp(username, confCode)
      if (response === "SUCCESS") {
        return { error: null }
      } else {
        console.log(response)
        return { error: UNKNOWN_AUTH_ERROR }
      }
    } catch (err) {
      if (
        err.message === "User cannot be confirmed. Current status is CONFIRMED"
      ) {
        return { error: ACCOUNT_ALREADY_CONFIRMED }
      } else {
        console.log(err)
        return { error: UNKNOWN_AUTH_ERROR }
      }
    }
  }

  static async resendConfCode({ username }) {
    console.log(username)
    try {
      const response = await Auth.resendSignUp(username)
      if (response === "SUCCESS") {
        return { error: null }
      } else {
        console.log(response)
        return { error: UNKNOWN_AUTH_ERROR }
      }
    } catch (err) {
      if (err.message === "User is already confirmed.")
        return { err: ACCOUNT_ALREADY_CONFIRMED }
    }
  }

  static async logIn({ email, password }) {
    try {
      const user = await Auth.signIn(email, password)
      if (user.challengeName === "NEW_PASSWORD_REQUIRED") {
        setUser({ guest: true })
        return { error: NEW_PASSWORD_REQUIRED_ERROR, user: null }
      } else if (
        user.challengeName === "SMS_MFA" ||
        user.challengeName === "SOFTWARE_TOKEN_MFA"
      ) {
        return { error: MFA_REQUIRED_ERROR, user: null }
      } else if (user.challengeName === "MFA_SETUP") {
        setUser({ guest: true })
        return { error: SET_UP_MFA_ERROR, user: null }
      } else {
        const {
          sub: username,
          email,
          email_verified: isConfirmed,
          nickname,
        } = user.attributes
        setUser({ username, isConfirmed, email, nickname })
        return { error: null, user: { username, isConfirmed, email, nickname } }
      }
    } catch (err) {
      if (err.code === "UserNotConfirmedException") {
        return { error: USER_NOT_CONFIRMED_ERROR, user: null }
      } else if (err.code === "PasswordResetRequiredException") {
        return { error: PASSWORD_RESET_REQUIRED_ERROR, user: null }
      } else if (err.code === "NotAuthorizedException") {
        return { error: PASSWORD_IS_INCORRECT_ERROR, user: null }
      } else if (err.code === "UserNotFoundException") {
        return { error: EMAIL_NOT_RECOGNIZED_ERROR, user: null }
      } else {
        console.log(err)
        setUser({ guest: true })
        return { error: UNKNOWN_AUTH_ERROR, user: null }
      }
    }
  }

  static async logOut() {
    try {
      await Auth.signOut()
    } catch (e) {
      if (e !== "No current user") console.log("Error logging out: ", e)
    }
    setUser({ guest: true })
  }

  static async changePassword({ oldPassword, newPassword }) {
    try {
      const user = await Auth.currentAuthenticatedUser()
      await Auth.changePassword(user, oldPassword, newPassword)
      return { error: null }
    } catch (err) {
      console.log(err)
      return { error: UNKNOWN_AUTH_ERROR }
    }
  }

  static async requestPasswordReset({ username }) {
    try {
      await Auth.forgotPassword(username)
      return { error: null }
    } catch (err) {
      console.log(err)
      if (err.code === "LimitExceededException") {
        return { error: RESET_LIMIT_EXCEEDED_ERROR }
      }
      if (err.code === "UserNotFoundException") {
        return { error: USER_NOT_FOUND_ERROR }
      }
      return { error: UNKNOWN_AUTH_ERROR }
    }
  }

  static async resetPassword({ username, code, newPassword }) {
    try {
      await Auth.forgotPasswordSubmit(username, code, newPassword)
      return { error: null }
    } catch (err) {
      console.log(err)
      return { error: UNKNOWN_AUTH_ERROR }
    }
  }

  static async deleteAccount() {
    try {
      const user = await User.getCurrentUser()
      // TODO - reverify user to assure that the request is from the user
      if (user) {
        const response = await new Promise((resolve, reject) => {
          user.deleteUser((err, data) => {
            if (err) reject(err)
            if (data) resolve(data)
          })
        })
        if (response === "SUCCESS") {
          setUser({ guest: true })
          return { error: null }
        }
        console.log(response)
        return { error: UNKNOWN_AUTH_ERROR }
      } else {
        return { error: USER_NOT_LOGGED_IN }
      }
    } catch (err) {
      console.log(err)
      // InternalErrorException
      // InvalidParameterException
      // NotAuthorizedException
      // PasswordResetRequiredException
      // ResourceNotFoundException
      // TooManyRequestsException
      // UserNotConfirmedException
      // UserNotFoundException
      return { error: UNKNOWN_AUTH_ERROR }
    }
  }
}