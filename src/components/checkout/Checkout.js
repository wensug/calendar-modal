import React from "react";
import "./Checkout.css";

class Checkout extends React.Component {
  constructor() {
    super();
    this.state = {
      InitialDate: ""
    };
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
              <button>Change</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Checkout;
