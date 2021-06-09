require('dotenv').config();
import process from 'process';
import { createApolloServer } from './src/server';

const start = async () => {
  const apolloServer = await createApolloServer();
  apolloServer.listen(process.env.GRAPHQL_PORT, process.env.GRAPHQL_ENDPOINT, () => {
    console.log(`🚀 Apollo server ready on port ${process.env.GRAPHQL_PORT}`);
  });
};

start();
