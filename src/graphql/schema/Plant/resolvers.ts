import { ObjectId } from 'mongodb'
import {
  Database,
  Plant,
  PlantArgs,
  PlantsArgs,
  PlantsData,
} from '../../../lib/types'

const resolvers = {
  Query: {
    plant: async (
      _root: undefined,
      { id }: PlantArgs,
      { db }: { db: Database }
    ): Promise<Plant> => {
      try {
        const cursor = await db.plants.findOne({ _id: new ObjectId(id) })

        if (!cursor) {
          throw new Error('plant cannot be found')
        }

        return cursor
      } catch (error) {
        throw new Error(`Failed to query plant: ${error}`)
      }
    },
    plants: async (
      _root: undefined,
      { limit, page }: PlantsArgs,
      { db }: { db: Database }
    ): Promise<PlantsData> => {
      try {
        const data: PlantsData = {
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
