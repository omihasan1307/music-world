import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Product = ({ allInstrument, handleAddToCart }) => {
  const { productName, img, shipping, price, id, rating } = allInstrument;

  const navigate = useNavigate();
  const handleDetail = () => {
    navigate(`/productDetails/${id}`);
  };

  return (
    <div className=" col-12 col-md-4 d-flex justify-content-around align-items-center">
      <div className="product-card position-relative ">
        <div className="product-image ">
          <img src={img} alt="" />
        </div>
        <div className="product-details px-3">
          <h3 onClick={handleDetail} className="link-decoration">
            {productName}
          </h3>
          <p>BDT {price}</p>
          <p>Rating: {rating}</p>
          <p>Shipping: {shipping}</p>
        </div>
        <button
          onClick={() => handleAddToCart(allInstrument)}
          className="position-absolute bottom-0 w-100 rounded-pill common-btn py-1"
        >
          <FontAwesomeIcon icon={faShoppingCart} /> Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
