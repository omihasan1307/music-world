import { collection, onSnapshot } from "firebase/firestore";
import { useState, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../firebase.init";

const useCourse = () => {
  const [course, setCourse] = useState([]);
  const [user] = useAuthState(auth);
  useEffect(() => {
    onSnapshot(
      collection(db, `purchaseCourse/${user?.uid}/course`),
      (snapshot) => {
        const getValue = snapshot.docs.map((e) => e.data());
        setCourse(getValue);
      },
      (error) => {
        console.log(error);
      }
    );
  }, [user]);

  return [course, setCourse];
};

export default useCourse;
