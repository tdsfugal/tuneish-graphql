import app from "./app"

import { getLogger, getEnvVariable } from "./util"
const logger = getLogger(__filename)

const GQL_PORT = parseInt(getEnvVariable("GQL_PORT", logger))

app.listen({ port: GQL_PORT }, () => {
  logger.info(`Server running on http://localhost:${GQL_PORT}`)
})
