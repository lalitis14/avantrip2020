import React from 'react';
import Header from '../components/Header';
import Result from '../components/Result';
import './idayvuelta.css';

class IdaYVuelta extends React.Component {
    render() {
      return(
        <div className="TripSearch__body">
          <Header opened={false}>
            <Result />
          </Header>
        </div>
      );
    }
  }
  
  export default IdaYVuelta;
  
