import React from 'react';
import './styles/header.css'
import DatePicker from '../components/DatePicker';
import Origin from '../components/Origin';
import Destination from '../components/Destination';
import Passengers from '../components/Passengers';
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';

class Header extends React.Component {
    constructor(props) {
		super(props);
		this.state = {
			opened: this.props.opened,
		};
		this.toggleBox = this.toggleBox.bind(this);
	}
  
	toggleBox() {
		this.setState({
			opened: true,
		});
    }
    
    render(){
        var { children } = this.props;
        const { opened } = this.state;

        return(
        <header>
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
                            <span className="Header__options">
                                <Link to="/" className="text-white">
                                ida y vuelta
                                </Link>
                            </span>
                            <span className="Header__options">
                                <Link to="/" className="text-white">
                                solo ida
                                </Link>
                            </span>
                            <span className="Header__options">
                                <Link to="/" className="text-white">
                                multidestino
                                </Link>
                            </span>
                        </div>
                    </div>
                    <div className="container">
                        <div className="Header__search input-group">
                                <div className="my-1 positionRelative" id="origin"><Origin />
                                    <span className="placeholder floating-label-origin">origen</span>
                                </div>
                                <div className="my-1 positionRelative" id="destination"><Destination/>
                                    <span className="placeholder floating-label-destination">destino</span>
                                </div>
                                <div className="my-1 positionRelative" id="datepicker"><DatePicker/>
                                    <span className="placeholder floating-label-dates">fechas</span>
                                </div>
                                <div className="my-1" id="passengers"><Passengers />
                                    <span className="placeholder floating-label-passengers">pasajeros y clase</span>
                                </div>
                                <div className="my-1 input-group-append" id="searchButton" onClick={this.toggleBox}>
                                    <FaSearch className="text-white" />
                                </div>
                                <div id="searchButtonXL" onClick={this.toggleBox}>
                                        BUSCAR VUELOS
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div>
                    {opened && (					
                        <div class="boxContent">
                            {children}
                        </div>
                    )}
                </div>
        </header>
)
  }
}

export default Header;