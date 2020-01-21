import React from 'react';
import ReactModal from 'react-modal';
import './styles/Passengers.css'
import { FaPlus, FaMinus } from 'react-icons/fa';

class Passengers extends React.Component {
     constructor(props) {
        super(props);
        this.state = {
                ticketClass: 'Económica',
                nPassengers: 2,
        };
      }
    
      classChange(newValue){
          this.setState({
            ticketClass: newValue,
            });
      };

      nPassengersChange(newValue){
        this.setState({
          nPassengers: this.state.nPassengers + newValue,
          });
    };

      showModal = () => {
        this.setState({
            ...this.state,
            show: !this.state.show
        })
      }
   
    render(){
    return(
        <div>
            <div onClick={this.showModal} className="form-control" aria-label="passengersAndClass" id="passengersInput">
                <span id="selectInput"> 
                    {this.state.nPassengers + ' pasajeros, ' + this.state.ticketClass}
                </span>
            </div>

            <ReactModal
                className={'Passengers__Modal'} 
                overlayclassName={'Passengers__Modal__overlay'} 
                isOpen={this.state.show}
                >
                <div className="row py-2">
                    <h5 className="Modal__title col-12 col-md-6">Clase</h5>
                    <div className="Class__selector col-12 col-md-6">
                        <span 
                            onClick={this.classChange.bind(this, 'Económica')}
                            className="Class__option col-md-2"
                            >Económica</span>
                        <span className="Class__option col-md-2"
                            onClick={this.classChange.bind(this, 'Business')}
                            >Business</span>
                        <span className="Class__option  col-md-2"
                            onClick={this.classChange.bind(this, 'Premium')}
                            >Premium</span>
                    </div>
                </div>

                <div className="row py-2">
                    <h5 className="Modal__title col-12 col-md-6">Pasajeros</h5>
                    <span className="col-1 offset-md-1 text-right icons"
                        onClick={this.nPassengersChange.bind(this, -1)}
                            ><FaMinus /></span>
                    <p className="col-2 text-center">{this.state.nPassengers}</p>
                    <span className="col-1 text-left icons"
                        onClick={this.nPassengersChange.bind(this, 1)}
                    ><FaPlus /></span>
                </div>

                <div className="row">
                    <div className="col-2 offset-9 btn btn-primary" onClick={this.showModal}>
                        Ok
                    </div>
                </div>
            </ReactModal>
        </div>
    )
  }
}

export default Passengers;

