import React from 'react';
import styled from 'styled-components';
import SocialIcon from './SocialIcon';

const HrStyle = styled.hr`
    font-weight: lighter;
    color: gray;
`;
const MobileIcons = styled.div`
    margin: ${props => !props.isMobile && 'auto'};   
    max-width: ${props => !props.isMobile && '40%'};
`;
const Remove = styled.div`
    color: gray;
    display:flex;
    justify-content: flex-end;
    align-items: center;
    
`;
const Wrapper = styled.div`
    display:grid;
    grid-template-columns: 0px 280px 1fr;
    background-color: white;
`;

const SCFooter = ({
  isMobile,
  handleUp,
  id, comments,
  incrementSHARES,
  shares,
  increment,
  thumbs,
  incrementCOMMENTS,
  removeAC,
  removeACState,
}) => (
  <MobileIcons isMobile={isMobile}>
    <Wrapper>
      <div />
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
      <Remove onClick={() => {
        removeAC(id);
        removeACState(id);
      }}
      >
remove

      </Remove>
    </Wrapper>
    <HrStyle />
  </MobileIcons>
);
export default SCFooter;
