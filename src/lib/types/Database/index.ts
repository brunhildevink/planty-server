import { Collection } from 'mongodb'
import { Plant } from '../Plant'

export interface Database {
  plants: Collection<Plant>
}
