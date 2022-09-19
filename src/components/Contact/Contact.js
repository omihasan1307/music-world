import React from "react";
import Footer from "../Footer/Footer";

const Contact = () => {
  return (
    <div>
      <div>
        <div className="container">
          <div className="auth-card d-flex justify-content-center align-items-center">
            <div className="auth-main-cart">
              <form>
                <h1 className="text-center">Contact Us</h1>

                <label htmlFor="text" className="ms-3 mb-1">
                  Name
                </label>
                <br />
                <input
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
