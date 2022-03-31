import express, { Application } from 'express'
import { ApolloServer } from 'apollo-server-express'
import dotenv from 'dotenv'
import connectDatabase from './database'
import { resolvers, typeDefs } from './graphql/schema'

dotenv.config()

const mount = async (app: Application) => {
  const db = await connectDatabase()

  const server = new ApolloServer({
    resolvers,
    typeDefs,
    context: ({ req, res }) => ({ db, req, res }),
  })

  await server.start()

  server.applyMiddleware({ app, path: '/' })

  app.use(express.json())

  app.listen({ port: process.env.PORT }, () =>
    console.log(
      `🌱 planty app ready to grow some leaves on http://localhost:${process.env.PORT}${server.graphqlPath} 🌻`
    )
  )
}

mount(express())
