import React from 'react';
import { connect } from 'react-redux'
import styled from 'styled-components';

import SocialCard from './SocialCard'

import {
    removeAC,
  } from '../reducers/reader'
import {
    removeACState,
  } from '../reducers/counter'

  const Wrapper = styled.div`
    background: #f5f8fa;
`
  
class SocialFlow extends React.Component {
    render() {
        return (
            <Wrapper>
                {this.props.list_of_cweets_hard_props.map(sc =>
                    <SocialCard
                        key={sc.id}
                        isMobile={this.props.isMobile}
                        id={sc.id}
                        header={sc.header}
                        account={sc.account}
                        date={sc.date}
                        color={sc.color}
                        postText={sc.postText}
                        headLine={sc.headLine}
                        removeAC={this.props.removeAC}
                        removeACState={this.props.removeACState}
                    />
                )}
            </Wrapper>
        );
    }
}

const mapStateToProps = ({ reader }) => {
    return {
        list_of_cweets_hard_props: reader.list_of_cweets_hard
    }
  }
  const mapDispatchToProps = (dispatch) => ({
    removeAC: (id) => removeAC(id)(dispatch),
    removeACState: (id) => removeACState(id)(dispatch),
  })
  

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(SocialFlow);