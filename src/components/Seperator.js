import React from 'react';
import { connect } from 'react-redux'
import styled from 'styled-components';

import {
    addAC,
  } from '../reducers/reader'
import {
    addACState,
  } from '../reducers/counter'

const Wrapper = styled.div`
    height: 40px;
    background: black:
    color: white;
    display:flex;
    justify-content: flex-end;
    margin-right: 20px;
    align-items:center;
`

const Seperator = ({addAC}) => (
    <Wrapper onClick={() => {
        addACState();
        addAC();
    }}>
        Add new Cweet
    </Wrapper>
);

const mapDispatchToProps = (dispatch) => ({
    addAC: () => dispatch(addAC()),
    addACState: () => dispatch(addACState()),
})

export default connect(
    null,
    mapDispatchToProps
)(Seperator);