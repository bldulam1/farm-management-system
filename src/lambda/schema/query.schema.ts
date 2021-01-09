import { gql } from 'apollo-server-lambda';

const typeDefs = gql`
  type Query {
    hello: String
    sows(limit: Int, offset: Int): [Sow!]!
  }
`;

export default typeDefs;
