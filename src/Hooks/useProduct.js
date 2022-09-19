import { useEffect } from "react";
import { useState } from "react";

const useProduct = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch("musicWorld.json")
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  return [product, setProduct];
};

export default useProduct;
