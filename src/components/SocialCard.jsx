import React from 'react';
import { connect } from 'react-redux';

import SCHeader from './SCHeader';
import SocialImage from './SocialImage';
import SCFooter from './SCFooter';

import {
  increment,
  incrementSHARES,
  incrementCOMMENTS,
  openOrCLOSE,
} from '../reducers/counter';

class SocialCard extends React.Component {
  render() {
    const {
      header,
      account,
      date,
      openOrCLOSEprop,
      isMobile,
      headLine,
      color,
      postText,
      id,
      commentsprop,
      openprop,
      incrementSHARESprop,
      sharesprop,
      incrementprop,
      thumbsprop,
      incrementCOMMENTSprop,
      removeAC,
      removeACState,
    } = this.props;
    return (
      <div>
        <SCHeader
          header={header}
          account={account}
          date={date}
          handleClick={openOrCLOSEprop}
          isMobile={isMobile}
          headLine={headLine}
        />
        {openprop
          && (
            <SocialImage
              isMobile={isMobile}
              color={color}
              postText={postText}
              headLine={headLine}
            />
          )
        }

        <SCFooter
          isMobile={isMobile}
          id={id}
          comments={commentsprop}
          incrementSHARES={incrementSHARESprop}
          shares={sharesprop}
          increment={incrementprop}
          thumbs={thumbsprop}
          incrementCOMMENTS={incrementCOMMENTSprop}
          removeAC={removeAC}
          removeACState={removeACState}
        />
      </div>
    );
  }
}

const mapStateToProps = ({ counter }, ownprops) => ({
  thumbsprop: counter.list_of_cweets[ownprops.id].thumb,
  sharesprop: counter.list_of_cweets[ownprops.id].shares,
  commentsprop: counter.list_of_cweets[ownprops.id].comments,
  openprop: counter.list_of_cweets[ownprops.id].open,
});

const mapDispatchToProps = (dispatch, ownprops) => ({
  incrementprop: () => dispatch(increment(ownprops.id)),
  incrementSHARESprop: () => dispatch(incrementSHARES(ownprops.id)),
  incrementCOMMENTSprop: () => dispatch(incrementCOMMENTS(ownprops.id)),
  openOrCLOSEprop: () => dispatch(openOrCLOSE(ownprops.id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SocialCard);
