import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import {
  addAC,
} from '../reducers/reader';
import {
  addACState,
} from '../reducers/counter';

const Wrapper = styled.div`
    height: 40px;
    background: black;
    color: white;
    display:flex;
    justify-content: flex-end;
    margin-right: 20px;
    align-items:center;
`;

const Seperator = ({ addACprop }) => (
  <Wrapper onClick={() => {
    addACState();
    addACprop();
  }}
  >
    Add new Cweet
  </Wrapper>
);

const mapDispatchToProps = dispatch => ({
  addACprop: () => dispatch(addAC()),
  addACState: () => dispatch(addACState()),
});

export default connect(
  null,
  mapDispatchToProps,
)(Seperator);
