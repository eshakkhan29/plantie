import React from "react";
import "./Reviews.css";
import useReview from "../../hook/useReview";
import Review from "../Review/Review";

const Reviews = () => {
  const [review] = useReview();
  return (
    <div className="mt-5">
      <h2 className="section-heading">REVIEW</h2>
      <div className="row row-cols-1 row-cols-lg-3 g-5 mt-5">
        {
          review.map(data => <Review key={data.id} review={data}></Review>)
        }
      </div>
    </div>
  );
};

export default Reviews;
