import { deleteDoc, doc } from "firebase/firestore";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../../firebase.init";
import useCart from "../../Hooks/useCart";
import OrderList from "../OrderList/OrderList";
import OrderPrice from "../OrderPrice/OrderPrice";

const OrderSummery = () => {
  const [cart] = useCart();
  const [user] = useAuthState(auth);
  const handleRemoveCart = async (productId) => {
    await deleteDoc(doc(db, `selectCart/${user.uid}/addtoCart`, productId));
  };

  return (
    <div className="container-fluid mt-5">
      {cart.length === 0 ? (
        <div className="d-flex justify-content-center">
          <div className="spinner-grow" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <div className="spinner-grow mx-3" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <div className="spinner-grow" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <div className="row">
          <div className="col-12 col-md-10">
            {cart.map((element) => (
              <OrderList
                key={element.id}
                allOrderList={element}
                handleRemoveCart={handleRemoveCart}
              />
            ))}
          </div>
          <div className="col-12 col-md-2 border-start">
            <h6 className="text-center">Order Summery</h6>
            <hr />
            <OrderPrice orderPrice={cart}></OrderPrice>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderSummery;
