import React from 'react';

const Review = ({review}) => {
    const {image, name, rating, body} = review;
    return (
        <div>
            <div className="col">
            <div className="col fw-bold">
              <div className="d-flex align-items-center">
                <img className="user-image me-4 mb-3" src={image} alt="user" />
                <h3>{name}</h3>
              </div>
              <p>
                <span className="ms-5 text-warning">Rating: {rating} </span>
              </p>
              <blockquote className=" fw-light">{body}</blockquote>
            </div>
          </div>
        </div>
    );
};

export default Review;