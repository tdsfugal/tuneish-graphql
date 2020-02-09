import mongoose from "mongoose"

const dbURL =
  process.env.DATABASE_URL || "mongodb://localhost:27017/progressions"

mongoose.connect(dbURL).catch(err => {
  console.log(err)
})

const checkForDuplicateEmail = (db, collectionName, { email } = args) => {
  return new Promise(async resolve => {
    if (await checkCollectionExists(db, collectionName)) {
      db.collection(collectionName).findOne({ email }, (err, data) => {
        if (err) console.log(err)
        if (data) {
          resolve(true)
        } else {
          resolve(false)
        }
      })
    } else {
      resolve(false)
    }
  })
}

const checkCollectionExists = (db, collectionName) => {
  return new Promise(resolve => {
    db.db
      .listCollections({ name: collectionName })
      .next((err, collectionInfo) => {
        if (err) console.log(err)
        if (collectionInfo) {
          resolve(true)
        } else {
          resolve(false)
        }
      })
  })
}

const dbInsertSubscriber = (db, collectionName, args) => {
  return new Promise(resolve => {
    db.collection(collectionName).insertOne(
      {
        ...args,
        subscriptionDate: new Date(),
        cancelDate: null,
        active: true,
      },
      err => {
        if (err) {
          console.log(err)
          resolve("Error: request rejected - please try again later ...")
        } else {
          resolve("Your subscription has been submitted, thank you")
        }
      }
    )
  })
}

export default class SubscriptionConnector {
  constructor() {
    this.db = mongoose.connection
    this.collection = "subscribers"

    this.db.on("error", () => {
      setTimeout(() => {
        mongoose.connect(dbURL).catch(err => {
          console.log(err)
        })
      }, 1000)
    })

    this.ready = () => {
      return this.db.readyState === 1
    }

    this.addSubscriber = async args => {
      if (!this.ready)
        return "Error: Database unreachable - please try again later."
      if (await checkForDuplicateEmail(this.db, this.collection, args))
        return "this Email address is already subscribed!"
      return dbInsertSubscriber(this.db, this.collection, args)
    }
  }
}
