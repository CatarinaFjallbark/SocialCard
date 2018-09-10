import React from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
    increment,
    incrementAsync,
    incrementSHARES,
    incrementAsyncSHARES,
    incrementCOMMENTS,
    incrementAsyncCOMMENTS,
} from '../reducers/counter'
import share from "../resourses/share.png";
import mail from "../resourses/mail.png";
import thumb from "../resourses/thumb.png";
import comment from "../resourses/comment.png";
import "./SocialIcon.css";

const SocialIcon = props => (
    <div className="displayHor">
        <img className="imageButtonStyle" src={comment} alt="comment" onClick={props.incrementAsyncCOMMENTS} />
        <span className="numberIcon">{props.comments}</span>
        <img className="imageButtonStyle" src={share} alt="share" onClick={props.incrementSHARES} />
        <span className="numberIcon">{props.shares}</span>
        <img className="imageButtonStyle" src={thumb} alt="thumb" onClick={props.increment} />
        <span className="numberIcon">{props.count}</span>
        <img className="imageButtonStyle" src={mail} alt="mail" />
    </div>
)

const mapStateToProps = ({ counter }) => ({
    count: counter.count,
    shares: counter.shares,
    comments: counter.comments,
    isIncrementing: counter.isIncrementing,
    isIncrementingSHARES: counter.isIncrementingSHARES,
    isIncrementingCOMMENTS: counter.isIncrementingCOMMENTS,

})

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            increment,
            incrementSHARES,
            incrementCOMMENTS,
            incrementAsyncCOMMENTS,
        },
        dispatch
    )

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SocialIcon)