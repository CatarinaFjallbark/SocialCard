import React from 'react';
import styled from "styled-components";
import SocialIcon from './SocialIcon'

const SCFooterStyle = styled.div`
    max-width: 40%;
    margin: auto;
`
const HrStyle = styled.hr`
    font-weight: lighter;
    color: gray;
`

const SCFooter = ({ handleUp }) => (
    <SCFooterStyle>
        <div>
            <div></div>
            <div>
                <SocialIcon
                    handleUp={handleUp}
                />
            </div>
        </div>
        <HrStyle />
    </SCFooterStyle>
);

export default SCFooter;
