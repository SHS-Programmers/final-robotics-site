import React from 'react';
import "./Calendar.css"

const Contact = () => {
    return (
        <div className="center adjust text flexy">
            <div className="frosted-glass">
                <h2 className="heading" style={{paddingTop: 40}}>Calendar</h2>
            </div>
            <div className="">
                <iframe
                    src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%230B8043&ctz=America%2FChicago&showTitle=1&showPrint=0&showTabs=1&title=Staley%20Robotics%20Calendar&showDate=1&showNav=1&showCalendars=0&showTz=0&src=c3RhbGV5cm9ib3RpY3NAZ21haWwuY29t&color=%237986CB"
                    style={{border: "solid 1px #777"}} width="800vw" height="600vh" title={"Calendar"}>
                </iframe>
            </div>
        </div>
    );
};

export default Contact;