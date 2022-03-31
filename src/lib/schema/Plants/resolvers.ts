import { Database, Plant } from '../../types'

interface Args {
  limit?: number
  page?: number
}

interface Data {
  result: Plant[]
  total: number
}

const resolvers = {
  Query: {
    plants: async (
      _root: undefined,
      { limit, page }: Args,
      { db }: { db: Database }
    ): Promise<Data> => {
      try {
        const data: Data = {
          result: [],
          total: 0,
        }

        let cursor = db.plants.find({})

        cursor = cursor.sort({ scientific_name: 1 })

        if (limit) {
          cursor = cursor.limit(limit)
        }

        if (page) {
          cursor = cursor.skip(page > 0 ? (page - 1) * limit : 0)
        }

        data.result = await cursor.toArray()
        data.total = await db.plants.countDocuments()

        return data
      } catch (error) {
        throw new Error(`Failed to query plants: ${error}`)
      }
    },
  },
  Plant: {
    id: (plant: Plant) => plant._id.toString(),
  },
}

export default resolvers
