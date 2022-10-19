import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";

const Product = ({ allInstrument, handleAddToCart }) => {
  const { productName, img, price, id } = allInstrument;
  const [user] = useAuthState(auth);

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
          <h3
            onClick={handleDetail}
            className="link-decoration"
            title={productName}
          >
            {productName.length > 25
              ? productName.slice(0, 25) + "..."
              : productName}
          </h3>
          <p>BDT {price}</p>
        </div>
        <button
          onClick={
            user === null
              ? () => navigate("/login")
              : () => handleAddToCart(allInstrument)
          }
          className="position-absolute bottom-0 w-100 rounded-pill common-btn py-1"
        >
          <FontAwesomeIcon icon={faShoppingCart} /> Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
