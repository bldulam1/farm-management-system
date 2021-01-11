import { ApolloServer } from 'apollo-server-lambda';
import mongoose from 'mongoose';
import resolvers from './resolvers';
import typeDefs from './schema/query.schema';

const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
  playground: true,
});

const dbUrl = process.env.DB_URL || 'mongodb://localhost:27017';

mongoose.connect(dbUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

exports.handler = server.createHandler();
