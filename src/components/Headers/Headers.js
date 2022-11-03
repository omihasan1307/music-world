import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import useProduct from "../../Hooks/useProduct";
import useCart from "../../Hooks/useCart";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase.init";

const Headers = () => {
  const [product] = useProduct();
  const [cart] = useCart(product);
  const [user] = useAuthState(auth);

  const handleSignOut = () => {
    signOut(auth);
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container">
          <a className="navbar-brand" href="/">
            <img src={logo} alt="" height={50} />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto fw-bold ">
              <li className="nav-item link-decoration">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item link-decoration">
                <Link className="nav-link" to="/courses">
                  Courses
                </Link>
              </li>
              <li className="nav-item link-decoration">
                <Link className="nav-link" to="/instruments">
                  Instruments
                </Link>
              </li>
              <li className="nav-item link-decoration">
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
              <li className="nav-item link-decoration">
                <Link className="nav-link" to="/paidcourse">
                  Videos
                </Link>
              </li>
            </ul>

            <Link to="ordersummery" className="nav-link">
              <FontAwesomeIcon icon={faShoppingCart} className="title" />
              <span>
                <sup className="fw-bold fs-6">
                  {cart.length === 0 ? 0 : cart.length}
                </sup>
              </span>
            </Link>

            {user ? (
              <Link onClick={handleSignOut} to="/login" className="nav-link">
                <button className="rounded-pill px-3 py-1 common-btn ms-3">
                  {user.email.split("@gmail.com")}
                </button>
              </Link>
            ) : (
              <Link to="/login" className="nav-link">
                <button className="rounded-pill px-3 py-1 common-btn ms-3">
                  Log In
                </button>
              </Link>
            )}

            {/* {user ? <small>{user.email}</small> : <p></p>} */}
          </div>
        </div>
      </nav>
      <hr style={{ margin: "0px", opacity: "0.9" }} />
    </div>
  );
};

export default Headers;
