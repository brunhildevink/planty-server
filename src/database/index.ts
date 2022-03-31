import { MongoClient } from 'mongodb'
import dotenv from 'dotenv'
import { Database, Plant } from '../lib/types'

dotenv.config()

const uri = `mongodb+srv://${process.env.USER_USERNAME}:${process.env.USER_PASSWORD}@${process.env.CLUSTER}.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`

const connectDatabase = async (): Promise<Database> => {
  const client = new MongoClient(uri)

  try {
    await client.connect()

    const db = client.db('Main')

    return {
      plants: db.collection<Plant>('plants'),
    }
  } catch (error) {
    throw new Error(
      `Something happened while connecting the database: ${error}`
    )
  } finally {
    await client.close()
  }
}

export default connectDatabase
