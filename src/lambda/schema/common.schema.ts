import { gql } from 'apollo-server-lambda';

export default gql`
  scalar DateTime

  type WeightRecord {
    id: ID!
    weight: Float!
    date: DateTime!
    recorderId: ID!
  }

  type VaccinationRecord {
    id: ID!
    vaccineName: String!
    quantity: Float!
    unit: String!
  }

  type BirthRecord {
    id: ID!
    sowId: ID!
    boarId: ID!
    littersCount: Int!
    tags: [ID!]!
    attendantId: ID!
  }

  type HealthRecord {
    id: ID!
    date: DateTime!
    condition: String!
  }
`;
