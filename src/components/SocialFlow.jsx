import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';

import SocialCard from './SocialCard';

import {
  removeAC,
} from '../reducers/reader';
import {
  removeACState,
} from '../reducers/counter';

const Wrapper = styled.div`
    background: #f5f8fa;
`;

class SocialFlow extends React.PureComponent {
  render() {
    const {
      list_of_cweets_hard_props,
      isMobile,
      dispatchRemoveAC,
      dispatchRemoveACState,
    } = this.props;
    return (
      <Wrapper>
        {list_of_cweets_hard_props.map(sc => (
          <SocialCard
            key={sc.id}
            isMobile={isMobile}
            id={sc.id}
            header={sc.header}
            account={sc.account}
            date={sc.date}
            color={sc.color}
            postText={sc.postText}
            headLine={sc.headLine}
            removeAC={dispatchRemoveAC}
            removeACState={dispatchRemoveACState}
          />
        ))}
      </Wrapper>
    );
  }
}

SocialFlow.propTypes = {
  list_of_cweets_hard_props: PropTypes.arrayOf.isRequired,
  isMobile: PropTypes.bool.isRequired,
  dispatchRemoveAC: PropTypes.func.isRequired,
  dispatchRemoveACState: PropTypes.func.isRequired,
};


const mapStateToProps = ({ reader }) => ({
  list_of_cweets_hard_props: reader.list_of_cweets_hard,
});
const mapDispatchToProps = dispatch => ({
  dispatchRemoveAC: id => removeAC(id)(dispatch),
  dispatchRemoveACState: id => removeACState(id)(dispatch),
});


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SocialFlow);
