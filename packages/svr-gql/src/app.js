import cors from "cors"
import express from "express"

var morgan = require("morgan")

import apolloServer from "./apolloServer"

import { getLogger, getEnvVariable } from "./util"
const logger = getLogger(__filename)

const GQL_URL = getEnvVariable("GQL_URL", logger)
const CORS_ADDRESS = getEnvVariable("CORS_ADDRESS", logger)

const app = express()
  .use(cors({ origin: CORS_ADDRESS }))
  .use(morgan("tiny"))

apolloServer.applyMiddleware({ app, path: GQL_URL })

app.get("*", function(req, res) {
  res.redirect("/404")
})

export default app
