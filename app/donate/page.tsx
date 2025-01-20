import React from "react";
import Link from "next/link";

const Donate = () => {
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-900 text-gray-300">
            <div className="bg-gray-800 bg-opacity-80 p-8 rounded-lg shadow-lg max-w-lg w-full">
                <h2 className="text-2xl font-bold text-green-400 mb-4">Support Our Team!</h2>
                <p className="leading-relaxed">
                    Unfortunately, the only way currently to donate directly (from outside the school's Falcon Club) is by getting in touch with our business team. <br />
                    <br />
                    Visit our{" "}
                    <Link href="/contact">
                        <a className="text-green-400 underline hover:text-green-300">contact page</a>
                    </Link>{" "}
                    or email us at{" "}
                    <a
                        href="mailto:staleyrobotics@gmail.com"
                        className="text-green-400 underline hover:text-green-300"
                    >
                        staleyrobotics@gmail.com
                    </a>.
                </p>
            </div>
        </div>
    );
};

export default Donate;
