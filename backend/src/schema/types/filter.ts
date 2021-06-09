import {
    GraphQLObjectType,
    GraphQLInt,
    GraphQLString,
} from 'graphql';

export const filterType = new GraphQLObjectType({
    name: 'Filter',
    fields: () => ({
        filtrable: {
            type: new GraphQLObjectType({
                name: 'Filtrable',
                fields: () => ({
                    name: { type: GraphQLString },
                }),
            }),
        },
        limit: {
            type: GraphQLInt,
        },
        offset: {
            type: GraphQLInt,
        },
        count: {
            type: GraphQLInt,
        },
    }),
});
