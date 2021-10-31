const { WebSocketServer } = require("ws"); // yarn add ws
const { useServer } = require("graphql-ws/lib/use/ws");
const { buildSchema } = require("graphql");

// Construct a schema, using GraphQL schema language
const schema = buildSchema(`
  type Query {
    hello: String
  }
  type Subscription {
    greetings: String
  }
`);

// The roots provide resolvers for each GraphQL operation
const roots = {
  query: {
    hello: () => "Hello World!",
  },
  subscription: {
    greetings: async function* sayHiIn5Languages() {
      for (const hi of ["Hi", "Bonjour", "Hola", "Ciao", "Zdravo"]) {
        yield { greetings: hi };
      }
    },
  },
};

// import ws from 'ws'; yarn add ws@7
// const WebSocketServer = ws.Server;

const server = new WebSocketServer({
  port: 5000,
  path: "/graphql",
});

console.log(
  useServer(
    // from the previous step
    { schema, roots },
    server
  )
);

console.log("Listening to port 5000");
