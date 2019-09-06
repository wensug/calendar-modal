import React from "react";
import "./Deliverybtn.css";
import van from "../../images/van.svg";
import calendar from "../../images/calendar.svg";
import { getFormatedDate, getDate } from "../../utils/dateHelper";

class Deliverybtn extends React.Component {
  render() {
    let deliveryDate = this.props.value;
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
              <p className="delivery-selected-date">
                {getFormatedDate(deliveryDate)}
              </p>
              <div className="delivery-earliest">
                <img className="van-img" src={van} alt="van" />
                <span>Earliest delivery</span>
              </div>
            </div>
            <div className="delivery-flex-calendar">
              <div className="delivery-calendar-change">
                <div className="delivery-calendar-change-image">
                  <span className="delivery-day">{getDate(deliveryDate)}</span>
                  <img className="calendar-img" src={calendar} alt="calendar" />
                </div>
                <p className="delivery-change">Change ></p>
              </div>
            </div>
          </div>
        </button>
      </div>
    );
  }
}
export default Deliverybtn;
