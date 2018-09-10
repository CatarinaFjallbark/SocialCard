import React from 'react';
import "./SCHeader.css";
import arrow from "../resourses/arrow.png";

let accountTw = "ThePracticalDev";

const SCHeader = ({header, account, handleClick}) => (
    <div className="content">
        <hr className="lightSuperStyle" />
        <header>
            <img className="imgStyles" src="https://pbs.twimg.com/profile_images/1002604104194056192/IEoNsLNM_400x400.jpg" alt="profile" />
            <div className="container">
                <div className="displayHor">
                    <span className="boldStyle">{`${header} \u00A0`}</span>
                    <span className="lightStyle">{account} Sep 4 2018</span>
                </div>
                <div>Learning React? Start Small.</div>
                <div>{`{ cred:`} <a href={`https://www.twitter.com/${accountTw}`}>{accountTw}</a>{` }`}</div>
            </div>
            <div className="buttonImage" onClick={handleClick}><img src={arrow} alt="arrow" /></div>
        </header>
    </div>
);

export default SCHeader;