import React, {useEffect, useState} from 'react'
import {useQuery, gql} from '@apollo/client'
import {LOAD_EXCHANGES} from '../GraphQL/Queries'
import { validate } from 'graphql'
import {Link} from 'react-router-dom';

function GetExchanges() {
    const {error, loading, data} = useQuery(LOAD_EXCHANGES)
    const [exchanges,setExchanges] = useState ([])
    useEffect (()=> {
        if (data) {
            console.log(data)
        setExchanges(data.cryptoStockExchanges.cryptoStockExchanges)
        }

    }, [data]);
    
    return(
        <tbody>
        <div>
            
            {exchanges.map((val) => {
            return ( 
            <tr key={val.exchange_id}> 
            <td> <Link key={val.exchange_id} to={val.exchange_id} >{val.name}</Link> </td>
            <td>{val.volume_1hrs_usd} </td>
            <td>{val.volume_1day_usd} </td>
            <td>{val.volume_1mth_usd} </td>
            
            
            
            </tr>)
            ; })}
        </div>
        </tbody>

    )
}

export default GetExchanges