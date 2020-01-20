import React from 'react';
import HeaderIV from './idayvuelta.js';
import HeaderAndResultIV from './SearchResult.js';
import './TripSearch.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


class Search extends React.Component {
    render() {
      return(
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={HeaderIV} />
            <Route exact path="/SearchResult" component={HeaderAndResultIV} />
          </Switch>
      </BrowserRouter>
        );
    }
  }
  
  export default Search;
  
