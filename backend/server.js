const express = require('express');
const models = require('./models/index');
const { typeDefs, resolvers } = require('./schemas');

const { ApolloServer } = require('apollo-server-express');
const connectDB = require('./config/connection');

const PORT = process.env.PORT || 4000;
connectDB();
async function startApolloServer() {
  const app = express();

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: { models },
  });
  await server.start();
  server.applyMiddleware({ app });
  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());
  app.listen(PORT, () => {
    console.log(`Server running at http://localhost:4000${server.graphqlPath}`);
  });
}

startApolloServer();
