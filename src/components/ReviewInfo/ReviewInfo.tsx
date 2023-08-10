import React from 'react';
import './ReviewInfo.scss';
import {reviewsLink} from "../../data";

interface ReviewInfoProps {
    item: {
        name: string,
        position: string,
        relations: string,
        review: string,
        data: String
    }
}

const ReviewInfo = ({item}: ReviewInfoProps) => {
    return (
        <div className="reviewInfo">
            <h3>{item.position}</h3>
            <span className="blue">{item.relations}</span>
            <div className='review-text'>
                <p>{item.review}</p>
            </div>
            <div className='reviewInfo_footer'>
                <a className='source' href={reviewsLink} target='_blank' rel="noreferrer">Source</a>
                <span className="date">{item.data}</span>
            </div>
        </div>
    );
};

export default ReviewInfo;