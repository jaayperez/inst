import 'reflect-metadata';
import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { buildSchema } from 'type-graphql';
import ProductResolver from './services/product/product.resolver';
import IntegrationResolver from './services/integration/integration.resolver';
import ProfileResolver from './services/profile/profile.resolver';
import DashboardResolver from './services/dashboard/dashboard.resolver';
import InvoiceResolver from './services/invoice/invoice.resolver';

(async () => {
  const app = express();

  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [
        ProductResolver,
        IntegrationResolver,
        ProfileResolver,
        DashboardResolver,
        InvoiceResolver,
      ],
      validate: false,
    }),
    introspection: true, // enables introspection of the schema
    playground: true, // enables the actual playground
    // context: ({ req, res }) => ({ req, res }),
  });

  const port = process.env.PORT || 4000;
  const path = '/graphql';

  apolloServer.applyMiddleware({ app, path, cors: true });
  app.listen(port, () => {
    console.log(`server started at http://localhost:${port}/graphql`);
  });
})();
