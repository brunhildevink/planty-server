import { Database } from '../../types'
import { Data } from './types'

const resolvers = {
  Query: {
    plants: async (
      _root: undefined,
      { db }: { db: Database }
    ): Promise<Data> => {
      try {
        const data: Data = {
          result: [],
          total: 0,
        }

        let cursor = db.plants.find({})

        cursor = cursor.sort({ scientific_name: 1 })

        data.result = await cursor.toArray()
        data.total = await cursor.count()

        return data
      } catch (error) {
        throw new Error(`Failed to query plants: ${error}`)
      }
    },
  },
}

export default resolvers
