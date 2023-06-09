import React from "react";

const Videos = ({ course }) => {
  const { cart } = course;
  const courses = cart.filter(
    (element) => element.product.category === "Course"
  );

  return (
    <div>
      {courses.map((e) => (
        <div>
          <div className="row">
            <div className="col-12 col-md-4 d-flex justify-content-center align-items-center ">
              <div>
                <h2 className="text-center title-text">
                  {e.product.productName}
                </h2>
              </div>
            </div>
            <div className="col-12 col-md-8 d-flex justify-content-center">
              <div className="mb-5">
                <iframe
                  width="700"
                  height="400"
                  src={e.product.video}
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </div>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default Videos;
