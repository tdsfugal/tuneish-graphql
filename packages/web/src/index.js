/* eslint-disable no-unused-vars */
import Amplify, { Auth } from "aws-amplify"
import awsconfig from "./aws-exports"

Amplify.configure(awsconfig)

export { default as wrapWithProvider } from "./state/wrap-with-provider"
