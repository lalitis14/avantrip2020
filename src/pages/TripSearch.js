import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import IdaYVuelta from './idayvuelta.js';

function App() {
      return(
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={IdaYVuelta} />
          </Switch>
      </BrowserRouter>
        );
    }
  
  export default App;
  
