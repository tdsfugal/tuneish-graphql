require("dotenv").config()

import app from "./app"

const SERVE_PORT = process.env.GQL_PORT || 3000

app.listen({ port: SERVE_PORT }, () => {
  console.log(`Server running on http://localhost:${SERVE_PORT}`)
})
