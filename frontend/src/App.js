import "./App.css";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import GetExchanges from "./Components/getExchanges";
import GetExchange from "./Components/getExchange";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


const errorLink = onError(({ graphqlErrors, networkError }) => {
  if (graphqlErrors) {
    graphqlErrors.map(({ message, location, path }) => {
      alert(`Graphql error ${message}`);
    });
  }
});

const link = from([
  errorLink,
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
    <ApolloProvider client={client}>
      
      
      <Route path="/:id" component={GetExchange} />
      <Route path="/" exact component={GetExchanges} />
      
      
    </ApolloProvider>
    </Router>
  );
}

export default App;