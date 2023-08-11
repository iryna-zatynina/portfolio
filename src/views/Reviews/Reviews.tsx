import React, {useState} from 'react';
import Button from '../../components/Button/Button';
import './Reviews.scss';
import ReviewInfo from "../../components/ReviewInfo/ReviewInfo";
import Hr from "../../components/Hr/Hr";
import {reviewsData} from "../../data";
import { Element } from 'react-scroll';

const Reviews = () => {
    const [currentReview, setCurrentReview] = useState(reviewsData[0]);

    return (
        <Element className="reviews" name="Reviews">
            <Hr />
            <h2>Reviews</h2>
            <div className="buttons">
                {reviewsData.map((item, index) => (
                    <Button
                        active={currentReview.name === item.name}
                        size='large'
                        onClick={() => setCurrentReview(item)}
                        key={index}
                    >
                        {item.name}
                    </Button>
                ))}
            </div>
            <ReviewInfo item={currentReview} />
        </Element>
    );
}

export default Reviews;