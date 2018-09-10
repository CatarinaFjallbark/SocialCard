import React from 'react';
import styled from 'styled-components';
import arrow from '../resourses/arrow.png';
import './style.css';

let accountTw = "ThePracticalDev";

const SCHeaderImgStyle = styled.img`
    height: 3em;
    width: 3em;
    border-radius: 50%;
    margin-right: 1em;
    margin-top:5px;
`
const MarginStyle = styled.div`
    margin-bottom: 7px;
    display:flex;
    justify-content: center;
`
const AncoreStyle = styled.a`
    color:#72bcd4;
`
const HrStyle = styled.hr`
    font-weight: lighter;
    color: gray;
`
const BoldSpan = styled.span`
    font-weight: bold;
`
const LightSpan = styled.span`
    font-weight: lighter;
    color: gray;
`
const FolderStyle = styled.span`
    cursor: pointer; 
    margin-left: auto;
`
class SCHeader extends React.Component {
    render() {
        const classNameMobileText = this.props.isMobile ? 'mobileTextHeader' : '';
        const classNameMobileSize = this.props.isMobile ? '' : 'SCWidth';
        return (
            <div className={classNameMobileSize}>
                <HrStyle />
                <MarginStyle>
                    <SCHeaderImgStyle src="https://pbs.twimg.com/profile_images/1002604104194056192/IEoNsLNM_400x400.jpg" alt="profile"></SCHeaderImgStyle>
                    <div>
                        <div>
                            <BoldSpan>{`${this.props.header} \u00A0`}</BoldSpan>
                            <LightSpan>{this.props.account} Sep 4 2018</LightSpan>
                        </div>
                        <div className={classNameMobileText}>
                            <div>Learning React? Start Small.</div>
                            <div>{`{ cred:`} <AncoreStyle href={`https://www.twitter.com/${accountTw}`}>{accountTw}</AncoreStyle>{` }`}</div>
                        </div>
                    </div>
                    <FolderStyle onClick={this.props.handleClick}><img src={arrow} alt="arrow" /></FolderStyle>
                </MarginStyle>
            </div>

        )
    }
};

export default SCHeader;