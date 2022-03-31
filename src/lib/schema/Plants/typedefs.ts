import { gql } from 'apollo-server-express'

const typeDefs = gql`
  type Plant {
    id: ID!
    humidity: String!
    image: String!
    name: String!
    scientific_name: String!
    soil: String!
    sunlight: String!
    temperature_in_celsius: String!
    water: String!
  }

  type Plants {
    result: [Plant!]!
    total: Int!
  }

  type Query {
    plants: Plants!
  }
`

export default typeDefs
