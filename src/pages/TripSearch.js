import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import HeaderIV from './idayvuelta.js';
import HeaderAndResultIV from './SearchResult.js';

import './TripSearch.css';

function App() {
      return(
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={HeaderIV} />
            <Route exact path="/SearchResult" component={HeaderAndResultIV} />
          </Switch>
      </BrowserRouter>
        );
    }
  
  
  export default App;
  
