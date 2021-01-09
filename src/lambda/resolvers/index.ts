import { Sow, Resolvers } from '../../generated/types.d';

const sows: Sow[] = [];

const resolvers: Resolvers = {
  Query: {
    hello: () => 'Test',
    sows: () => sows,
  },
};

export default resolvers;
