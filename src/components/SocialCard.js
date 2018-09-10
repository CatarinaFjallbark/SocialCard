import React from 'react';
import SCHeader from './SCHeader'
import SocialImage from './SocialImage'
import SCFooter from './SCFooter'

const SocialCard = ({header, account, handleClick, isMobile, open, handleUp}) => (
  <div>
    <SCHeader
      header={header}
      account={account}
      handleClick={handleClick}
      isMobile={isMobile}
    />
    {open && <SocialImage isMobile={isMobile}/>}
    <SCFooter
      handleUp={handleUp}
      isMobile={isMobile}
    />
  </div>
);

export default SocialCard;
