import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";

const Shipping = () => {
  const [user] = useAuthState(auth);

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [address, setAddress] = useState();
  const [phone, setPhone] = useState();

  const navigate = useNavigate();

  const handleNameBlur = (event) => {
    setName(event.target.value);
  };

  const handleAddressBlur = (event) => {
    setAddress(event.target.value);
  };
  const handlePhoneBlur = (event) => {
    setPhone(event.target.value);
  };

  const handleShipment = (event) => {
    event.preventDefault();
    const shippingInfo = { name, email, address, phone };
    console.log(shippingInfo);
    navigate("/payment");
  };
  return (
    <div>
      <div className="container">
        <div className="auth-card d-flex justify-content-center align-items-center">
          <div className="auth-main-cart">
            <form onSubmit={handleShipment}>
              <h1 className="text-center">Shipping Information</h1>
              <label htmlFor="text" className="ms-3 mb-1">
                Name
              </label>
              <br />
              <input
                onBlur={handleNameBlur}
                type="text"
                placeholder="Enter your email"
                className="input-field rounded-pill px-3 py-2"
                required
              />
              <br />
              <label htmlFor="email" className="ms-3 mb-1">
                E-mail
              </label>
              <br />
              <input
                value={user?.email}
                readOnly
                type="email"
                placeholder="Enter your email"
                className="input-field rounded-pill px-3 py-2"
                required
              />
              <br />
              <label htmlFor="text" className="ms-3 mb-1">
                Address
              </label>
              <br />
              <input
                onBlur={handleAddressBlur}
                type="text"
                placeholder="Enter your address"
                className="input-field rounded-pill px-3 py-2"
                required
              />
              <br />
              <label htmlFor="text" className="ms-3 mb-1">
                Phone
              </label>
              <br />
              <input
                onBlur={handlePhoneBlur}
                type="text"
                placeholder="Enter your phone number"
                className="input-field rounded-pill px-3 py-2"
                required
              />
              <br />

              <input
                className=" common-btn w-100 p-2 rounded-pill"
                type="submit"
                value="Add Shipping"
                required
              />
            </form>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Shipping;
