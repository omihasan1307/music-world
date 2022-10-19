import { deleteDoc, doc } from "firebase/firestore";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import StripeCheckout from "react-stripe-checkout";
import { auth, db } from "../../firebase.init";
import useCart from "../../Hooks/useCart";

const Payment = () => {
  const [cart] = useCart();
  const [user] = useAuthState(auth);

  const navigate = useNavigate();

  let totalPrice = 0;
  for (const element of cart) {
    totalPrice = totalPrice + parseFloat(element.product.price);
  }
  let tax = parseFloat((totalPrice * 0.1).toFixed(0));
  let grandTotal = (totalPrice + tax).toFixed(0);

  const onToken = async (token) => {
    await deleteDoc(doc(db, "selectCart", `${user.uid}`));
    navigate("/");
  };

  return (
    <div className="mt-5">
      <div>
        {cart.map((element) => {
          const { productName, img, price } = element.product;
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
            stripeKey="pk_test_51LWvsNLMcriZxEttA38fplrKRNWlpUER5KuwivRiWd5ukwv25KQZIMZ1jJ4ZytNmSDqYTVhmS1PUzx2R3eOGAtFF00uEKhILxq"
          />
        </div>
      </div>
    </div>
  );
};

export default Payment;
