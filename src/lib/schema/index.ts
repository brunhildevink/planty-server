import { merge } from 'lodash'
import Plants from './Plants'

const resolvers = merge(Plants.resolvers)

const typeDefs = merge(Plants.typeDefs)

export { resolvers, typeDefs }
