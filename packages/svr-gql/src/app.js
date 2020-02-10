import cors from "cors"
import express from "express"

var morgan = require("morgan")

import apolloServer from "./apolloServer"

import getLogger from "./getLogger"
const logger = getLogger(__filename)

const GQL_URL = process.env.GQL_URL || "/api/v1"
const CORS_ADDRESS = process.env.COORS_ADDRESS || "*"

const app = express()
  .use(cors({ origin: CORS_ADDRESS }))
  .use(morgan("tiny"))

apolloServer.applyMiddleware({ app, path: GQL_URL })

app.get("*", function(req, res) {
  res.redirect("/404")
})

export default app
