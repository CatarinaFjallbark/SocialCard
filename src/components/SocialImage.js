import React from 'react';
import styled from "styled-components";

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

class SocialImage extends React.Component {
    render() {
    const classNameMobileSize = this.props.isMobile ? 'SCGridMobile' : 'SCWidth SCGrid';
    const classNameMobileSizeText = this.props.isMobile ? '' : 'SCWidth SCGridText';
        return (
            <div>
                <div className={classNameMobileSize}>
                    <div></div>
                    <GridItemTwo>
                        <ImgSquareStyle src="https://pbs.twimg.com/profile_images/1002604104194056192/IEoNsLNM_400x400.jpg" alt="profile"></ImgSquareStyle>
                        <TextStyle>Learning React? Start Small.</TextStyle>
                    </GridItemTwo>
                </div>
                <div className={classNameMobileSizeText}>
                    <div></div>
                    <GridItemTwoB>
                        <div>
                            <BoldDiv>Learning React? Start Small.</BoldDiv>
                            <div>Can't pry yourself away from the tutorials? The cure is to make tiny little experiment apps.</div>
                            <AncoreStyle href="https://daveceddia.com/react-practice-projects">projects.io</AncoreStyle>
                        </div>
                    </GridItemTwoB>
                </div>
            </div>
        );
    }
}

export default SocialImage;