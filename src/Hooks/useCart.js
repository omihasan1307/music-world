import { collection, onSnapshot } from "firebase/firestore";
import { useState, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../firebase.init";

const useCart = () => {
  const [cart, setCart] = useState([]);
  const [user] = useAuthState(auth);
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
