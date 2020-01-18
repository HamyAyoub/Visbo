import React, { Component } from 'react';
import Main from './Main';
import Header from './Header';
import Footer from './Footer';
import './Landing.css';

class Landing extends Component {
  render() {
    return (
      <div>
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default Landing;