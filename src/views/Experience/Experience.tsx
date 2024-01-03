import React, {useEffect, useState} from 'react';
import Button from '../../components/Button/Button';
import './Experience.scss';
import JobInfo from "../../components/JobInfo/JobInfo";
import Hr from "../../components/Hr/Hr";
import {experienceData} from "../../data";
import { Element } from 'react-scroll';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import ArrowLeftIcon from "../../icons/arrow-left";
import ArrowRightIcon from "../../icons/arrow-right";

const Experience = () => {
    const [currentJob, setCurrentJob] = useState(experienceData[0]);
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
        <Element className="experience" name="Experience">
            <Hr/>
            <h2>Experience</h2>
            {isSmallScreen ? (<div className="experience-swiper">
                <Swiper navigation={{
                    nextEl: '.experience-custom-swiper-button-next',
                    prevEl: '.experience-custom-swiper-button-prev',
                }} modules={[Navigation]} slidesPerView={"auto"} spaceBetween={10}>
                    {experienceData.map((item, index) => (
                        <SwiperSlide>
                            <Button
                                active={currentJob.title === item.title}
                                size='large'
                                onClick={() => setCurrentJob(item)}
                                key={index}
                            >
                                {item.title}
                            </Button>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className="experience-custom-swiper-button-next"><ArrowRightIcon/></div>
                <div className="experience-custom-swiper-button-prev"><ArrowLeftIcon/></div>
            </div>) : (<div className="buttons">
                {experienceData.map((item, index) => (
                    <Button
                        active={currentJob.title === item.title}
                        size='large'
                        onClick={() => setCurrentJob(item)}
                        key={index}
                    >
                        {item.title}
                    </Button>
                ))}
            </div>)}
            <JobInfo item={currentJob}/>
        </Element>
    );
};

export default Experience;