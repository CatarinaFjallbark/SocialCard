import React from 'react';
import styled from "styled-components";
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
    increment,
    incrementSHARES,
    incrementCOMMENTS,
    incrementAsyncCOMMENTS,
} from '../reducers/counter'
import share from "../resourses/share.png";
import mail from "../resourses/mail.png";
import thumb from "../resourses/thumb.png";
import comment from "../resourses/comment.png";

const IconStyleRow = styled.div`
    display: grid;
    grid-template-columns: 60px 1fr;
    padding: 10px;
`
const IconStyle = styled.span`
    font-size: 1.1em;
    padding-left: 5px;
    padding-right: 25px;
`

const SocialIcon = ({ incrementAsyncCOMMENTS, comments, incrementSHARES, shares, increment, count }) => (
    <IconStyleRow>
        <div></div>
        <div>
            <img className="imageButtonStyle" src={comment} alt="comment" onClick={incrementAsyncCOMMENTS} />
            <IconStyle>{comments}</IconStyle>
            <img className="imageButtonStyle" src={share} alt="share" onClick={incrementSHARES} />
            <IconStyle>{shares}</IconStyle>
            <img className="imageButtonStyle" src={thumb} alt="thumb" onClick={increment} />
            <IconStyle>{count}</IconStyle>
            <img className="imageButtonStyle" src={mail} alt="mail" />
        </div>
    </IconStyleRow>
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