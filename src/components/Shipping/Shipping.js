import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import StripeCheckout from "react-stripe-checkout";
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
      alert("Phone is not valid");
    }
  };

  let totalPrice = 0;
  for (const element of cart) {
    totalPrice = totalPrice + parseFloat(element.product.price);
  }
  let tax = parseFloat((totalPrice * 0.05).toFixed(0));
  let grandTotal = (totalPrice + tax).toFixed(0);

  const onToken = async (token) => {
    const docRef = await addDoc(collection(db, `order/${user.uid}/userOrder`), {
      uid: user.uid,
      email: token.email,
      card: token.card.brand,
      paid: grandTotal,
      name: name,
      addressEmail: email,
      address: address,
      phone: phone,
      cart: cart,
      time: new Date().toString(),
      create: new Date(),
      status: false,
      processing: true,
    });

    await updateDoc(doc(db, `order/${user.uid}/userOrder`, docRef.id), {
      orderId: docRef.id,
    });

    console.log("Document written with ID: ", docRef.id);

    await addDoc(collection(db, "userList"), {
      userId: user.uid,
      name: name,
      email: email,
    });

    navigate("/");
    for (const carts of cart) {
      await deleteDoc(doc(db, `selectCart/${user.uid}/addtoCart`, carts.pId));
    }
  };

  // const [checking, setChecking] = useState([]);
  // let isCourse = false;
  // useEffect(() => {
  //   cart.map((e) => setChecking(e.product));
  // }, [checking, cart]);

  // if (checking.category === "Course") {
  //   isCourse = false;
  //   console.log("A");
  // } else if (
  //   checking.category === "Instrument" ||
  //   checking.category === "Course"
  // ) {
  //   console.log("B");
  //   isCourse = true;
  // }

  return (
    <div>
      <div className="row container-fluid">
        <div className="col-12 col-md-6">
          <div className="container">
            <div className="auth-card d-flex justify-content-center align-items-center">
              <div className="auth-main-cart">
                <form>
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
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 d-flex justify-content-center align-items-center">
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
              {name && email && address && phone ? (
                <StripeCheckout
                  token={onToken}
                  name="music world"
                  stripeKey="pk_test_51LWvsNLMcriZxEttA38fplrKRNWlpUER5KuwivRiWd5ukwv25KQZIMZ1jJ4ZytNmSDqYTVhmS1PUzx2R3eOGAtFF00uEKhILxq"
                />
              ) : (
                <h3 className="text-danger">
                  Please submit your shipping info
                </h3>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Shipping;
