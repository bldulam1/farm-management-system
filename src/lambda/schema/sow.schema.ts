import { gql } from 'apollo-server-lambda';

export default gql`
  type Sow {
    id: ID!
    tag: String!
    birthDate: DateTime!
    birthRecordIds: [ID!]!
    healthRecords: [HealthRecord!]!
    vaccinationRecords: [VaccinationRecord!]!
  }
`;
