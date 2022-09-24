import { collection, onSnapshot } from "firebase/firestore";
import { useEffect } from "react";
import { useState } from "react";
import { db } from "../firebase.init";

const useProduct = () => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    onSnapshot(
      collection(db, "products"),
      (snapshot) => {
        const getValue = snapshot.docs.map((e) => e.data());
        setProduct(getValue);
        setLoading(true);
      },
      (error) => {
        console.log(error);
      }
    );
  }, []);

  return [product, setProduct];
};

export default useProduct;
