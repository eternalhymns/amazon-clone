import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal.js"
function Checkout() {
  return <div className="checkout">
      <div className="checkout__left">
          <div className="checkout__ad">
              <img src="https://www.disruptivestatic.com/wp-content/uploads/2018/10/Screen-Shot-2018-10-29-at-11.50.03-AM-450x96.png" alt=""/>
          </div>
          <div className="checkout__title">
              <h2>Your shopping Basket</h2>
              {/* BaskeyItem */}
              {/* BaskeyItem */}
              {/* BaskeyItem */}
              {/* BaskeyItem */}
          </div>
      </div>
      <div className="checkout__right">
          <Subtotal/>
      </div>
  </div>;
}

export default Checkout;
