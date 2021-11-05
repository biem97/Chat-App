// @ts-check
import express from "express";
import { createServer } from "http";

// Apollo Server
import apolloServer from "./graphql";

(async () => {
  const PORT = 5000;
  const app = express();
  const httpServer = createServer(app);

  const server = apolloServer(httpServer);

  await server.start();
  server.applyMiddleware({ app });

  httpServer.listen(PORT, () => {
    console.log(
      `🚀 Query endpoint ready at http://localhost:${PORT}${server.graphqlPath}`
    );
    console.log(
      `🚀 Subscription endpoint ready at ws://localhost:${PORT}${server.graphqlPath}`
    );
  });
})();
