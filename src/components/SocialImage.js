import React from 'react';
import styled from "styled-components";

const GridItemTwo = styled.div`
    background: ${props => props.color};
    color: white;
    display:grid;
    grid-template-columns: 60px 1fr;
    padding: 5px;
`
const GridItemTwoB = styled.div`
    border:1px solid #d3d3d3;
    padding: 10px;
`
const TextStyle = styled.span`
    display: flex;
    justify-content: center;
    align-self: center;
    font-size: 35px;
`
const ImgSquareStyle = styled.img`
    width:50px;
    height: auto;
`
const BoldDiv = styled.div`
    font-weight: bold;
`
const AncoreStyle = styled.a`
    font-weight: lighter;
    color: gray;
`
const MobileStyle = styled.div`
    background: ${props => props.isMobile && props.color};
    margin: ${props => !props.isMobile && "auto"};   
    max-width: ${props => !props.isMobile && "40%"};
    height: ${props => !props.isMobile && "250px"};
    display: ${props => !props.isMobile && "grid"};
    grid-template-columns: ${props => !props.isMobile && "60px 1fr"};
    background-color: white;

`
const MobileStyleText = styled.div`
    margin: ${props => !props.isMobile && "auto"};   
    max-width: ${props => !props.isMobile && "40%"};
    display: ${props => !props.isMobile && "grid"};
    grid-template-columns: ${props => !props.isMobile && "60px 1fr"};
    background-color: white;
`
const SocialImage = ({isMobile, color, postText, headLine}) => (
    <div>
        <MobileStyle isMobile={isMobile} color={color}>
            <div></div>
            <GridItemTwo color={color}>
                <ImgSquareStyle src="https://pbs.twimg.com/profile_images/1002604104194056192/IEoNsLNM_400x400.jpg" alt="profile"></ImgSquareStyle>
                <TextStyle>{headLine}</TextStyle>
            </GridItemTwo>
        </MobileStyle>
        <MobileStyleText isMobile={isMobile}>
            <div></div>
            <GridItemTwoB>
                <div>
                    <BoldDiv>{headLine}</BoldDiv>
                    <div>{postText}</div>
                    <AncoreStyle href="https://daveceddia.com/react-practice-projects">projects.io</AncoreStyle>
                </div>
            </GridItemTwoB>
        </MobileStyleText>
    </div>
);

export default SocialImage;