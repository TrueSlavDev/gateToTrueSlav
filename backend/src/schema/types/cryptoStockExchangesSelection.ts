import {
    GraphQLObjectType,
    GraphQLNonNull,
    GraphQLList,
} from 'graphql';

import { cryptoStockExchangeType } from './cryptoStockExchange';
import { filterType } from './filter';

export const cryptoStockExchangesSelectionType = new GraphQLObjectType({
    name: 'CryptoStockExchangesSelection',
    fields: () => ({
        cryptoStockExchanges: {
            type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(cryptoStockExchangeType))),
        },
        filter: {
            type: new GraphQLNonNull(filterType),
        },
    }),
});
