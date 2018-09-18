import React, { Component } from 'react';
import SocialFlow from './components/SocialFlow';
import MainHeader from './components/MainHeader';
import Seperator from './components/Seperator';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile: false,
    };
  }

  componentDidMount() {
    this.setState({
      isMobile: window.innerWidth < 1025,
    });
    window.addEventListener('resize', () => {
      this.setState({
        isMobile: window.innerWidth < 1025,
      });
    }, false);
  }

  render() {
    const {
      isMobile,
    } = this.state;
    return (
      <div>
        <MainHeader />
        <Seperator />
        <SocialFlow
          isMobile={isMobile}
        />
      </div>
    );
  }
}

export default App;
