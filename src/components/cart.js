import React, { useState, useEffect } from "react";
import "../styles/cart.css";

const Cart = ({ cart, setCart, handleChange }) => {
  const [price, setPrice] = useState(0);

  const handleRemove = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
    handlePrice();
  };

  const handlePrice = () => {
    let ans = 0;
    cart.map((item) => (ans += item.amount * item.price));
    setPrice(ans);
  };

  useEffect(() => {
    handlePrice();
  });

  return (
    <><article>
      {cart.map((item) => (
        <div className="cart_box" key={item.id}>
          <div className="cart_img">
            <img src={item.img} alt="" />
            <p>{item.title}</p>
          </div>
          <div>
            <button onClick={() => handleChange(item, -1)} class="danger">-</button>

            <button class="info">{item.amount}</button>
            <button onClick={() => handleChange(item, 1)} class="success">+</button>

          </div>
          <div>
            <span>{item.price} $</span>
            <button onClick={() => handleRemove(item.id)}>Remove</button>
          </div>
        </div>
      ))}
      <div className="total">
        <strong class="paisa"> Your Total Shopping is: </strong>
        <span>USD - {price} $</span>
      </div>
<br></br>
<br></br>
<br></br>
    </article>
    <div>
        <strong className="story"> Have a Nice Winters Shopping! </strong>

      </div></>
  );
};

export default Cart;
