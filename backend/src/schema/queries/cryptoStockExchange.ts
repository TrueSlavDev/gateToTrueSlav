import {
    GraphQLID,
    GraphQLNonNull,
} from 'graphql';

import { cryptoStockExchangeType } from '../types/cryptoStockExchange';
import { findOne } from '../../inMemoryDb';

export default {
    name: 'cryptoStockExchange',
    type: cryptoStockExchangeType,
    args: {
        id: {
            name: 'id',
            type: new GraphQLNonNull(GraphQLID),
        },
    },
    resolve: async (
        _,
        {
            id,
        },
    ) => (
        findOne(id)
    ),
};
