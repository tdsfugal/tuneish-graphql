import mongoose from "mongoose"

import { getLogger, getEnvVariable } from "../util"
const logger = getLogger(__filename)

const URL = getEnvVariable("MONGO_DB_URL", logger)

export default function getMongooseModel(modelName, modelSchema) {
  // mongoose.connect(URL).catch(err => {
  //   console.log(err)
  // })

  return null
}
