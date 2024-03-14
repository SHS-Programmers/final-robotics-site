import React from 'react';
import "./styles.css"

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    return (
        <div className="center adjust">
            <div className="frosted-glass Font left">
                <h2>Fundraising</h2>
                <strong className="">
                    The information below may not be accurate, and many fundraising options listed could be outdated.<br/>

                    Please do <a href={"/contact"} style={{color:"Green",textDecoration:"underline"}}>contact</a> us if you would like to donate to our robotics program.
                </strong>
                <p>
                    <br/>
                    Our goal is to raise $28,000 per year to operate our robotics program.
                    <br/><br/>
                    This covers the cost of:
                    <menu className="Font left">
                        <li>
                            Competition entry fees = $15,000
                        </li>
                        <li>
                            Travel Expenses = $6,000
                        </li>
                        <li>
                            Operating budget (shirts, tools, equipment, safety equip. etc.) = $2,000
                        </li>
                        <li>
                            Robot parts and equipment = $5,000+
                        </li>
                    </menu>
                    Please take a moment to visit our current fundraisers. Every bit supports our team.
                    <menu className="Font left">
                        <a href={"/donate"} style={{color: "Green", textDecoration: "underline"}}>Donations</a>
                        <a href={"https://www.staleyfalconclub.com/falcon-club-memberships/"}
                            style={{color: "Green", textDecoration: "underline"}}>Falcon Club</a>
                    </menu>
                </p>
            </div>
        </div>
    );
};