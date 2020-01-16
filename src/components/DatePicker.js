import React from 'react';
import DateRangePicker from '@wojtekmaj/react-daterange-picker';
import './styles/DatePicker.css'


class DatePicker extends React.Component {
    state = {
        date: [new Date(), new Date()],
        }

    onChange = date => this.setState({ date })

    render(){
    return(
        <div className="form-control" aria-label="dates" id="dateRange">
            <DateRangePicker
                calendarIcon={null}
                clearIcon={null}
                required={true}
                onChange={this.onChange}
                value={this.state.date}
            />
        </div>
    )
  }
}

export default DatePicker;