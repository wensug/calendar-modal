import React from "react";
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import "./Checkout.css";


class Checkout extends React.Component {
  constructor() {
    super();
    this.state = {
      startDate: new Date('08/14/2019'),
      datePickerIsOpen: false
    };
  }

  handleChangeDate(date) {
      this.setState({
          startDate: date
      });
  }

  openDatePicker(){
      this.setState({
          datePickerIsOpen: !this.state.datePickerIsOpen
      });
  }

  
  render() {
    return (
      <div className="section">
        <div className="row">
            <h3 className="row">Checkout</h3>
          <div className="card-checkout">
            <div>
              <h1>Choose your delivery day </h1>
              <p className='tag-free-delivery'>Delivery is always free</p>
            </div>
            <div className="button">
              <button onClick={() => this.openDatePicker()}>Change</button>
              <DatePicker
                selected={this.state.startDate}
                onChange={(e) => this.handleChangeDate(e)}
                open={this.state.datePickerIsOpen}
                onClickOutside={() => this.openDatePicker()}
                dateFormat='dd'
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Checkout;
