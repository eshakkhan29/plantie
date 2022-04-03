import React from 'react';
import './Review.css';
import useReview from '../../hook/useReview';

const Review = () => {
    const [review] = useReview();
    return (
        <div className='position-relative'>
            <img src="" alt="" />
            <div className='row row-cols-3 g-5'>
            {
                review.map(review => <div className='col'>
                    <div className="col fw-bold">
              <img src="" alt="" />
              <h3>{review.name}</h3>
              <p>
                <span>Rating: {review.rating}</span>
              </p>
              <p>{review.body}</p>
            </div>
                </div>)
            }
            </div>
            <img src="" alt="" />
        </div>
    );
};

export default Review;