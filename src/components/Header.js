import React from 'react';
import './styles/header.css'
import DatePicker from '../components/DatePicker';
import Origin from '../components/Origin';
import Destination from '../components/Destination';
import Passengers from '../components/Passengers';
import { FaSearch } from 'react-icons/fa';



class Header extends React.Component {
    render(){
    return(
      <header className="Header__back">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-12">
                    <p className="Header__subtitle">Escapate a</p>
                </div>
                <div className="col-12">
                    <h1 className="Header__title">nueva york</h1>    
                </div>
                <div className="col-12 text-center">
                    <span className="Header__options">ida y vuelta</span>
                    <span className="Header__options">solo ida</span>
                    <span className="Header__options">multidestino</span>
                </div>
            </div>
            <div className="container">
                <div className="Header__search row">
                    <div class="input-group mb-3">
                        <Origin />
                        <Destination/>
                        <DatePicker/>
                        <input type="text" className="form-control" aria-label="passengersNbr"></input>
                        {/* <Passengers/> */}
                        <div class="input-group-append">
                                <span className="input-group-text" id="searchButton"><FaSearch /></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </header>
    )
  }
}

export default Header;