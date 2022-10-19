import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const OrderList = ({ allOrderList, handleRemoveCart }) => {
  const { pId } = allOrderList;

  const { productName, img, price, quantity } = allOrderList.product;
  return (
    <div>
      <div className="orderListCart m-3 border-bottom">
        <div className="orderImage mb-3">
          <img src={img} alt="" />
        </div>
        <div className="orderDetail">
          <h1>{productName}</h1>
          <h6 className="my-3">BDT {price}</h6>
          <h6 className="mb-3">Quantity: {quantity}</h6>
          <button
            onClick={() => handleRemoveCart(pId)}
            className="border-0 px-3 py-1 common-btn rounded-pill"
          >
            <FontAwesomeIcon icon={faTrash} className="text-white" /> Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderList;
