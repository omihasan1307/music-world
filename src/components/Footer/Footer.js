import React from "react";

import { AiFillGooglePlusCircle, AiFillTwitterCircle } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-12 col-sm-6 col-md-4 d-flex justify-content-around align-items-center">
          <div>
            <h4>Explore</h4>
            <ul>
              <li>
                <a href="../courses/">Courses</a>
              </li>
              <li>
                <a href="../instrument">Instuments</a>
              </li>
              <li>
                <a href="/#">Events</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-md-4 d-flex justify-content-around align-items-center">
          <div>
            <h4>About</h4>
            <ul>
              <li>
                <a href="/#">Privacy</a>
              </li>
              <li>
                <a href="/#">Terms</a>
              </li>
              <li>
                <a href="../contact.js">Contact</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-md-4 d-flex justify-content-around align-items-center">
          <div>
            <h4>Follow Us</h4>
            <ul>
              <li>
                <a href="https://www.facebook.com/omihasansakin">
                  <BsFacebook /> Facebook
                </a>
              </li>
              <li>
                <a href="https://twitter.com/omi7641">
                  <AiFillTwitterCircle /> Twitter
                </a>
              </li>
              <li>
                <a href="https://mail.google.com/mail/u/0/?tab=rm#inbox">
                  <AiFillGooglePlusCircle /> Google+
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
