import React, {useState} from 'react';
import Button from '../../components/Button/Button';
import './Experience.scss';
import JobInfo from "../../components/JobInfo/JobInfo";
import Hr from "../../components/Hr/Hr";
import {experienceData} from "../../data"

const Experience = () => {
    const [currentJob, setCurrentJob] = useState(experienceData[0]);

    return (
        <section className="experience">
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
        </section>
    );
};

export default Experience;