import React from 'react';
import { connect } from 'react-redux'

import SCHeader from './SCHeader'
import SocialImage from './SocialImage'
import SCFooter from './SCFooter'

import {
  increment,
  incrementSHARES,
  incrementCOMMENTS,
  openOrCLOSE,
} from '../reducers/counter'

class SocialCard extends React.Component {
  render() {
    return (
      <div>
        <SCHeader
          header={this.props.header}
          account={this.props.account}
          date={this.props.date}
          handleClick={this.props.openOrCLOSE}
          isMobile={this.props.isMobile}
        />
        {this.props.open && <SocialImage isMobile={this.props.isMobile} color={this.props.color} />}
        <SCFooter
          isMobile={this.props.isMobile}
          id={this.props.id}
          comments={this.props.comments}
          incrementSHARES={this.props.incrementSHARES}
          shares={this.props.shares}
          increment={this.props.increment}
          thumbs={this.props.thumbs}
          incrementCOMMENTS={this.props.incrementCOMMENTS}
        />
      </div >
    );
  }
}

const mapStateToProps = ({ counter }, ownprops) => {
  return {
    thumbs: counter.list_of_cweets[ownprops.id].thumb,
    shares: counter.list_of_cweets[ownprops.id].shares,
    comments: counter.list_of_cweets[ownprops.id].comments,
    open: counter.list_of_cweets[ownprops.id].open,
    isIncrementing: counter.list_of_cweets[ownprops.id].isIncrementing,
    isIncrementingSHARES: counter.list_of_cweets[ownprops.id].isIncrementingSHARES,
    isIncrementingCOMMENTS: counter.list_of_cweets[ownprops.id].isIncrementingCOMMENTS
  }
}

const mapDispatchToProps = (dispatch, ownprops) => ({
  increment: () => dispatch(increment(ownprops.id)),
  incrementSHARES: () => dispatch(incrementSHARES(ownprops.id)),
  incrementCOMMENTS: () => dispatch(incrementCOMMENTS(ownprops.id)),
  openOrCLOSE: () => dispatch(openOrCLOSE(ownprops.id)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SocialCard);
