import { collection, doc, getDoc, getDocs, setDoc } from "firebase/firestore";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../../firebase.init";
import Footer from "../Footer/Footer";

const Contact = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();

  const [user] = useAuthState(auth);

  const handleNameBlur = (event) => {
    setName(event.target.value);
  };
  const handleEmailBlur = (event) => {
    setEmail(event.target.value);
  };
  const handleMessageBlur = (event) => {
    setMessage(event.target.value);
  };

  const handleContact = async (event) => {
    event.preventDefault();
    try {
      await setDoc(doc(db, "contact", user.uid), {
        name: name,
        email: email,
        message: message,
        userId: user.uid,
        time: new Date(),
      });
      alert("Thank you for your feedback");
    } catch (e) {
      alert(e);
    }
  };

  const getData = async () => {
    const querySnapshot = await getDocs(collection(db, "contact"));
    querySnapshot.forEach((doc) => {
      console.log(doc.data());
    });
  };
  getData();

  return (
    <div>
      <div>
        <div className="container">
          <div className="auth-card d-flex justify-content-center align-items-center">
            <div className="auth-main-cart">
              <form onSubmit={handleContact}>
                <h1 className="text-center">Contact Us</h1>

                <label htmlFor="text" className="ms-3 mb-1">
                  Name
                </label>
                <br />
                <input
                  onBlur={handleNameBlur}
                  type="text"
                  placeholder="Enter your name"
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
                <label htmlFor="Message" className="ms-3 mb-1">
                  Message
                </label>
                <br />
                <textarea
                  onBlur={handleMessageBlur}
                  className="message-input rounded-pill px-3 py-2"
                  placeholder="Message"
                ></textarea>
                <br />
                <input
                  className=" common-btn w-100 p-2 rounded-pill"
                  type="submit"
                  value="Submit"
                  required
                />
              </form>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Contact;
