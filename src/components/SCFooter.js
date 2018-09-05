import React, { Component } from 'react';
import './SCFooter.css';
import SocialIcon from './SocialIcon'


class SCFooter extends Component {

    render() {
        return (
            <div className="content">
                <div className="imageStylec">
                    <div></div>
                    <div className="iconStyle">
                        <SocialIcon 
                        handleUp = {this.props.handleUp}
                        comments={this.props.comments}
                        shares={this.props.shares}
                        likes={this.props.likes}
                        />
                    </div>
                </div>
                <hr className="lightSuperStyle" />
            </div>
        );
    }
}

export default SCFooter;
