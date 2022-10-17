import { collection, onSnapshot } from "firebase/firestore";
import { useState, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../firebase.init";
import { getStoredCart } from "../utilities/fakedb";

const useCart = (products) => {
  const [cart, setCart] = useState([]);
  const [user] = useAuthState(auth);

  // useEffect(() => {
  //   if (products.length) {
  //     const savedCart = getStoredCart();
  //     const storedCart = [];
  //     for (const key in savedCart) {
  //       const addedProduct = products.find((product) => product.id === key);
  //       if (addedProduct) {
  //         // set quantity
  //         const quantity = savedCart[key];
  //         addedProduct.quantity = quantity;
  //         storedCart.push(addedProduct);
  //       }
  //     }
  //     setCart(storedCart);
  //   }
  // }, [products]);

  useEffect(() => {
    onSnapshot(
      collection(db, `selectCart/${user?.uid}/addtoCart`),
      (snapshot) => {
        const getValue = snapshot.docs.map((e) => e.data());
        setCart(getValue);
      },
      (error) => {
        console.log(error);
      }
    );
  }, [user]);

  return [cart, setCart];
};

export default useCart;
