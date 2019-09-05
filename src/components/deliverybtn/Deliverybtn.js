import React from "react";
import "./Deliverybtn.css";
import van from "../../images/van.svg";
import calendar from "../../images/calendar.svg";

class Deliverybtn extends React.Component {
  getDate(date) {
    let day = new Date(date);
    let dd = day.getDate();
    return dd;
  }

  getFormatedDate(dateStr) {
    let date = new Date(dateStr);
    let days = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];
    let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    let dayWeek = days[date.getDay()];
    let mm = months[date.getMonth() + 1];
    let dd = date.getDate();
    return (`${dayWeek} ${mm} ${dd}`)
  }

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
                {this.getFormatedDate(deliveryDate)}
              </p>
              <div className="delivery-earliest">
                <img className="van-img" src={van} alt="van" />
                <span>Earliest delivery</span>
              </div>
            </div>
            <div className="delivery-flex">
              <div className="delivery-calendar-change">
                <span className="delivery-day">
                  {this.getDate(deliveryDate)}
                </span>
                <img className="calendar-img" src={calendar} alt="calendar" />
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
