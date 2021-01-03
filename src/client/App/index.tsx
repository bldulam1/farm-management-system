import { ThemeProvider } from '@material-ui/core/styles';
import { InMemoryCache } from 'apollo-cache-inmemory';
import ApolloClient from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import React from 'react';
import ApolloProvider from 'react-apollo/ApolloProvider';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import theme from '../theme/theme';
import LandingPage from './pages/LandingPage';
import Swine from './pages/Swine';

const cache = new InMemoryCache();
const link = new HttpLink({
  uri: '/.netlify/functions/graphql',
});
const client = new ApolloClient({ cache, link });

export default function () {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <LandingPage />
            </Route>
            <Route exact path="/home">
              <LandingPage />
            </Route>
            <Route path="/swine">
              <Swine />
            </Route>
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    </ApolloProvider>
  );
}
