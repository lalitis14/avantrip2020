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
                    <div className="input-group mb-3">
                        <Origin />
                        <span className="placeholder floating-label-origin">origen</span>
                        <Destination/>
                        <span className="placeholder floating-label-destination">destino</span>
                        <DatePicker/>
                        <span className="placeholder floating-label-dates">fechas</span>
                        <Passengers />
                        <span className="placeholder floating-label-passengers">pasajeros y clase</span>
                        <div className="input-group-append">
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