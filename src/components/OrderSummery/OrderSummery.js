import React from "react";
import useCart from "../../Hooks/useCart";
import useProduct from "../../Hooks/useProduct";
import { removeFromDb } from "../../utilities/fakedb";
import OrderList from "../OrderList/OrderList";
import OrderPrice from "../OrderPrice/OrderPrice";

const OrderSummery = () => {
  const [product] = useProduct();
  const [cart, setCart] = useCart(product);

  const handleRemoveCart = (productId) => {
    const rest = cart.filter((pd) => pd.id !== productId.id);
    setCart(rest);
    removeFromDb(productId.id);
    window.location.reload();
  };

  return (
    <div className="container-fluid mt-5">
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
    </div>
  );
};

export default OrderSummery;
