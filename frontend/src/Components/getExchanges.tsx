
import React, {useEffect, useState} from 'react'
import {useQuery, gql} from '@apollo/client'
import {GET_EXCHANGES} from '../GraphQL/Queries'
import { validate } from 'graphql'


interface CryptoExchanges {
    
    exchange_id: string;
    name: string;
    volume_1hrs_usd: number;
    volume_1mth_usd: number;
  }
  
 

  interface ExchangesData {
    cryptoStockExchanges: 
    { cryptoStockExchanges: 
    CryptoExchanges[];
        }
  }
 
  interface ExchangesVars {
    limit: number;
  }
  

export function ExchangeData() {
    const { loading, data } = useQuery<ExchangesData , ExchangesVars>(
      GET_EXCHANGES,
      { variables: { limit: 50 } }
      
    );
   
    
    return (
      <div>
        <h3>Available Inventory</h3>
        {loading ? (
          <p>Loading ...</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Id</th>
              </tr>
            </thead>
            <tbody>
              {data && data.cryptoStockExchanges.cryptoStockExchanges.map(cryptoStockExchange => (
                <tr key={cryptoStockExchange.exchange_id}>
                  <td>{cryptoStockExchange.name}</td>
                  <td>{cryptoStockExchange.exchange_id}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    );
  }