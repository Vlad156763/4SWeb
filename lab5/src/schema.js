import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLNonNull
} from 'graphql';

const RootQueryType = new GraphQLObjectType({
  name: 'Query',
  fields: {
    sum: {
      type: new GraphQLNonNull(GraphQLInt),
      args: {
        a: { type: new GraphQLNonNull(GraphQLInt) },
        b: { type: new GraphQLNonNull(GraphQLInt) }
      },
      resolve: (_, { a, b }) => a + b
    }
  }
});

export const schema = new GraphQLSchema({
  query: RootQueryType
});

