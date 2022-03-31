import { MongoClient, ServerApiVersion } from 'mongodb'
import dotenv from 'dotenv'
import { Database } from '../lib/types'

dotenv.config()

const uri = `mongodb+srv://${process.env.USER_USERNAME}:${process.env.USER_PASSWORD}@${process.env.CLUSTER}.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`

const connectDatabase = async (): Promise<Database> => {
  const client = new MongoClient(uri, {
    serverApi: ServerApiVersion.v1,
  })

  await client.connect()

  const db = client.db('Main')

  return { plants: db.collection('plants') }
}

export default connectDatabase
