import { Plant } from '../../types'

export interface Args {
  limit: number
}

export interface Data {
  result: Plant[]
  total: number
}
