import React from 'react';
import styled from 'styled-components';
import arrow from '../resourses/arrow.png';
import './style.css';

let accountTw = "ThePracticalDev";

const SCHeaderImgStyle = styled.img`
    height: ${props => props.isMobile ? "6em" : "3em"}; 
    width: ${props => props.isMobile ? "6em" : "3em"}; 
    border-radius: 50%;
    margin-right: 1em;
    margin-top:5px;
    align-self: center;
`
const MarginStyle = styled.div`
    margin-bottom: 7px;
    display: flex; 
    justify-content: ${props => !props.isMobile && "center"}; 
    flex-direction: ${props => props.isMobile && "column"}; 
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
const MobileTextHeader = styled.div`
    max-width: ${props => props.isMobile && "40%"}; 
    display: ${props => props.isMobile && "none"}; 
`
const MobileSize = styled.div`
    max-width: ${props => !props.isMobile && "40%"}; 
    margin: ${props => !props.isMobile && "auto"}; 
`

const SCHeader = ({isMobile, header, account, date, handleClick}) =>(
            <MobileSize isMobile={isMobile}>
                <HrStyle />
                <MarginStyle isMobile={isMobile}>
                    <SCHeaderImgStyle isMobile={isMobile} src="https://pbs.twimg.com/profile_images/1002604104194056192/IEoNsLNM_400x400.jpg" alt="profile"></SCHeaderImgStyle>
                    <div>
                        <div>
                            <BoldSpan>{`${header} \u00A0`}</BoldSpan>
                            <LightSpan>{account} {date}</LightSpan>
                        </div>
                        <MobileTextHeader isMobile={isMobile}>
                            <div>Learning React? Start Small.</div>
                            <div>{`{ cred:`} <AncoreStyle href={`https://www.twitter.com/${accountTw}`}>{accountTw}</AncoreStyle>{` }`}</div>
                        </MobileTextHeader>
                    </div>
                    <FolderStyle onClick={handleClick}><img src={arrow} alt="arrow" /></FolderStyle>
                </MarginStyle>
            </MobileSize>

        )

export default SCHeader;