import React, { Component } from 'react';
import "./SocialImage.css";

class SocialImage extends Component {

    render() {
        return (
            <div>
                <div className="imageStyle">
                    <div></div>
                    <div className="grid-item2">
                        <img className="imageSquare" src="https://pbs.twimg.com/profile_images/1002604104194056192/IEoNsLNM_400x400.jpg" alt="profile" />
                        <span className="textDiv">Learning React? Start Small.</span>
                    </div>
                </div>
                <div className="imageStyleb">
                    <div className="grid-item1a"></div>
                    <div className="grid-item2b">
                    <div className="boldStyle">Learning React? Start Small.</div>
                    <div>Can't pry yourself away from the tutorials? The cure is to make tiny little experiment apps.</div>
                    <a className="lightStyle" href="https://daveceddia.com/react-practice-projects">projects.io</a>
                    </div>
                </div>
            </div>

        );
    }
}

export default SocialImage;