import React from 'react';
import './styles.css';

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    return (
        <div className="center adjust text">
            <div className="">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2837.0996291106194!2d-94.54590295669351!3d39.28987882079203!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87c0576f54c35871%3A0x1a6b3f59cf67a0fa!2sStaley%20High%20School!5e0!3m2!1sen!2sus!4v1701886467380!5m2!1sen!2sus"
                    width="600" height="450" style={{border: "0"}} loading="eager" className="fixIframe"
                    referrerPolicy="no-referrer-when-downgrade" title={"Staley Location Map"}>

                </iframe>
            </div>
            <div className="frosted-glass">
                <h2 className="heading" style={{paddingTop: 40}}>Contact Info</h2>
                <p style={{textAlign: "left", marginLeft: "20px"}}>Email: <br/><br/>

                    <span style={{marginLeft: "20px"}}>staleyrobotics@gmail.com</span><br/><br/>

                    Faculty Advisors: <br/><br/>

                    <span style={{marginLeft: "20px"}}>Aaron Dalton  - aaron.dalton@nkcschools.org</span> <br/>

                    <span style={{marginLeft: "20px"}}>Jarrod Sims - jarrod.sims@nkcschools.org</span> <br/><br/>

                    Address: <br/><br/>

                    <span style={{marginLeft: "20px"}}>2800 NE Shoal Creek Pkwy, Kansas City, MO 64156</span><br/>
                </p>
            </div>
        </div>
    );
};