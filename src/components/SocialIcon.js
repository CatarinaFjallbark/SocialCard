import React from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
    increment,
    incrementAsync
} from '../reducers/counter'
import share from "../resourses/share.png";
import mail from "../resourses/mail.png";
import thumb from "../resourses/thumb.png";
import comment from "../resourses/comment.png";
import "./SocialIcon.css";

const SocialIcon = props => (
    <div className="displayHor">
        <img className="imageButtonStyle" src={comment} alt="comment" onClick={() => props.handleUp({ comments: props.comments + 1 })} />
        <span className="numberIcon">{props.comments}</span>
        <img className="imageButtonStyle" src={share} alt="share" onClick={() => props.handleUp({ shares: props.shares + 1 })} />
        <span className="numberIcon">{props.shares}</span>
        <img className="imageButtonStyle" src={thumb} alt="thumb" onClick={props.increment} />
        <span className="numberIcon">{props.count}</span>
        <img className="imageButtonStyle" src={mail} alt="mail" />
    </div>
)

const mapStateToProps = ({ counter }) => ({
    count: counter.count,
    isIncrementing: counter.isIncrementing,
})

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            increment,
        },
        dispatch
    )

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SocialIcon)