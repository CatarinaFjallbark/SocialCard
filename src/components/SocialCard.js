import React from 'react';
import SCHeader from './SCHeader'
import SocialImage from './SocialImage'
import SCFooter from './SCFooter'

const SocialCard = ({header, account, handleClick, open, handleUp}) => (
  <div>
    <SCHeader
      header={header}
      account={account}
      handleClick={handleClick}
    />
    {open && <SocialImage />}
    <SCFooter
      handleUp={handleUp}
    />
  </div>
);

export default SocialCard;
