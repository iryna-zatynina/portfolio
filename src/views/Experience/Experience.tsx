import React, {useState} from 'react';
import Button from '../../components/Button/Button';
import './Experience.scss';
import JobInfo from "../../components/JobInfo/JobInfo";
import Hr from "../../components/Hr/Hr";

const Experience = () => {
    const data = [
        {
            title: "Kleesto",
            position: "Intern Frontend Developer (Remote)",
            location: "Athens, Greece",
            time: "Full-time",
            description: ["Build and maintain user interfaces for websites and web applications",
                "Implement user interface designs by translating visual and interactive elements into code",
                "Optimize the performance of websites and web applications by minimizing file sizes, reducing loading times, and improving overall user experience",
                "Ensure that websites and web applications are optimized for different screen sizes and devices by employing responsive design techniques"],
            dates: "Mar 2023 - Present"
        },
        {
            title: "BitOcean",
            position: "Intern Frontend Developer (Remote)",
            location: "Ivano-Frankivsk, Ukraine",
            time: "Full-time",
            description: ["Developed and maintained frontend projects for various clients, ensuring high-quality and bug-free code",
            "Designed user interfaces that were intuitive and user-friendly, resulting in positive user feedback",
            "Implemented cross-browser and adaptive layouts, ensuring the website was accessible to all users",
            "Provided product support to clients, resolving issues and ensuring timely delivery of projects"],
            dates: "Sep 2022 - Dec 2022"
        },
    ]

    const [currentJob, setCurrentJob] = useState(data[0]);


    return (
        <section className="experience">
            <Hr />
            <h2>Experience</h2>
            <div>
                {data.map((item, index) => (
                    <Button
                        active={currentJob.title === item.title}
                        size='large'
                        onClick={() => setCurrentJob(item)}
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