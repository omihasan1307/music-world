import React from "react";
import useCourse from "../../Hooks/useCourse";
import Videos from "../Videos/Videos";

const PaidCourse = () => {
  const [videos] = useCourse();

  return (
    <div className="container">
      {videos.length === 0 ? (
        <div className="not-available d-flex justify-content-center align-items-center ">
          <h1 className="text-danger">Video Not available</h1>
        </div>
      ) : (
        <div className="mt-3">
          {videos.map((e) => (
            <Videos key={e.cId} myCourse={e} />
          ))}
        </div>
      )}
    </div>
  );
};

export default PaidCourse;
