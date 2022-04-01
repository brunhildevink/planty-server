import { ObjectId } from 'mongodb'

export interface Plant {
  _id: ObjectId
  humidity: string
  image: string
  name: string
  scientific_name: string
  soil: string
  sunlight: string
  temperature_in_celsius: string
  water: string
}

export interface PlantArgs {
  id: string
}

export interface PlantsArgs {
  limit?: number
  page?: number
}

export interface PlantsData {
  result: Plant[]
  total: number
}
