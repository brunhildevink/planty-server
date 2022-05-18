// require('dotenv').config()

// import { ObjectId } from 'mongodb'
// import connectDatabase from '../../database'
// import { Plant } from "../types"

const seed = async () => {
  try {
    console.log(`[seed] : running...`)

    // const db = await connectDatabase()
    // const listings: Plant[] = [
    //   {
    //     _id: new ObjectId(),
    //     humidity: "",
    //     image: "",
    //     name: "",
    //     scientific_name: "",
    //     soil: "",
    //     sunlight: "",
    //     temperature_in_celsius: "",
    //     water: ""
    //   },
    // ]

    // listings.forEach(() => {
    //   await db.
    // })

    // for (const listing of listings) {
    //   await db.listings.insertOne(listing)
    // }

    console.log(`[seed] : success`)
  } catch (error) {
    throw new Error('failed to seed database')
  }
}

seed()
