import React, { Component } from 'react';
import LandingMain from './landing-main';
import LandingHeader from './LandingHeader';
import LandingFooter from './LandingFooter';
import './Landing.css';

class LandingPage extends Component {
  render() {
    return (
      <div>
        <LandingHeader />
        <LandingMain />
        <LandingFooter />
      </div>
    );
  }
}

export default LandingPage;