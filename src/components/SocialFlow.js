import React from 'react';
import { connect } from 'react-redux'

import SocialCard from './SocialCard'

import {
    removeAC,
  } from '../reducers/reader'
import {
    removeACState,
  } from '../reducers/counter'
  

class SocialFlow extends React.Component {
    render() {
        return (
            <div>
                {this.props.list_of_cweets_hard_props.map(sc =>
                    <SocialCard
                        isMobile={this.props.isMobile}
                        id={sc.id}
                        header={sc.header}
                        account={sc.account}
                        date={sc.date}
                        color={sc.color}
                        postText={sc.postText}
                        headLine={sc.headLine}
                    />
                )}
            </div>
        );
    }
}

const mapStateToProps = ({ reader }) => {
    return {
        list_of_cweets_hard_props: reader.list_of_cweets_hard
    }
  }
  const mapDispatchToProps = (dispatch) => ({
    removeACprop: () => dispatch(removeAC()),
    removeACStateprop: () => dispatch(removeACState()),
  })
  

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(SocialFlow);