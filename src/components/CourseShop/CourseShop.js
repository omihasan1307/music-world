import useProduct from "../../Hooks/useProduct";
import Product from "../Product/Product";
import Footer from "../Footer/Footer";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { auth, db } from "../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";

const CourseShop = () => {
  const [courses] = useProduct();
  const [user] = useAuthState(auth);
  const course = courses.filter((element) => element.category === "Course");

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
      <div className="container mt-5">
        {courses.length === 0 ? (
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
            {course.map((elements) => (
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

export default CourseShop;
