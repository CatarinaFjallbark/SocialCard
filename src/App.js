import React, { Component } from 'react';
import SocialCard from './components/SocialCard'
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      header: "The Practical Dev",
      account: "@cattazzz",
      open: true,
    }
  }

  render() {
    return (
      <div>
        <SocialCard
          header={this.state.header}
          account={this.state.account}
          open={this.state.open}
          handleClick={() => this.setState({ open: !this.state.open })}
          handleUp={(newState) => this.setState(newState)}
        />
      </div>
    );
  }
}

export default App;
