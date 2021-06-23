import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from "@apollo/client";


import './App.css';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {ExchangeTable} from "./Components/ExchangeTable"; 
import {SingleExchange} from "./Components/SingleExchange";





const link = from([
  
  new HttpLink({ uri: "http://localhost:4000/graphql" ,
  
}),
  
]);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
});



function App() {
  return (
    <Router>
      <Switch>
        <ApolloProvider client={client}>
          <Route path="/" exact component={ExchangeTable} />
          <Route path="/:id" component={SingleExchange} />
        </ApolloProvider>
      </Switch>
    </Router>
  );
}

export default App;
//
//