import React, {useState} from 'react';
import Button from '../../components/Button/Button';
import './Experience.scss';
import JobInfo from "../../components/JobInfo/JobInfo";
import Hr from "../../components/Hr/Hr";
import {experienceData} from "../../data";
import { Element } from 'react-scroll';

const Experience = () => {
    const [currentJob, setCurrentJob] = useState(experienceData[0]);

    return (
        <Element className="experience" name="Experience">
            <Hr />
            <h2>Experience</h2>
            <div className="buttons">
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
            </div>
            <JobInfo item={currentJob} />
        </Element>
    );
};

export default Experience;