import React, { Component } from 'react';
import LandingMain from './landing-main';
import LandingHeader from './landing-header';
import LandingFooter from './landing-footer';
import './landing.css';

class Landing extends Component {
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

export default Landing;