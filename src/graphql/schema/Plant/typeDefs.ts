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
    temperature_in_celsius: String
    water: String!
  }

  type PlantCollection {
    result: [Plant!]!
    total: Int!
  }

  type Query {
    plant(id: String!): Plant
    plants(limit: Int, page: Int): PlantCollection!
  }
`

export default typeDefs
