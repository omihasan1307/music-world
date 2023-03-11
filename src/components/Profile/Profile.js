import React from "react";
import moment from "moment";
import useOrder from "../../Hooks/useOrder";

const Profile = () => {
  const [order] = useOrder();

  return (
    <div>
      {order.length !== 0 ? (
        <div className="row container-fluid">
          <div className="col-12">
            {order.map((e) => (
              <div className="border m-3 row">
                <div className="col-12 col-md-8">
                  {e.cart.map((e) => (
                    <div className="orderListCart m-3 border-bottom">
                      <div className="orderImage mb-3">
                        <img src={e.product.img} alt="" />
                      </div>
                      <div className="orderDetail">
                        <h1>{e.product.productName}</h1>
                        <h6 className="my-3">BDT {e.product.price}</h6>
                        <h6 className="mb-3">Category: {e.product.category}</h6>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="col-12 col-md-4 border-start mt-5 mb-5">
                  <h5>
                    <span className="title-text">Name:</span> {e.name}
                  </h5>
                  <h5>
                    <span className="title-text">Address:</span> {e.address}
                  </h5>
                  <h5>
                    <span className="title-text">Cell:</span> {e.phone}
                  </h5>
                  <h5>
                    <span className="title-text">Paid:</span> BDT {e.paid}
                  </h5>
                  <h5>
                    <span className="title-text">Time:</span>{" "}
                    {moment(e.time.seconds).format("DD MMM, YYYY")}
                  </h5>
                  <button
                    className={e.status ? "btn btn-success" : "btn btn-danger"}
                  >
                    {e.processing ? "Processing" : "Order Completed"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="not-available d-flex justify-content-center align-items-center ">
          <h1 className="text-danger">Order Not available</h1>
        </div>
      )}
    </div>
  );
};

export default Profile;
