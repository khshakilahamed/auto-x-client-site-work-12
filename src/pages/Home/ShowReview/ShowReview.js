import React, { useEffect, useState } from 'react';
import Rating from 'react-rating';

const ShowReview = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('https://powerful-tundra-44421.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, []);
    return (
        <div className="container">
            <h2 className="text-danger text-center my-5">Customer Reviews</h2>

            <div className="row text-center">
                {
                    reviews.map(review => <div key={review._id} className="col-md-4 mb-5">
                        <div className="border py-5">
                            <img className="img-fluid w-25 pb-3" src={'https://i.ibb.co/y4yHs7B/review-icon.png'} alt="" />
                            <h2>{review.displayName}</h2>
                            <p>{review.reviewText}</p>
                            <Rating
                                style={{ color: 'orange' }}
                                initialRating={review.rating}
                                emptySymbol="far fa-star"
                                fullSymbol="fas fa-star"
                                readonly
                            />
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default ShowReview;