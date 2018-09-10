import React from 'react';
import styled from "styled-components";

const ImageStyle = styled.div`
    max-width: 40%;
    margin: auto;
    height: 250px;
    display: grid;
    grid-template-columns: 60px 1fr;
`
const ImageStyleMinor = styled.div`
    max-width: 40%;
    margin: auto;
    display: grid;
    grid-template-columns: 60px 1fr;
`

const GridItemTwo = styled.div`
    background: pink;
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

const SocialImage = () => (
    <div>
        <ImageStyle>
            <div></div>
            <GridItemTwo>
                <ImgSquareStyle src="https://pbs.twimg.com/profile_images/1002604104194056192/IEoNsLNM_400x400.jpg" alt="profile"></ImgSquareStyle>
                <TextStyle>Learning React? Start Small.</TextStyle>
            </GridItemTwo>
        </ImageStyle>
        <ImageStyleMinor>
            <div></div>
            <GridItemTwoB>
                <div>
                    <BoldDiv>Learning React? Start Small.</BoldDiv>
                    <div>Can't pry yourself away from the tutorials? The cure is to make tiny little experiment apps.</div>
                    <AncoreStyle href="https://daveceddia.com/react-practice-projects">projects.io</AncoreStyle>
                </div>
            </GridItemTwoB>
        </ImageStyleMinor>
    </div>
);

export default SocialImage;