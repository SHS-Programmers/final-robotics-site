import React from "react";
import Link from "next/link";

const Fundraising = () => {
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-900 text-gray-300">
            <div className="bg-gray-800 bg-opacity-80 p-8 rounded-lg shadow-lg max-w-lg w-full">
                <h2 className="text-2xl font-bold text-green-400 mb-4">Fundraising</h2>
                <strong className="block mb-4">
                    The information below may not be accurate, and many fundraising options listed could be outdated. <br />
                    Please do{" "} <Link href="/contact"><span className="text-green-400 underline hover:text-green-300">contact</span> </Link>{" "} us if you would like to donate to our robotics program.
                </strong>
                <p className="leading-relaxed mb-4">
                    Our goal is to raise $28,000 per year to operate our robotics program.
                    <br />
                    <br />
                    This covers the cost of:
                </p>
                <ul className="list-disc list-inside mb-4 space-y-2">
                    <li>Competition entry fees = $15,000</li>
                    <li>Travel Expenses = $6,000</li>
                    <li>Operating budget (shirts, tools, equipment, safety equip. etc.) = $2,000</li>
                    <li>Robot parts and equipment = $5,000+</li>
                </ul>
                <p className="leading-relaxed mb-4">
                    Please take a moment to visit our current fundraisers. Every bit supports our team:
                </p>
                <ul className="list-none space-y-2">
                    <li>
                        -{" "}
                        <Link href="/donate">
                            <p className="text-green-400 underline hover:text-green-300">Donations</p>
                        </Link>
                    </li>
                    <li>
                        -{" "}
                        <a
                            href="https://www.staleyfalconclub.com/falcon-club-memberships/"
                            className="text-green-400 underline hover:text-green-300"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Falcon Club
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Fundraising;
