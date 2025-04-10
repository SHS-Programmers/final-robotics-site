import React from "react";

const Contact = () => {
    return (
        <div className="flex flex-col md:flex-row justify-center items-stretch gap-8 p-6 pt-40 min-h-screen">
            {/* FRC Section */}
            <div className="flex flex-col w-full md:w-1/2">
                <div className="w-full">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2837.0996291106194!2d-94.54590295669351!3d39.28987882079203!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87c0576f54c35871%3A0x1a6b3f59cf67a0fa!2sStaley%20High%20School!5e0!3m2!1sen!2sus!4v1701886467380!5m2!1sen!2sus"
                        width="100%"
                        height="450"
                        style={{border: "0"}}
                        loading="eager"
                        className="rounded-lg shadow-lg"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Staley Location Map"
                    ></iframe>
                </div>
                <div className="w-full bg-gray-800 bg-opacity-80 rounded-lg p-6 shadow-lg text-gray-300 flex-1">
                    <h2 className="text-2xl font-bold text-green-400 mb-4">Contact Info for FRC</h2>
                    <div className="text-left space-y-6">
                        <div>
                            <h3 className="font-semibold">Email:</h3>
                            <p className="pl-4">staleyrobotics@gmail.com</p>
                        </div>
                        <div>
                            <h3 className="font-semibold">Faculty Advisors:</h3>
                            <p className="pl-4">
                                Thi Nguyen, Ed.D:{" "}
                                <a
                                    href="mailto:thi.nguyen@nkcschools.org"
                                    className="text-green-400 hover:underline"
                                >
                                    thi.nguyen@nkcschools.org
                                </a>
                            </p>
                            <p className="pl-4">
                                Aaron Gudde:{" "}
                                <a
                                    href="mailto:aaron.gudde@nkcschools.org"
                                    className="text-green-400 hover:underline"
                                >
                                    aaron.gudde@nkcschools.org
                                </a>
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold">Address:</h3>
                            <p className="pl-4">
                                2800 NE Shoal Creek Pkwy, Kansas City, MO 64156
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* FTC Section */}
            <div className="flex flex-col w-full md:w-1/2">
                <div className="w-full">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3088.138034509128!2d-94.57472638849745!3d39.28512002361571!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87c0590051e3afc5%3A0x44ee7f00432a2a50!2sNew%20Mark%20Middle%20School!5e0!3m2!1sen!2sus!4v1738965830191!5m2!1sen!2sus"
                        width="100%"
                        height="450"
                        style={{border: 0}}
                        loading="eager"
                        className="rounded-lg shadow-lg"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Staley Location Map"
                    ></iframe>
                </div>
                <div className="w-full bg-gray-800 bg-opacity-80 rounded-lg p-6 shadow-lg text-gray-300 flex-1">
                    <h2 className="text-2xl font-bold text-green-400 mb-4">Contact Info for FTC</h2>
                    <div className="text-left space-y-6">
                        <div>
                            <h3 className="font-semibold">Faculty Advisors:</h3>
                            <p className="pl-4">
                                Jennifer Clark{" "}
                                <a
                                    href="mailto:jennifer.clark@nkcschools.org"
                                    className="text-green-400 hover:underline"
                                >
                                    jennifer.clark@nkcschools.org
                                </a>
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold">Address:</h3>
                            <p className="pl-4">
                                NE 106th St, Kansas City, MO 64155
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;