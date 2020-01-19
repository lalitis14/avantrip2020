import React from 'react';
import Header from '../components/Header';
import Result from '../components/Result';
import './TripSearch.css';

class Search extends React.Component {
    render() {
      return(
        <div className="TripSearch__body">
          <Header />
          <Result />
        </div>
      );
    }
  }
  
  export default Search;
  
