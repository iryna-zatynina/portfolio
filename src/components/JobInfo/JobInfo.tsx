import React from 'react';
import './JobInfo.scss';

interface JobInfoProps {
    item: {
        title: string,
        position: string,
        location: string,
        workModality: string,
        time: string,
        description: string[],
        dates: string
    }
}

const JobInfo = ({item}: JobInfoProps) => {
    return (
        <div className="jobInfo">
            <h3>{item.position}</h3>
            <span className="blue">{item.title} / {item.location} / {item.time} / {item.workModality}</span>
            <ul>
                {item.description.map((point, index) => <li key={index}>{point}</li>)}
            </ul>
            <span className="date">{item.dates}</span>
        </div>
    );
};

export default JobInfo;