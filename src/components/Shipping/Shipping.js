import { doc, setDoc } from "firebase/firestore";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../../firebase.init";
import useCart from "../../Hooks/useCart";
import useProduct from "../../Hooks/useProduct";

const Shipping = () => {
  const [user] = useAuthState(auth);
  const [product] = useProduct();
  const [cart] = useCart(product);
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [address, setAddress] = useState();
  const [phone, setPhone] = useState();

  const navigate = useNavigate();

  const handleNameBlur = (event) => {
    const usernameRegex = /^[a-zA-Z]+ [a-zA-Z]+$/;
    if (event.target.value.match(usernameRegex)) {
      setName(event.target.value);
    } else {
      alert("Name is not valid");
    }
  };

  const handleEmailBlur = (event) => {
    const validEmail = /.+@(gmail|yahoo|outlook|mail|icloud|aol)\.com$/;
    if (event.target.value.match(validEmail)) {
      setEmail(event.target.value);
    } else {
      alert("Email is not valid");
    }
  };

  const handleAddressBlur = (event) => {
    setAddress(event.target.value);
  };
  const handlePhoneBlur = (event) => {
    const phoneno = /^(?:\+?88)?01[15-9]\d{8}$/;
    if (event.target.value.match(phoneno)) {
      setPhone(event.target.value);
    } else {
      alert("Number is not valid");
    }
  };

  const handleShipment = async (event) => {
    event.preventDefault();
    await setDoc(doc(db, "order", user.uid), {
      id: user.uid,
      name: name,
      email: email,
      address: address,
      phone: phone,
      cart: cart,
    });
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
                onBlur={handleEmailBlur}
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
                type="number"
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
