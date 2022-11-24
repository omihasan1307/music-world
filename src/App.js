import { Route, Routes } from "react-router-dom";
import "./App.css";
import Contact from "./components/Contact/Contact";
import CourseShop from "./components/CourseShop/CourseShop";
import Headers from "./components/Headers/Headers";
import Home from "./components/Home/Home";
import InstrumentShop from "./components/InstrumentShop/InstrumentShop";
import Login from "./components/Login/Login";
import OrderSummery from "./components/OrderSummery/OrderSummery";
import Payment from "./components/Payment/Payment";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import Registration from "./components/Registration/Registration";
import RequireAuth from "./components/RequireAuth/RequireAuth";
import Shipping from "./components/Shipping/Shipping";
import "animate.css";
import PaidCourse from "./components/PaidCourse/PaidCourse";

function App() {
  return (
    <div>
      <Headers />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/instruments" element={<InstrumentShop />} />
        <Route path="/courses" element={<CourseShop />} />
        <Route
          path="/ordersummery"
          element={
            <RequireAuth>
              <OrderSummery />
            </RequireAuth>
          }
        />
        <Route path="/productDetails/:details" element={<ProductDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/paidcourse"
          element={
            <RequireAuth>
              <PaidCourse />
            </RequireAuth>
          }
        />
        <Route
          path="/shipping"
          element={
            <RequireAuth>
              <Shipping />
            </RequireAuth>
          }
        />
        <Route
          path="/payment"
          element={
            <RequireAuth>
              <Payment />
            </RequireAuth>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
