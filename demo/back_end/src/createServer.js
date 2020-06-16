const { GraphQLServer } = require('graphql-yoga')
const Mutation = require('./resolvers/Mutation');
const Query = require('./resolvers/Query');
const db = require('./db');

// Create the GraphQL Yoga Server

function createServer() {
  return new GraphQLServer({
    typeDefs: 'src/schema.graphql',
    resolvers: {
      Mutation,
      Query,
    },
    resolverValidationOptions: {
      //nhan loi tu resolver
      requireResolversForResolveType: false,
    },
    //Contains custom data being passed through your resolver chain. 
    //This can be passed in as an object,
    // or as a Function with the signature (req: ContextParameters) => any **
    context: req => ({ ...req, db }),
  });
}

module.exports = createServer;
  