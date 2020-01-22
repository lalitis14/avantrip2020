import React from 'react';
import Autosuggest from 'react-autosuggest';
import './styles/theme.css'
import {Airports} from '../const/airports.js';


  const theme = {
    inputOpen: {
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 0
    },
    suggestionsContainer: {
      display: 'none'
    },
    suggestionsContainerOpen: {
      display: 'block',
      position: 'absolute',
      top: 75,
      width: 250,
      border: '1px solid #aaa',
      backgroundColor: '#fff',
      fontSize: 16,
      zIndex: 2
    },
    suggestionsList: {
      margin: 0,
      padding: 0,
      listStyleType: 'none',
    },
    suggestion: {
      cursor: 'pointer',
      padding: '10px 20px'
    },
    suggestionHighlighted: {
      backgroundColor: '#ddd'
    }
  };


const getSuggestions = value => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;
  
    return inputLength === 0 ? [] : Airports.filter(airport =>
      airport.name.toLowerCase().slice(0, inputLength) === inputValue
    );
  };
  
  const getSuggestionValue = suggestion => suggestion.name;
  
  const renderSuggestion = suggestion => (
    <div className="renderSuggestion">
      {suggestion.name}
    </div>
  );
  

class Destination extends React.Component {
    constructor() {
        super();
        this.state = {
          value: '',
          suggestions: []
        };
      }
    
      onChange = (event, { newValue }) => {
        this.setState({
          value: newValue
        });
      };
    
      onSuggestionsFetchRequested = ({ value }) => {
        this.setState({
          suggestions: getSuggestions(value)
        });
      };
    
      onSuggestionsClearRequested = () => {
        this.setState({
          suggestions: []
        });
      };
    render(){
        const { value, suggestions } = this.state;

        const inputProps = {
            value,
            onChange: this.onChange,
            id: 'destination'
          };

        return(
        <Autosuggest id="destination"
                theme={theme}
                suggestions={suggestions}
                onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                getSuggestionValue={getSuggestionValue}
                renderSuggestion={renderSuggestion}
                inputProps={inputProps}
            />
        );
    }
}

export default Destination;