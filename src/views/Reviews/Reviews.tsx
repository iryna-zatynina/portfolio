import React, {useEffect, useState} from 'react';
import Button from '../../components/Button/Button';
import './Reviews.scss';
import ReviewInfo from "../../components/ReviewInfo/ReviewInfo";
import Hr from "../../components/Hr/Hr";
import {reviewsData} from "../../data";
import { Element } from 'react-scroll';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import ArrowLeftIcon from "../../icons/arrow-left";
import ArrowRightIcon from "../../icons/arrow-right";

const Reviews = () => {
    const [currentReview, setCurrentReview] = useState(reviewsData[0]);
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth < 768);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <Element className="reviews" name="Testimonials">
            <Hr/>
            <h2>Testimonials</h2>
            {isSmallScreen ? (<div className="reviews-swiper">
                <Swiper navigation={{
                    nextEl: '.reviews-custom-swiper-button-next',
                    prevEl: '.reviews-custom-swiper-button-prev',
                }} modules={[Navigation]} slidesPerView={"auto"} spaceBetween={10}>
                    {reviewsData.map((item, index) => (
                        <SwiperSlide>
                            <Button
                                active={currentReview.name === item.name}
                                size='large'
                                onClick={() => setCurrentReview(item)}
                                key={index}
                            >
                                {item.name}
                            </Button>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className="reviews-custom-swiper-button-next"><ArrowRightIcon/></div>
                <div className="reviews-custom-swiper-button-prev"><ArrowLeftIcon/></div>
            </div>) : (<div className="buttons">
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
            </div>)}
            <ReviewInfo item={currentReview}/>
        </Element>
    );
}

export default Reviews;