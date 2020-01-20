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
      <div className="Header__back">
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
                <div className="Header__search input-group">
                        <div id="origin"><Origin /></div>
                        <span className="placeholder floating-label-origin">origen</span>
                        <div id="destination"><Destination/></div>
                        <span className="placeholder floating-label-destination">destino</span>
                        <div id="datepicker"><DatePicker/></div>
                        <span className="placeholder floating-label-dates">fechas</span>
                        <div id="passengers"><Passengers /></div>
                        <span className="placeholder floating-label-passengers">pasajeros y clase</span>
                        <div className="input-group-append">
                            <span className="input-group-text" id="searchButton"><FaSearch /></span>
                        </div>
                            <span id="searchButtonXL">BUSCAR VUELOS</span>
                </div>
            </div>
        </div>
      </div>
    )
  }
}

export default Header;