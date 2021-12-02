import React from 'react';
import { render } from 'react-dom';
import App from './App';
import { ApolloClient, InMemoryCache, from, HttpLink, ApolloProvider } from '@apollo/client'

const httpLink = new HttpLink({
  uri: 'http://localhost:4000', // requests to this endpoint
});

const client = new ApolloClient({
  link:  httpLink,
  cache: new InMemoryCache()
});

render(
  <React.StrictMode>
     <ApolloProvider client={client}>
        <App />
     </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
)