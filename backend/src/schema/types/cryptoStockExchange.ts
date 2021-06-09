import {
    GraphQLObjectType,
    GraphQLInt,
    GraphQLID,
    GraphQLString,
    GraphQLFloat,
} from 'graphql';

export const cryptoStockExchangeType = new GraphQLObjectType({
    name: 'CryptoStockExchange',
    fields: () => ({
        exchange_id: {
            type: GraphQLID,
        },
        website: {
            type: GraphQLString,
        },
        name: {
            type: GraphQLString,
        },
        data_start: {
            type: GraphQLString,
        },
        data_end: {
            type: GraphQLString,
        },
        data_symbols_count: {
            type: GraphQLInt,
        },
        volume_1hrs_usd: {
            type: GraphQLFloat,
        },
        volume_1day_usd: {
            type: GraphQLFloat,
        },
        volume_1mth_usd: {
            type: GraphQLFloat,
        },
    }),
});
