import express, { Application, Request, Response } from 'express'
import { ApolloServer } from 'apollo-server-express'
import connectDatabase from './database'
import { resolvers, typeDefs } from './lib/schema'

const mount = async (app: Application) => {
  const db = await connectDatabase()

  const server = new ApolloServer({
    resolvers,
    typeDefs,
    context: (req: Request, res: Response) => ({ db, req, res }),
    introspection: false,
  })

  await server.start()

  server.applyMiddleware({ app, path: '/' })

  app.use(express.json({ limit: '2mb' }))
  app.use(express.static(`${__dirname}/client`))
  app.get('/*', (_req, res) => res.sendFile(`${__dirname}/client/index.html`))

  app.listen({ port: process.env.PORT }, () => {
    console.log(
      `🌱 planty app ready to grow some leaves on http://localhost:${process.env.PORT}${server.graphqlPath} 🌻`
    )
  })
}

mount(express())
