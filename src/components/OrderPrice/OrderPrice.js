import React from "react";
import { useNavigate } from "react-router-dom";
import useCart from "../../Hooks/useCart";
import useProduct from "../../Hooks/useProduct";

const OrderPrice = ({ orderPrice }) => {
  const [product] = useProduct();
  const [cart] = useCart(product);
  const navigate = useNavigate();
  let totalPrice = 0;
  let shipping = 0;
  let quantity = 0;
  for (const element of orderPrice) {
    quantity = quantity + element.quantity;
    totalPrice = totalPrice + element.price * element.quantity;
    shipping = shipping + element.shipping;
  }
  let tax = parseFloat((totalPrice * 0.1).toFixed(0));
  let grandTotal = (totalPrice + shipping + tax).toFixed(0);

  const handleShipping = () => {
    if (cart.length !== 0) {
      navigate("/shipping");
    } else {
      alert("Please add some product");
    }
  };

  return (
    <div>
      <div className="order-summery-card">
        <p>Items Order: {quantity}</p>
        <p>Item price: {totalPrice}</p>
        <p>Shipping cost: {shipping}</p>
        <p>Tax: {tax}</p>
        <h6>Total Price: {grandTotal}</h6>
        <button
          onClick={() => handleShipping()}
          className="common-btn rounded-pill px-3 py-1"
        >
          Order Confirm
        </button>
      </div>
    </div>
  );
};

export default OrderPrice;
