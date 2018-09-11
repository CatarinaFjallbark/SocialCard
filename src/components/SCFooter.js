import React from 'react';
import styled from "styled-components";
import SocialIcon from './SocialIcon'
import './style.css';

const HrStyle = styled.hr`
    font-weight: lighter;
    color: gray;
`
const MobileIcons = styled.div`
    margin: ${props => !props.isMobile && "auto"};   
    max-width: ${props => !props.isMobile && "40%"};
`

const SCFooter = ({ isMobile, handleUp, id, comments, incrementSHARES, shares, increment, thumbs, incrementCOMMENTS}) => (
    <MobileIcons isMobile={isMobile}>
        <div>
            <div></div>
            <div>
                <SocialIcon 
                    id={id} 
                    handleUp={handleUp} 
                    comments={comments}
                    incrementSHARES={incrementSHARES}
                    shares={shares}
                    increment={increment}
                    thumbs={thumbs}
                    incrementCOMMENTS={incrementCOMMENTS}
                />
            </div>
        </div>
        <HrStyle />
    </MobileIcons>
);
export default SCFooter;
