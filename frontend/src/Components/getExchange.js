import React, {useEffect, useState} from 'react'
import {useQuery, gql} from '@apollo/client'
import {LOAD_EXCHANGE} from '../GraphQL/Queries'
import { validate } from 'graphql'

function GetExchange({match}) {
    
    const {error, loading, data} = useQuery(LOAD_EXCHANGE, {
        variables: { id : match.params.id },
      });
    const [exchange,setExchange] = useState ([])
    useEffect (()=> {
        if (data) {
            console.log(data.cryptoStockExchange)
            
        setExchange(data.cryptoStockExchange)

        }

    }, [data]);
    
    return(
        <div>
            <tbody>
            <tr>
              <th> 
                {exchange.name}
                </th> 
                <th> 
                {exchange.website}
                </th> 
                <th> 
                {exchange.volume_1hrs_usd}
                </th> 
                <th> 
                {exchange.volume_1day_usd}
                </th> 
                <th> 
                {exchange.volume_1mth_usd}
                </th> 
            
            </tr>
            </tbody>
        </div>
    )
}
export default GetExchange