import React from "react";

interface AlumniData {
    name: string;
    contacts: {
        email: string;
        linkedin?: string;
    };
    occupation?: string;
    bio?: string;
    skills: string[];
}

const alumniData: AlumniData[] = [
    {
        name: "Hudson Stolfus",
        contacts: {
            email: "hudson.stolfus@gmail.com",
        },
        skills: ["UX Design", "Python"],
    },
    {
        name: "Luke Freyermuth",
        contacts: {
            email: "UNKNOWN",
        },
        skills: ["CAD Design", "3D Printing"],
    },
    {
        name: "Matthew Chaffin",
        contacts: {
            email: "matthew@chaffins.us",
        },
        skills: ["Electrical", "CNC", "3D Printing", "Laser Cutting", "CAD"],
    },
    {
        name: "Archie Dinwiddie",
        contacts: {
            email: "archiedinwiddie3342@gmail.com",
        },
        skills: ["Leadership", "Design", "Build", "Power Tools"],
        occupation: "Commercial & Industrial HVAC Install",
        bio: "Hello, I am 20, currently working in the Industrial/ commercial side of HVACR (Heating, Ventilation, Air Conditioning, and Refrigeration.) I’m a pretty fun and chill person if you get to know me, I like old trucks, and being a mentor for robotics students. I specialized in building with the Staley Robotics Team.",
    },
];

const Alumni = () => {
    return (
        <div className="p-6 max-w-4xl mx-auto text-gray-300">
            <div className="bg-green-700 text-gray-300 p-4 rounded-md text-center mb-6 mt-20 shadow-lg shadow-green-500">
                <h1 className="text-2xl font-bold">Alumni Directory</h1>
            </div>
            <div>
                {alumniData.map((alum, index) => (
                    <div
                        key={index}
                        className="bg-gray-800 border border-gray-300 rounded-lg p-6 mb-6 shadow-lg shadow-green-500"
                    >
                        <h2 className="text-lg font-bold text-green-400 mb-2">{alum.name}</h2>
                        <p>
                            Email:{" "}
                            <a
                                href={`mailto:${alum.contacts.email}`}
                                className="text-green-400 hover:underline"
                            >
                                {alum.contacts.email}
                            </a>
                        </p>
                        {alum.contacts.linkedin && (
                            <p>
                                LinkedIn:{" "}
                                <a
                                    href={alum.contacts.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-green-400 hover:underline"
                                >
                                    {alum.contacts.linkedin}
                                </a>
                            </p>
                        )}
                        <h3 className="font-bold mt-4">Occupation:</h3>
                        <p>{alum.occupation || "Not specified"}</p>
                        <h3 className="font-bold mt-4">Bio:</h3>
                        <p>{alum.bio || "Bio not available"}</p>
                        <h3 className="font-bold mt-4">Skills:</h3>
                        <ul className="flex flex-wrap gap-2 mt-2">
                            {alum.skills.map((skill, idx) => (
                                <li
                                    key={idx}
                                    className="bg-gray-700 rounded-full px-3 py-1 text-gray-300 text-sm"
                                >
                                    {skill}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Alumni;