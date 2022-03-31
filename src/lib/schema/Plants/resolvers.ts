/* eslint-disable no-underscore-dangle */
import { IResolvers } from 'graphql-tools'
import { Database, Plant } from '../../types'
import { Data } from './types'

const resolvers: IResolvers = {
  Query: {
    plants: async (
      _root: undefined,
      _args: Record<string, unknown>,
      { db }: { db: Database; req: Request }
    ): Promise<Data> => {
      try {
        const query = {}
        const data: Data = {
          result: [],
          total: 0,
        }

        const cursor = db.plants.find(query)

        data.result = await cursor.toArray()
        data.total = await db.plants.countDocuments()

        return data
      } catch (error) {
        throw new Error(`Failed to query plants : ${error}`)
      }
    },
  },
  Plant: {
    id: (plant: Plant): string => plant._id.toString(),
  },
}

export default resolvers
