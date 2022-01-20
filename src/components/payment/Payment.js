import React from "react";
import { Link } from "react-router-dom";
import { useStateValue } from "../../StateProvider";
import CheckoutProduct from "../checkout/checkoutProduct/CheckoutProduct";
import "./Payment.css";
function Payment() {
  const [{ basket, user }] = useStateValue();

  return (
    <div className="payment">
      <div className="payment__container">
          <h1>
              Checkout (
                  <Link to="/checkout">{basket.length} items</Link>
              )
          </h1>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment__address">
            <p>{user ? user.email : ""}</p>
            <p>124 React Lane</p>
            <p>HoChiMinh City</p>
          </div>
        </div>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Review items and dilivery</h3>
          </div>
          <div className="payment__items">
            {basket.map((item, index) => (
              <CheckoutProduct
                key={index}
                id={item.id}
                image={item.image}
                title={item.title}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment__details"></div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
