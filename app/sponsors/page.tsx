import React from 'react';

const Sponsors = () => {
    return (
        <div className="flex flex-col items-center p-4">
            {/* Header Section */}
            <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg w-full max-w-4xl">
                <h2 className="text-3xl font-bold font-jockey-one">Sponsors</h2>
                <p className="mt-4 text-base">
                    Thank you to our wonderful sponsors. Sponsors are those who help our team financially and by mentoring the team. We could not be successful without them.
                </p>
                <p className="mt-4">
                    We have four different levels of contribution to give our sponsors distinction for their support:
                </p>
                <ul className="list-disc list-inside mt-4">
                    <li>$250 - <strong>Bronze</strong>: Your name is listed on our website&#39;s sponsors page.</li>
                    <li>$500 - <strong>Silver</strong>: Your logo and a link to your website are listed on our website&#39;s sponsors page, and your logo is printed on our team shirt.</li>
                    <li>$1000 - <strong>Gold</strong>: A designed plaque, our robot displays your logo, and all Silver/Bronze rewards.</li>
                    <li>$2000 - <strong>Platinum</strong>: Your name is announced with our robot at competitions, and all Gold/Silver/Bronze rewards.</li>
                </ul>
            </div>

            {/* Sponsors Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 w-full max-w-4xl">
                {/* Platinum */}
                <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-bold font-jockey-one">Platinum</h2>
                    <img src="/Labconco100V.gif" alt="Labconco Logo" className="mt-4 max-w-full" />
                    <a href="https://www.labconco.com/" className="text-green-400 underline block mt-2">Labconco Website</a>
                    <img src="/Cat.svg" alt="CAT Casey Behringer Logo" className="mt-4 max-w-full" />
                    <a href="https://www.cat.com/en_US.html" className="text-green-400 underline block mt-2">Cat.com Website</a>
                    <img src="/Wiz-Logo.svg" alt="Wiz.io Logo" className="mt-4 max-w-full" />
                    <a href="https://www.wiz.io/" className="text-green-400 underline block mt-2">Wiz.io Website</a>
                    <img src="/NKCSCHOOLS.svg" alt="NKC Schools Logo" className="mt-4 max-w-full" />
                    <a href="https://www.nkcschools.org/" className="text-green-400 underline block mt-2">North Kansas City School District Website</a>
                    <img src="/ArgosyFoundation.svg" alt="Argosy Foundation Logo" className="mt-4 max-w-full" />
                    <a href="https://www.argosyfoundation.org/" className="text-green-400 underline block mt-2">Argosy Foundation Website</a>
                </div>

                {/* Gold */}
                <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-bold font-jockey-one">Gold</h2>
                    <img src="/Alice.svg" alt="Alice Scoopers Logo" className="mt-4 max-w-full" />
                    <a href="https://www.alicescooperskc.com/" className="text-green-400 underline block mt-2">Alice Scooper&#39;s Website</a>
                </div>

                {/* Silver */}
                <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-bold font-jockey-one">Silver</h2>
                    <img src="/KCStem.svg" alt="KC Stem Alliance Logo" className="mt-4 max-w-full" />
                    <a href="https://www.kcstem.org/" className="text-green-400 underline block mt-2">KC Stem Alliance Website</a>
                </div>

                {/* Bronze */}
                <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-bold font-jockey-one">Bronze</h2>
                </div>
            </div>

            {/* Special Thanks Section */}
            <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg mt-8 w-full max-w-4xl">
                <p className="font-bold">A very special thanks goes to the <strong>Rindels</strong> and <strong>Koontz</strong> families for their hard work and support!</p>
                <hr className="my-4" />
                <p>
                    Tyler Rindels is our programming mentor. He is an amazing coach who has helped us learn how to code our robot with clean, quick, and modern coding practices. He has been a mentor for the team since 2023, and has been a huge help to the team.
                </p>
                <hr className="my-4" />
                <p>
                    The Koontz family has been a huge help to the team. They have helped us with our robot design and development, and have been our representatives to our school district for funding and support.
                </p>
            </div>
        </div>
    );
};

export default Sponsors;
