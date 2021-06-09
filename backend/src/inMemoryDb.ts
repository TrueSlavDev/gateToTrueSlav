import cryptoStockExchanges from './cryptoStockExchanges.json';

interface filterInterface {
    filtrable: {
        name: string,
    },
    limit: number,
    offset: number,
};

export const findOne = (id: string) => {
    for (let i = 0; i < cryptoStockExchanges.length; i++) {
        if (cryptoStockExchanges[i].exchange_id === id) {
            return cryptoStockExchanges[i];
        }
    }
    return null;
}

export const filterItems = (filter: filterInterface) => {
    const { filtrable, limit = 10, offset = 0 } = filter;
    const name = filtrable ? filtrable && filtrable.name : undefined;
    const filteredCryptoStockExchanges: any = [];
    for (let i = 0; i < cryptoStockExchanges.length; i++) {
        if (name) {
            cryptoStockExchanges[i].name.toLocaleLowerCase().includes(name.toLocaleLowerCase()) && filteredCryptoStockExchanges.push(cryptoStockExchanges[i]);
        } else {
            filteredCryptoStockExchanges.push(cryptoStockExchanges[i]);
        }
    }
    const count = filteredCryptoStockExchanges.length;
    return { filter: { filtrable: filtrable ? filtrable : {}, limit, offset, count }, cryptoStockExchanges: filteredCryptoStockExchanges.slice(offset, offset + limit) };
};