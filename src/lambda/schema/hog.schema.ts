import { gql } from 'apollo-server-lambda';

export default gql`
  type Hog {
    id: ID!
    tag: String!
    birthRecordId: ID!
    parentSowId: ID
    parentBoarId: ID
    birthDate: DateTime!
    healthRecords: [HealthRecord!]!
    weightRecords: [WeightRecord!]!
    vaccinationRecords: [VaccinationRecord!]!
  }
`;
