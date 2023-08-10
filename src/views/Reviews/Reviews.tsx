import React, {useState} from 'react';
import Button from '../../components/Button/Button';
import './Reviews.scss';
import ReviewInfo from "../../components/ReviewInfo/ReviewInfo";
import Hr from "../../components/Hr/Hr";
import {reviewsData} from "../../data";

const Reviews = () => {
    const [currentReview, setCurrentReview] = useState(reviewsData[0]);

    return (
        <section className="experience">
            <Hr />
            <h2>Experience</h2>
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
        </section>
    );
}

export default Reviews;