'use client'
import React from 'react';

const Calendar: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center p-6 min-h-screen bg-gray-900">
            <div className="bg-gray-800/70 backdrop-blur-md rounded-xl p-6 mb-6 shadow-lg text-center">
                <h2 className="text-3xl font-bold text-green-500">Calendar</h2>
            </div>
            <div className="w-full max-w-5xl">
                <iframe
                    src="https://calendar.google.com/calendar/embed?height=1000&wkst=1&bgcolor=%230B8043&ctz=America%2FChicago&showTitle=1&showPrint=0&showTabs=1&title=Staley%20Robotics%20Calendar&showDate=1&showNav=1&showCalendars=0&showTz=0&src=c3RhbGV5cm9ib3RpY3NAZ21haWwuY29t&color=%237986CB"
                    style={{
                        border: "solid 1px #4CAF50",
                        width: "100%",
                        height: "100vh", // Make the iframe height responsive
                    }}
                    className="w-full h-auto border rounded-xl shadow-md"
                    title="Staley Robotics Calendar"
                ></iframe>
            </div>
        </div>
    );
};

export default Calendar;
