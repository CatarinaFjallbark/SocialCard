import React from 'react';
import './SCFooter.css';
import SocialIcon from './SocialIcon'


const SCFooter = ({ handleUp }) => (
    <div className="content">
        <div className="imageStylec">
            <div></div>
            <div className="iconStyle">
                <SocialIcon
                    handleUp={handleUp}
                />
            </div>
        </div>
        <hr className="lightSuperStyle" />
    </div>
);

export default SCFooter;
