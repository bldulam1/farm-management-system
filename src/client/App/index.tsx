import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { ThemeProvider } from '@material-ui/core/styles';
import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import theme from '../theme/theme';
import { AppContext, AppStateInterface, defaultAppState } from './App.Context';
import Cattle from './pages/Cattle';
import LandingPage from './pages/LandingPage';
import Poultry from './pages/Poultry';
import Sow from './pages/Swine/Sow';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: '/.netlify/functions/graphql',
});

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

              <Route path="/swine/sow">
                <Sow />
              </Route>
              <Route path="/swine">
                <Sow />
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
