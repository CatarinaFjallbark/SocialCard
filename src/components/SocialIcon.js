import React, { Component } from 'react';
import share from "./share.png";
import mail from "./mail.png";
import thumb from "./thumb.png";
import comment from "./comment.png";
import "./SocialIcon.css";


class SocialIcon extends Component {

    render() {
        return (
            <div className="displayHor">
              <img className="imageButtonStyle" src={comment} alt="comment" onClick={() => this.props.handleUp({comments: this.props.comments+1})}/>
               <span className="numberIcon">{this.props.comments}</span>
               <img className="imageButtonStyle" src={share} alt="share" onClick={() => this.props.handleUp({shares: this.props.shares+1})} />
               <span className="numberIcon">{this.props.shares}</span>
               <img className="imageButtonStyle" src={thumb} alt="thumb" onClick={() => this.props.handleUp({likes: this.props.likes+1})}/>
               <span className="numberIcon">{this.props.likes}</span>
               <img className="imageButtonStyle" src={mail} alt="mail" />
            </div>
        );
    }
}

export default SocialIcon;
