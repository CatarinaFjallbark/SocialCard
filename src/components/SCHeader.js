import React, { Component } from 'react';
import "./SCHeader.css";
import arrow from "./arrow.png";

let accountTw = "ThePracticalDev";

class SCHeader extends Component {
    render() {
        return (
            <div className="content">
                <hr className="lightSuperStyle" />
                <header>
                    <img className="imgStyles" src="https://pbs.twimg.com/profile_images/1002604104194056192/IEoNsLNM_400x400.jpg" alt="profile" />
                    <div className="container">
                        <div className="displayHor">
                            <span className="boldStyle">{`${this.props.header} \u00A0`}</span>
                            <span className="lightStyle">{this.props.account} Sep 4 2018</span>
                        </div>
                        <div>Learning React? Start Small.</div>
                        <div>{`{ cred:`} <a href={`https://www.twitter.com/${accountTw}`}>{accountTw}</a>{` }`}</div>
                    </div>
                    <div className="buttonImage" onClick={this.props.handleClick}><img src={arrow} alt="arrow" /></div>
                </header>
            </div>
        );
    }
}

export default SCHeader;