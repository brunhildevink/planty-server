import { Collection } from 'mongodb'

export interface Plant {
  _id: string
  humidity: string
  image: string
  name: string
  scientific_name: string
  soil: string
  sunlight: string
  temperature_in_celsius: string
  water: string
}

export interface Database {
  plants: Collection<Plant>
}
