
import {useQuery, gql} from '@apollo/client'
import {LOAD_EXCHANGE} from '../GraphQL/Queries'

import { RouteComponentProps, withRouter } from 'react-router';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';





  
  interface ExchangesData {
    cryptoStockExchange: 
    { 
        exchange_id: string;
        name: string;
        volume_1hrs_usd: number;
        volume_1day_usd: number;
        volume_1mth_usd: number;
        data_start: string;
        data_end: string;
        website: string;
        }
  }
 
  type TParams = { id: string };

  
 

export function SingleExchange({ match }: RouteComponentProps<TParams>) {
    
    const { loading, data } = useQuery<ExchangesData , TParams>(
      LOAD_EXCHANGE,
      { variables: { id: match.params.id } }
      
    )
console.log(data?.cryptoStockExchange);
return (
    <TableContainer component={Paper}>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell align="left">Exchange Name</TableCell>
          <TableCell align="left">Volume/Hour&nbsp;</TableCell>  
          <TableCell align="left">Volume/Day&nbsp;</TableCell>
          <TableCell align="left">Volume/Month&nbsp;</TableCell> 
          <TableCell align="left">Start of Data&nbsp;</TableCell>
          <TableCell align="left">End of Data&nbsp;</TableCell> 
          <TableCell align="left">Website&nbsp;</TableCell>
        </TableRow>
      </TableHead>
        <TableBody>
        {
          <TableRow >
            <TableCell align="left">{data?.cryptoStockExchange.name}</TableCell>
            <TableCell align="left">{data?.cryptoStockExchange.volume_1hrs_usd}</TableCell>
            <TableCell align="left">{data?.cryptoStockExchange.volume_1day_usd}</TableCell> 
            <TableCell align="left">{data?.cryptoStockExchange.volume_1mth_usd}</TableCell>
            <TableCell align="left">{data?.cryptoStockExchange.data_start}</TableCell> 
            <TableCell align="left">{data?.cryptoStockExchange.data_end}</TableCell>
            <TableCell align="left">{data?.cryptoStockExchange.website}</TableCell>  
          </TableRow>
        }
      </TableBody>
    </Table>
  </TableContainer>

  );
};