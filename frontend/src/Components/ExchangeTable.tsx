import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {useQuery, gql} from '@apollo/client'
import {GET_EXCHANGES} from '../GraphQL/Queries'
import {Link} from 'react-router-dom';



const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});
interface CryptoExchanges {
    
    exchange_id: string;
    name: string;
    volume_1hrs_usd: number;
    volume_1day_usd: number;

    volume_1mth_usd: number;

  }
  
 

  interface ExchangesData {
    cryptoStockExchanges: 
    { cryptoStockExchanges: 
    CryptoExchanges[];
    
        }
        
  }
 
  interface ExchangesVars {
    name: string;
    limit: number;
    offset: number;
  }

  //data?.cryptoStockExchanges.cryptoStockExchanges;




export function ExchangeTable() {
  const classes = useStyles();
  const { loading, data } = useQuery<ExchangesData , ExchangesVars>(
    GET_EXCHANGES,
    { variables: {name: "Binance", limit: 50, offset: 0 } }
    
  );
  

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">Name</TableCell>
            <TableCell align="left">Volume(1h)&nbsp;</TableCell>  
            <TableCell align="left">Volume/(24h)&nbsp;</TableCell>
            <TableCell align="left">Volume/(1m)&nbsp;</TableCell> 
          </TableRow>
        </TableHead>
        <TableBody>
          {data && data.cryptoStockExchanges.cryptoStockExchanges.map((cryptoStockExchange) => (
            <TableRow key={cryptoStockExchange.exchange_id}>
              
              <TableCell align="left"><Link key={cryptoStockExchange.exchange_id} to={cryptoStockExchange.exchange_id} >{cryptoStockExchange.name}</Link></TableCell> 
              <TableCell align="left">{cryptoStockExchange.volume_1hrs_usd}</TableCell>
              <TableCell align="left">{cryptoStockExchange.volume_1day_usd}</TableCell>
              <TableCell align="left">{cryptoStockExchange.volume_1mth_usd}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}