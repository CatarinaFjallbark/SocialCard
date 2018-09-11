import React from 'react';
import styled from "styled-components";
import { connect } from 'react-redux'
import {
    increment,
    incrementSHARES,
    incrementCOMMENTS,
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

const SocialIcon = ({comments, incrementSHARES, shares, increment, count, incrementCOMMENTS}) => (
    <IconStyleRow>
        <div></div>
        <div>
            <img className="imageButtonStyle" src={comment} alt="comment" onClick={incrementCOMMENTS} />
            <IconStyle>{comments}</IconStyle>
            <img className="imageButtonStyle" src={share} alt="share" onClick={incrementSHARES} />
            <IconStyle>{shares}</IconStyle>
            <img className="imageButtonStyle" src={thumb} alt="thumb" onClick={increment} />
            <IconStyle>{count}</IconStyle>
            <img className="imageButtonStyle" src={mail} alt="mail" />
        </div>
    </IconStyleRow>
)

const mapStateToProps = ({ counter }, ownprops) => ({
    count: counter.list_of_cweets[ownprops.id].count,
    shares: counter.list_of_cweets[ownprops.id].shares,
    comments: counter.list_of_cweets[ownprops.id].comments,
    isIncrementing: counter.list_of_cweets[ownprops.id].isIncrementing,
    isIncrementingSHARES: counter.list_of_cweets[ownprops.id].isIncrementingSHARES,
    isIncrementingCOMMENTS: counter.list_of_cweets[ownprops.id].isIncrementingCOMMENTS
})

const mapDispatchToProps = (dispatch, ownprops) => ({
    increment: () => dispatch(increment(ownprops.id)),
    incrementSHARES: () => dispatch(incrementSHARES(ownprops.id)),
    incrementCOMMENTS: () => dispatch(incrementCOMMENTS(ownprops.id)),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SocialIcon)