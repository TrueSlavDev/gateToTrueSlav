import process from 'process';
import http from 'http';
import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import schema from './schema';
import cors from 'cors';

export const createApolloServer = async (): Promise<any> => {
  try {
    const app = express();
    app.use(cors({
      origin: [process.env.ORIGIN_FRONTEND || ''],
      credentials: true,
    }));
    const server = new ApolloServer({
      schema,
      introspection: true,
      playground: {
        settings: {
          'request.credentials': 'include',
        },
      },
    });
    server.applyMiddleware({ app, cors: false });
    const httpServer = http.createServer(app);
    return Promise.resolve(httpServer);
  } catch (err) {
    return Promise.reject(err);
  }
};
