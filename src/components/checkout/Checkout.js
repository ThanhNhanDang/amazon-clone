import React from "react";
import { useStateValue } from "../../StateProvider";
import "./Checkout.css";
import CheckoutProduct from "./checkoutProduct/CheckoutProduct";
import Subtotal from "./subtotal/Subtotal";
function Checkout() {
  const [{ basket }] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
          className="checkout__ad"
        />
        <div>
          <h2 className="checkout__title">Your shopping Basket</h2>
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
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
