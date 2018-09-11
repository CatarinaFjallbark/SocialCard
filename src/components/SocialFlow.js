import React from 'react';
import SocialCard from './SocialCard'
import cwitter from "../resourses/cwitter.json"

let list_of_sc = cwitter.list_of_sc;

class SocialFlow extends React.Component {
    render() {
        return (
            <div>
                {list_of_sc.map(sc =>
                    <SocialCard
                        isMobile={this.props.isMobile}
                        id={sc.id}
                        header={sc.header}
                        account={sc.account}
                        date={sc.date}
                    />
                )}
            </div>
        );
    }
}

export default SocialFlow;