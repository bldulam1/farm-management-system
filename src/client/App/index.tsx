import { ThemeProvider } from '@material-ui/core/styles';
import { InMemoryCache } from 'apollo-cache-inmemory';
import ApolloClient from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import React, { useState } from 'react';
import ApolloProvider from 'react-apollo/ApolloProvider';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import theme from '../theme/theme';
import { AppContext, AppStateInterface, defaultAppState } from './App.Context';
import Cattle from './pages/Cattle';
import LandingPage from './pages/LandingPage';
import Poultry from './pages/Poultry';
import Swine from './pages/Swine';

const cache = new InMemoryCache();
const link = new HttpLink({
  uri: '/.netlify/functions/graphql',
});
const client = new ApolloClient({ cache, link });

export default function () {
  const [appState, setAppState] = useState<AppStateInterface>(defaultAppState);

  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <AppContext.Provider value={{ state: appState, setState: setAppState }}>
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
              <Route path="/cattle">
                <Cattle />
              </Route>
              <Route path="/poultry">
                <Poultry />
              </Route>
            </Switch>
          </BrowserRouter>
        </AppContext.Provider>
      </ThemeProvider>
    </ApolloProvider>
  );
}
