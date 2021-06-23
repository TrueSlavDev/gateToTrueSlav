import React from 'react';
import { useQuery, gql } from '@apollo/client';


export const GET_EXCHANGES = gql`

query ($name : String, $limit : Int, $offset: Int) 
	{cryptoStockExchanges (filter: {filtrable:{name: $name} limit: $limit offset: $offset } )
{
  cryptoStockExchanges
  { name
    exchange_id
    volume_1hrs_usd
    volume_1day_usd
    volume_1mth_usd
  }
  
    filter{filtrable {name} limit count offset}
  }
}

    `;

    export const LOAD_EXCHANGE = gql`

    query cryptoStockExchange($id: ID!) {
      
      cryptoStockExchange(id: $id)
      {
          
          exchange_id
          website
          name
          data_start
          data_end
          data_symbols_count
          volume_1hrs_usd
          volume_1day_usd
          volume_1mth_usd
          
      }
    }  
    
        `