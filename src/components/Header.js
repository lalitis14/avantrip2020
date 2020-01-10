import React from 'react';
import './styles/header.css'

class Header extends React.Component {
  render(){
    return(
      <div className="Header__back">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-12 Header__subtitle">Escapate a</div>
                <div className="col-12 Header__title">nueva york</div>
                <div className="col-12 text-center">
                    <span className="Header__options">ida y vuelta</span>
                    <span className="Header__options">solo ida</span>
                    <span className="Header__options">multidestino</span>
                </div>
                <div className="col-10 offset-1 col-md-8 offset-md-2 text-white text-center py-5">BUSCADOR</div>
            </div>
        </div>
      </div>
    )
  }
}

export default Header;