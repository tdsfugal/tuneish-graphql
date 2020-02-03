import cors from "cors"
import express from "express"
import dotenv from "dotenv"
// import morgan from "morgan"
var morgan = require("morgan") // until bug gets fixed

import apolloServer from "./apollo"

dotenv.config()

const GQL_URL = process.env.GQL_URL || "/api/v1"
const SERVE_PORT = process.env.GQL_PORT || 3000
const CORS_ADDRESS = process.env.COORS_ADDRESS || "*"

const app = express()

app.use(cors({ origin: CORS_ADDRESS }))
app.use(morgan("tiny"))

apolloServer.applyMiddleware({ app, path: GQL_URL })

app.use(express.static("public"))

app.get("*", function(req, res) {
  res.redirect("/404")
})

app.listen({ port: SERVE_PORT }, () => {
  console.log(`Server running on http://localhost:${SERVE_PORT}`)
})
