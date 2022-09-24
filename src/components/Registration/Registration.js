import React from "react";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { auth, db } from "../../firebase.init";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";

const Registration = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState();

  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const [createUserWithEmailAndPassword, user, loading] =
    useCreateUserWithEmailAndPassword(auth);

  if (user) {
    navigate(from, { replace: true });
  }

  const handleNameBlur = (event) => {
    setName(event.target.value);
  };
  const handleEmailBlur = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordBlur = (event) => {
    setPassword(event.target.value);
  };

  const handleCreateUser = async (event) => {
    event.preventDefault();
    if (password.length < 6) {
      setError("Password must be 6 characters or longer");
      return;
    }
    try {
      const docRef = await addDoc(collection(db, "users"), {
        name: name,
        email: email,
        create: new Date(),
      });
      await updateDoc(doc(db, "users", docRef.id), {
        id: docRef.id,
      });
      createUserWithEmailAndPassword(email, password);
    } catch (e) {
      alert(e);
    }
  };

  const [signInWithGoogle, done] = useSignInWithGoogle(auth);
  if (done) {
    navigate(from, { replace: true });
  }

  return (
    <div>
      <div className="container">
        <div className="auth-card d-flex justify-content-center align-items-center">
          <div className="auth-main-cart">
            <form onSubmit={handleCreateUser}>
              <h1 className="text-center">REGISTER</h1>
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
              <label htmlFor="password" className="ms-3 mb-1">
                Password
              </label>
              <br />
              <input
                onBlur={handlePasswordBlur}
                type="password"
                placeholder="Enter your password"
                className="input-field rounded-pill px-3 py-2"
                required
              />
              <br />
              <input
                className=" common-btn w-100 p-2 rounded-pill"
                type="submit"
                value="Register"
                required
              />
            </form>
            <p style={{ color: "red" }}>{error}</p>
            {loading && <p className="text-center">Loading...</p>}
            <div>
              <button
                onClick={() => signInWithGoogle()}
                className="w-100 p-2 rounded-pill mt-2"
              >
                <FcGoogle className="fs-4 me-2" /> Continue with Google
              </button>

              <hr />
              <p className="text-center mt-3">
                Already Have an account?{" "}
                <span className="text-primary  ms-2">
                  <Link to="/login" className="register-link">
                    Login
                  </Link>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Registration;
