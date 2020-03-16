
import 'reflect-metadata';
import * as path from 'path';

import { ApolloServer } from 'apollo-server';
import { buildSchema } from 'type-graphql';
import { Container } from 'typedi';

import { authChecker, Context } from './authorization';
import { AlertsResolver } from './alerts';
import { ArticleResolver } from './articles';
import { ParksResolver } from './parks';

const DEFAULT_PORT = 4000;
const PORT = process.env.PORT || DEFAULT_PORT;

async function bootstrap() {
  // build TypeGraphQL executable schema
  const schema = await buildSchema({
    authChecker,
    container: Container,
    resolvers: [ArticleResolver, AlertsResolver, ParksResolver],
    emitSchemaFile: path.resolve(__dirname, 'schema.gql'),
  });

  // Create GraphQL server
  const server = new ApolloServer({
    schema,

    // enable GraphQL Playground
    playground: true,
    context: ({ req }): Context => ({ req }),
  });

  // Start the server
  const { url } = await server.listen(PORT);
  console.log(`Server is running, GraphQL Playground available at ${url}`);
}

bootstrap();