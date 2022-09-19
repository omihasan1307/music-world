import React, { useState } from "react";
import useProduct from "../../Hooks/useProduct";
import Product from "../Product/Product";
import Footer from "../Footer/Footer";
import { addToDb } from "../../utilities/fakedb";

const CourseShop = () => {
  const [courses] = useProduct();
  const [cart, setCart] = useState([]);

  const course = courses.filter((element) => element.category === "course");

  const handleAddToCart = (item) => {
    const newCart = [...cart, item];
    setCart(newCart);
    addToDb(item.id);
    window.location.reload();
  };

  return (
    <div>
      <div className="container mt-5">
        <div className="row gy-4">
          {course.map((elements) => (
            <Product
              key={elements.id}
              allInstrument={elements}
              handleAddToCart={handleAddToCart}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CourseShop;
