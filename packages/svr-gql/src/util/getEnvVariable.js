export default function getEnvVariable(varName, logger) {
  logger.debug(`Getting environment variable ${varName}`)
  // return variable if it exists
  if (process.env[varName]) return process.env[varName]
  // log and throw error if it does not
  const msg = `Environment variable ${varName} not defined`
  logger.error(msg)
  throw Error(msg)
}
