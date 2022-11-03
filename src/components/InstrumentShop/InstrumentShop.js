import useProduct from "../../Hooks/useProduct";
import Product from "../Product/Product";
import Footer from "../Footer/Footer";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { auth, db } from "../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import { useState } from "react";

const InstrumentShop = () => {
  const [instruments] = useProduct();
  const [user] = useAuthState(auth);
  const [searchText, setSearchText] = useState("");
  const [matchItem, setMatchItem] = useState([]);

  // console.log(matchItem);

  const handleSearch = (e) => {
    setSearchText(e.target.value);
  };

  const handleSearchBtn = () => {
    const pdN = instruments.map((pdName) => pdName.productName);
    for (const element of pdN) {
      console.log(element);

      const s = instruments.filter((e) => e.productName == element);
      // console.log(s);
    }
  };

  const instrument = instruments.filter(
    (element) => element.category === "Instrument"
  );

  const handleAddToCart = async (item) => {
    const docRef = await addDoc(
      collection(db, `selectCart/${user.uid}/addtoCart`),
      {
        product: item,
      }
    );
    await updateDoc(doc(db, `selectCart/${user.uid}/addtoCart`, docRef.id), {
      pId: docRef.id,
    });
  };

  return (
    <div>
      <div className="search-field text-center">
        <input
          onChange={handleSearch}
          type="search"
          name="search"
          placeholder="Search your product"
        />
        <button onClick={handleSearchBtn}>Search</button>
      </div>
      <div className="container mt-5">
        {instruments.length === 0 ? (
          <div className="d-flex justify-content-center">
            <div className="spinner-grow" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-grow mx-3" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-grow" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : (
          <div className="row gy-4">
            {instrument.map((elements) => (
              <Product
                key={elements.id}
                allInstrument={elements}
                handleAddToCart={handleAddToCart}
              />
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default InstrumentShop;
