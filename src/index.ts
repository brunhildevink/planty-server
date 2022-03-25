import express, { Application } from 'express'
import dotenv from 'dotenv'
import connectDatabase from './database'

dotenv.config()

const mount = async (app: Application) => {
  const db = await connectDatabase()

  app.get('/', (_req, res) => {
    res.send('Hello World')
  })

  console.log(db.plants)

  app.listen(process.env.PORT)

  console.log(
    `🌱 planty app ready to grow some leaves on http://localhost:${process.env.PORT} 🌻`
  )
}

mount(express())
