import React from "react";
import "./Review.css";
import useReview from "../../hook/useReview";

const Review = () => {
  const [review] = useReview();
  return (
    <div className="mt-5">
      <h2 className="section-heading">REVIEW</h2>
      <div className="row row-cols-3 g-5 mt-5">
        {review.map((review) => (
          <div key={review.id} className="col">
            <div className="col fw-bold">
              <img src="" alt="" />
              <h3>{review.name}</h3>
              <p>
                <span>Rating: {review.rating}</span>
              </p>
              <p>{review.body}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Review;
