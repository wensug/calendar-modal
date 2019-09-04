import React from "react";
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import "./Checkout.css";
import Deliverybtn from '../deliverybtn/Deliverybtn'
// import { addMonths } from 'date-fns'


class Checkout extends React.Component {
  constructor() {
    super();
    this.state = {
      startDate: new Date('08/14/2019'),
    //   datePickerIsOpen: false
    };
  }

  handleChangeDate(date) {
      this.setState({
          startDate: date
      });
  }

//   openDatePicker(){
//       this.setState({
//           datePickerIsOpen: !this.state.datePickerIsOpen
//       });
//   }


            //   <button onClick={() => this.openDatePicker()}>Change</button>
  
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
              <DatePicker
                selected={this.state.startDate}
                onChange={(e) => this.handleChangeDate(e)}
                // open={this.state.datePickerIsOpen}
                // onClickOutside={() => this.openDatePicker()}
                customInput={<Deliverybtn/>}
                dateFormat='dd'
                // monthsShown={1}
                minDate={new Date('08/01/2019')}
                // maxDate={addMonths(new Date('07/31/2019'), 1)}

              />
            </div>
          </div>
        </div>
    );
  }
}
export default Checkout;
