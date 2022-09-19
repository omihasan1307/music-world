import React from "react";
import { useParams } from "react-router-dom";
import useProduct from "../../Hooks/useProduct";
import Footer from "../Footer/Footer";
import Headers from "../Headers/Headers";
import LoadData from "./musicWorld.json";

const ProductDetails = () => {
  const { details } = useParams();

  const pdDetail = LoadData.find((e) => e.id === parseInt(details));

  const {
    productName,
    img,
    about,
    price,
    category,
    rating,
    shipping,
    quantity,
    id,
    Durations,
  } = pdDetail;

  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-12 col-md-6">
          <div className="instruImage overflow-hidden w-75 mx-auto  ">
            <img src={img} alt="" className="w-100 h-100 object-fit" />
          </div>
        </div>
        <div className="col-12 col-md-6">
          <div className="instruDetails ">
            <h1>{productName}</h1>
            <h5>{about}</h5>
            <h5>BDT {price}</h5>
            <h5>Rating: {rating}</h5>
            <h5>Quantity: {quantity}</h5>
            <h5>Shipping: {shipping}</h5>
            <h5>{Durations} </h5>
            {/* {Durations === null ? "" : <h5>{Durations}</h5>} */}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetails;
