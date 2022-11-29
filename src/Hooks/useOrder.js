import { collection, onSnapshot, orderBy } from "firebase/firestore";
import { useState, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../firebase.init";

const useOrder = () => {
  const [userOrder, setUserOrder] = useState([]);
  const [user] = useAuthState(auth);
  useEffect(() => {
    onSnapshot(
      collection(db, `order/${user?.uid}/userOrder`),
      orderBy("create", "desc"),
      (snapshot) => {
        const getValue = snapshot.docs.map((e) => e.data());
        setUserOrder(getValue);
      },
      (error) => {
        console.log(error);
      }
    );
  }, [user]);

  return [userOrder, setUserOrder];
};

export default useOrder;
