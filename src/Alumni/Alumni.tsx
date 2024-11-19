import React from 'react';
import './Alumni.css';

const alumniData = [
    {
        name: "Hudson Stolfus",
        contacts: {
            email: "hudson.stolfus@gmail.com",
        },
        skills: ["UX Design", "Python"]
    },
    {
        name: "Luke Freyermuth",
        contacts: {
            email: "UNKNOWN"
        },
        skills: ["CAD Design", "3D Printing"]
    },
    {
      name: "Matthew Chaffin",
        contacts: {
            email: "UNKNOWN"
        },
        skills: ["Electrical", "CNC", "3D Printing"]
    }
];


interface AlumniData {
    name: string;
    contacts: {
        email: string;
        linkedin?: string;
    };
    skills: string[];
}

const renderAlumni = (alumni: AlumniData[]) => {
    return alumni.map((alum, index) => (
        <div key={index} className="alumni-card">
            <h2>{alum.name}</h2>
            <p>Email: <a href={`mailto:${alum.contacts.email}`}>{alum.contacts.email}</a></p>
            {alum.contacts.linkedin && <p>LinkedIn: <a href={alum.contacts.linkedin} target="_blank" rel="noopener noreferrer">{alum.contacts.linkedin}</a></p>}
            <h3>Skills:</h3>
            <ul style={{ marginTop: "-20px" }}>
                {alum.skills.map((skill, idx) => (
                    <li key={idx}>{skill}</li>
                ))}
            </ul>
        </div>
    ));
};

const Alumni = () => {
    return (
        <div className="alumni-container">
            <div className="alumni-title-box">
                <h1>Alumni Directory</h1>
            </div>
            {renderAlumni(alumniData)}
        </div>
    );
}

export default Alumni;