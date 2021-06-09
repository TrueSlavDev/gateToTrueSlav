import {
    GraphQLInputObjectType,
    GraphQLString,
    GraphQLInt,
} from 'graphql';

export const filterInputType = new GraphQLInputObjectType({
    name: 'FilterInput',
    fields: () => ({
        filtrable: {
            type: new GraphQLInputObjectType({
                name: 'FiltrableInput',
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
    }),
});
