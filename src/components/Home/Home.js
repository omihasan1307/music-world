import { Link } from "react-router-dom";
import useProduct from "../../Hooks/useProduct";
import home from "../../images/cover.png";
import pic1 from "../../images/1.jpg";
import pic2 from "../../images/2.jpeg";
import Footer from "../Footer/Footer";
import Product from "../Product/Product";
import { useState } from "react";
import { addToDb } from "../../utilities/fakedb";

const Home = () => {
  const [instruments] = useProduct();

  const [cart, setCart] = useState([]);

  const handleAddToCart = (item) => {
    const newCart = [...cart, item];
    setCart(newCart);
    addToDb(item.id);
    window.location.reload();
  };

  return (
    <div className="container">
      <section className="my-5">
        <div className="row">
          <div className="col-12 col-md-6 d-flex justify-content-center align-items-center">
            <div>
              <h1>
                Be a good musician and <br /> Reach your dream
              </h1>
              <p>
                {" "}
                learn music with us. We provide best instrument and <br /> best
                lesson by best instructors.
              </p>

              <Link to="/courses">
                <button className="rounded-pill px-3 py-1 common-btn">
                  Join Courses
                </button>
              </Link>
            </div>
          </div>
          <div className="col-12 col-md-6 d-flex justify-content-center align-items-center">
            <div>
              <img src={home} alt="" />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="row">
          <div className="col-12 col-md-4 d-flex justify-content-center align-items-center">
            <div className="text-center">
              <h2>50+</h2>
              <h3>Courses</h3>
            </div>
          </div>
          <div className="col-12 col-md-4 d-flex justify-content-center align-items-center my-5">
            <div className="text-center">
              <h2>20+</h2>
              <h3>Teachers</h3>
            </div>
          </div>
          <div className="col-12 col-md-4 d-flex justify-content-center align-items-center">
            <div className="text-center">
              <h2>2000+</h2>
              <h3>Students</h3>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h1 className="text-center my-3">Our Instrument</h1>
        <div className="row">
          {instruments.slice(0, 3).map((element) => (
            <Product
              key={element.id}
              allInstrument={element}
              handleAddToCart={handleAddToCart}
            />
          ))}
          <div className="d-flex justify-content-center">
            <Link to="/instruments" className="see-more mt-4">
              See More
            </Link>
          </div>
        </div>
      </section>

      <section>
        <h1 className="text-center my-5">Review</h1>
        <div className="row">
          <div className="col-12 col-md-6 d-flex justify-content-center">
            <div className="review-image me-3">
              <img src={pic1} alt="" />
            </div>
            <p>
              This course help me a lot. I learn <br /> a lot of theory &
              licks.For begginers, <br />
              this course is best
            </p>
          </div>

          <div className="col-12 col-md-6 d-flex justify-content-center">
            <div className="review-image me-3">
              <img src={pic2} alt="" />
            </div>
            <p>
              Very good instructor, very professional.
              <br />I learn arpegios & licks very easily. <br />
              Good experience with them.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
