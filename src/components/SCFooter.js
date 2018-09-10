import React from 'react';
import styled from "styled-components";
import SocialIcon from './SocialIcon'
import './style.css';

const SCFooterStyle = styled.div`
    max-width: 40%;
    margin: auto;
`
const HrStyle = styled.hr`
    font-weight: lighter;
    color: gray;
`

class SCFooter extends React.Component {
    render() {
        const classNameMobileIcons = this.props.isMobile ? '' : 'SCWidth';
        return (
            <div className={classNameMobileIcons}>
                <div>
                    <div></div>
                    <div>
                        <SocialIcon
                            handleUp={this.props.handleUp}
                        />
                    </div>
                </div>
                <HrStyle />
            </div>
        );
    }
}
export default SCFooter;
