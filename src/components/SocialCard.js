import React, { Component } from 'react';
import SCHeader from './SCHeader'
import SocialImage from './SocialImage'
import SCFooter from './SCFooter'



class SocialCard extends Component {
  render() {
    return (
      <div>
        <SCHeader 
         header = {this.props.header} 
         account = {this.props.account}
         handleClick = {this.props.handleClick}
        />
        {this.props.open && <SocialImage />}
        <SCFooter 
        handleUp = {this.props.handleUp}
        />
      </div>
    );
  }
}

export default SocialCard;
