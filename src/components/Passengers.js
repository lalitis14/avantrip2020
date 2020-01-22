import React from 'react';
import ReactModal from 'react-modal';
import './styles/Passengers.css'
import { FaPlus, FaMinus } from 'react-icons/fa';

class Passengers extends React.Component {
     constructor(props) {
        super(props);
        this.state = {
            data:{
                    ticketClass: 'Económica',
                    nPassengers: 2,
                },
        };

      }
    
      ticketClassChange(newValue){
          this.setState({
            data:{
                ... this.state.data,
                ticketClass: newValue,
            }
            });
      };

      nPassengersChange(newValue){
        if (newValue === -1 && this.state.data.nPassengers === 1){
            this.setState({
            data:{
                ... this.state.data,
                    nPassengers: 1,
                }
            });
        } else { 
        this.setState({
          data:{
             ... this.state.data,
              nPassengers: this.state.data.nPassengers + newValue,
           
            }
          });
        }
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
                    {this.state.data.nPassengers + ' pasajeros, ' + this.state.data.ticketClass}
                </span>
            </div>

            <ReactModal
                className={'Passengers__Modal'} 
                overlayclassName={'Passengers__Modal__overlay'} 
                isOpen={this.state.show}
                >
                <div className="row py-2">
                    <h5 className="Modal__title col-12 col-md-4">Clase</h5>
                    <div className="Class__selector col-12 col-md-8">
                            <label className="Class__option" onClick={this.ticketClassChange.bind(this, 'Económica')}>
                                Económica
                                <span className="col-md-2">
                                    <input name="ticketClass" type="hidden" value="Económica"></input>
                                </span>
                            </label>
                            <label className="Class__option" onClick={this.ticketClassChange.bind(this, 'Premium')}>
                                Premium
                                <span className="col-md-2">
                                    <input name="ticketClass" type="hidden" value="Premium"></input>
                                </span>
                            </label>
                            <label className="Class__option" onClick={this.ticketClassChange.bind(this, 'Business')}>
                                Business
                                <span className=" col-md-2">
                                    <input name="ticketClass" type="hidden" value="Business"></input>
                                </span>
                            </label>
                    </div>
                </div>

                <div className="row py-2">
                    <h5 className="Modal__title col-12 col-md-4">Pasajeros</h5>
                    <span className="col-1 offset-md-2 text-right icons"
                        onClick={this.nPassengersChange.bind(this, -1)}
                            ><FaMinus /></span>
                    <p className="col-2 text-center">{this.state.data.nPassengers}</p>
                    <span className="col-1 text-left icons"
                        onClick={this.nPassengersChange.bind(this, 1)}
                    ><FaPlus /></span>
                </div>

                <div className="row">
                    <div className="col-2 offset-8 btn btn-primary" onClick={this.showModal}>
                        Ok
                    </div>
                </div>
            </ReactModal>
        </div>
    )
  }
}

export default Passengers;

