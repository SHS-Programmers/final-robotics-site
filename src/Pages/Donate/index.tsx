import React from 'react';
import './styles.css';

export default () => {
    return (
        <div className="center adjust">
            <div className="frosted-glass Font left">
                <h2 className="heading">Support Our Team!</h2>
                <p>
                    Unfortunately, the only way currently to donate directly (from outside the school's falcon club) is by getting in touch with our business team. <br/><br/>
                    Visit our <a href={"/contact"} style={{color:"green", textDecoration:"underline"}}>contact page</a> or email us at staleyrobotics@gmail.com
                </p>
            </div>
        </div>
    );
}