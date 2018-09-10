import React, { Component } from 'react';
import SocialCard from './components/SocialCard'
import MainHeader from './components/MainHeader';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      header: "The Practical Dev",
      account: "@cattazzz",
      open: true,
      isMobile: false
    }
  }

  componentDidMount() {
    this.setState({
      isMobile: window.innerWidth < 1025
    });
    window.addEventListener('resize', () => {
      this.setState({
        isMobile: window.innerWidth < 1025
      });
    }, false);
  }

  render() {
    return (
      <div>
        <MainHeader />
        <SocialCard
          id={0}
          header={this.state.header}
          account={this.state.account}
          open={this.state.open}
          handleClick={() => this.setState({ open: !this.state.open })}
          handleUp={(newState) => this.setState(newState)}
          isMobile={this.state.isMobile}
        />
        <SocialCard
          id={1}
          header={"Second header"}
          account={this.state.account}
          open={this.state.open}
          handleClick={() => this.setState({ open: !this.state.open })}
          handleUp={(newState) => this.setState(newState)}
          isMobile={this.state.isMobile}
        />
      </div>
    );
  }
}

export default App;
