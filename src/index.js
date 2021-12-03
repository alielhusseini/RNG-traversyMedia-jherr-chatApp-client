import React from 'react';
import { render } from 'react-dom';
import App from './App';
import { ApolloClient, InMemoryCache, HttpLink, ApolloProvider } from '@apollo/client'
import { WebSocketLink } from '@apollo/client/link/ws'

const link = new WebSocketLink({
  uri: 'ws://localhost:4000',
  options: {
    reconnect:true
  }
})

// const httpLink = new HttpLink({
//   uri: 'http://localhost:4000', // requests to this endpoint
// });

const client = new ApolloClient({
  link,
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