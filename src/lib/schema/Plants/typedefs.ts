import { gql } from 'apollo-server-express'

const TypeDefs = gql`
  type Plant {
    _id: ID!
    humidity: String
    image: String
    name: String
    scientific_name: String
    soil: String
    sunlight: String
    temperature_in_celsius: String
    water: String
  }

  type Query {
    plants: String
  }
`

export default TypeDefs
