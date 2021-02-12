import ReactDOM from 'react-dom';
import App from './App';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

/* 
  Connecting to GraphQL endpoint: https://api.github.com/graphql
  As Github has recommended using GraphQL APIs for fetching data, we are relying on GraphQL.
*/
const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: 'https://api.github.com/graphql',
  headers: {
    /* 
      Hardcoding authorization header here
      Access provided: Read public repositories
    */
    authorization: `Bearer 27b49d0616fbebd06f099c254dd8b65855a2d715`,
  },
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);
