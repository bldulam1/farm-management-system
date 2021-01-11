import { Resolvers, Sow } from '../../generated/types.d';

const sows: Sow[] = [];

const resolvers: Resolvers = {
  Query: {
    sows: () => sows,
  },
};

export default resolvers;
