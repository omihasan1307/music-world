import { collection, onSnapshot } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../firebase.init";
import Footer from "../Footer/Footer";

const ProductDetails = () => {
  const { details } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    onSnapshot(
      collection(db, "products"),
      (snapshot) => {
        const getValue = snapshot.docs.map((e) => e.data());
        setProduct(getValue);
        setLoading(true);
      },
      (error) => {
        console.log(error);
      }
    );
  }, []);

  const pdDetail = loading === true && product.find((e) => e.id === details);

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
      {loading === false ? (
        <div className="d-flex justify-content-center align-items-center h-100">
          <div className="spinner-grow" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        ""
      )}
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
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetails;
