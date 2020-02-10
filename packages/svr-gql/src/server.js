require("dotenv").config()

import app from "./app"

import getLogger from "./getLogger"
const logger = getLogger(__filename)

const SERVE_PORT = process.env.GQL_PORT || 3000

app.listen({ port: SERVE_PORT }, () => {
  logger.info(`Server running on http://localhost:${SERVE_PORT}`)
})
