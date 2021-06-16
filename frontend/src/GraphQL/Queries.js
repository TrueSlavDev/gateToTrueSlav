import {gql} from '@apollo/client'
export const LOAD_EXCHANGES = gql`

query {cryptoStockExchanges 
    {
      cryptoStockExchanges 
      {exchange_id
      
      name
      
      volume_1hrs_usd
      volume_1day_usd
      volume_1mth_usd}
     }
    }
    `

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