import React from "react";
import { useNavigate } from "react-router-dom";
import StripeCheckout from "react-stripe-checkout";
import useCart from "../../Hooks/useCart";
import useProduct from "../../Hooks/useProduct";
import { clearTheCart } from "../../utilities/fakedb";

const Payment = () => {
  const [product] = useProduct();
  const [cart] = useCart(product);
  const navigate = useNavigate();

  let totalPrice = 0;
  let shipping = 0;
  let quantity = 0;
  for (const element of cart) {
    quantity = quantity + element.quantity;
    totalPrice = totalPrice + element.price * element.quantity;
    shipping = shipping + element.shipping;
  }
  let tax = parseFloat((totalPrice * 0.1).toFixed(0));
  let grandTotal = (totalPrice + shipping + tax).toFixed(0);

  const onToken = (token) => {
    clearTheCart();
    navigate("/");
    window.location.reload();
  };

  return (
    <div className="mt-5">
      <div>
        {cart.map((element) => {
          const { productName, img, price } = element;
          return (
            <div className="d-flex justify-content-center ">
              <div className="payment-card m-2">
                <div className="payment-img ">
                  <img src={img} alt="" />
                </div>
                <div className="payment-detail">
                  <h3 className="payment-h3">{productName}</h3>
                  <p>BDT {price}</p>
                </div>
              </div>
            </div>
          );
        })}
        <div className="d-flex justify-content-center">
          <hr className="w-50" />
        </div>
        <h5 className="text-center">Total paid {grandTotal} BDT</h5>
        <div className="d-flex justify-content-center mt-4 mb-5">
          <StripeCheckout
            token={onToken}
            name="music world"
            // currency="BDT"
            // amount={grandTotal}
            stripeKey="pk_test_51LWvsNLMcriZxEttA38fplrKRNWlpUER5KuwivRiWd5ukwv25KQZIMZ1jJ4ZytNmSDqYTVhmS1PUzx2R3eOGAtFF00uEKhILxq"
          />
        </div>
      </div>
    </div>
  );
};

export default Payment;
