import React from "react";
import "./Deliverybtn.css";
import van from "../../images/van.svg";
import calendar from "../../images/calendar.svg";

class Deliverybtn extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <button
          className="deliverybtn"
          onClick={this.props.onClick}
          value={this.props.value}
          onChange={this.props.onChange}
        >
          <div className="delivery-open-calendarbtn">
            <div className="delivery-flex">
              <p className="delivery-selected-date">{this.props.value}</p>
              <div className="delivery-earliest">
                <img className="van-img" src={van} alt={"van"} />
                <span>Earliest delivery</span>
              </div>
            </div>
            <div className="delivery-flex">
              <div>
                <span className="delivery-day" >{this.props.value}</span>
                <img className="calendar-img"src={calendar} alt={"calendar"} />
              </div>
              <p className='delivery-change'>Change ></p>
            </div>
          </div>
        </button>
      </div>
    );
  }
}
export default Deliverybtn;
