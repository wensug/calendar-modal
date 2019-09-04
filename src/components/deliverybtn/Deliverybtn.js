import React from "react";
// import DatePicker from 'react-datepicker'
import './Deliverybtn.css'
// import 'react-datepicker/dist/react-datepicker.css'
import van from '../../images/van.svg'
import calendar from '../../images/calendar.svg'

class Deliverybtn extends React.Component {
  constructor() {
    super();
    this.state = {
    };
  }

  
  render() {
    return (
        <div>
            <button className='deliverybtn' onClick={this.props.onClick} value={this.props.value} onChange={this.props.onChange}>
                <div className='open-calendarbtn'>
                    <a href='#'><img src={van} alt={'van'}/>{this.props.value}<p>Earliest delivery</p></a>
                    <a href='#'><img src={calendar} alt={'calendar'}/>{this.props.value}<p>Change</p></a>
                </div>
            </button>
        </div>

    );
  }
}
export default Deliverybtn;