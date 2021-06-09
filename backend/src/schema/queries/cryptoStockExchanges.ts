import {
    GraphQLNonNull,
} from 'graphql';

import { cryptoStockExchangesSelectionType } from '../types/cryptoStockExchangesSelection';
import { filterInputType } from '../types/filterInput';
import { filterItems } from '../../inMemoryDb';

export default {
    name: 'cryptoStockExchanges',
    type: new GraphQLNonNull(cryptoStockExchangesSelectionType),
    args: {
        filter: {
            name: 'filter',
            type: new GraphQLNonNull(filterInputType),
        },
    },
    resolve: async (
        _,
        {
            filter,
        },
    ) => (
        filterItems(filter)
    ),
};
