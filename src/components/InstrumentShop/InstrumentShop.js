import React, { useState } from "react";
import useProduct from "../../Hooks/useProduct";
import Product from "../Product/Product";
import Footer from "../Footer/Footer";
import { addToDb } from "../../utilities/fakedb";

const InstrumentShop = () => {
  const [instruments] = useProduct();
  const [cart, setCart] = useState([]);

  const instrument = instruments.filter(
    (element) => element.category === "Instrument"
  );

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
          {instrument.map((elements) => (
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

export default InstrumentShop;
