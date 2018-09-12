import React from 'react';
import { connect } from 'react-redux'

import SocialCard from './SocialCard'

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
                    />
                )}
            </div>
        );
    }
}

const mapStateToProps = ({ reader }) => {
    console.log(reader.list_of_cweets_hard);
    return {
        list_of_cweets_hard_props: reader.list_of_cweets_hard
    }
  }
  
  const mapDispatchToProps = (dispatch) => ({

  })
  

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(SocialFlow);