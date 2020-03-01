import Amplify, { Auth } from "aws-amplify"
import awsconfig from "./aws-exports"

export { default as wrapWithProvider } from "./state/wrap-with-provider"

Amplify.configure(awsconfig)
