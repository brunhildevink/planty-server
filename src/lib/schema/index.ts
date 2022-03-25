import { merge } from 'lodash'
import Plants from './Plants'

const resolvers = merge(Plants.Resolvers)

const typeDefs = merge(Plants.TypeDefs)

export { resolvers, typeDefs }
