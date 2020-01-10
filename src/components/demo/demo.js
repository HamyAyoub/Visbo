import React, { Component } from 'react';
import DemoHeader from './demo-header';
import './demo.css'
import DemoProjects from './demo-projects';

class Demo extends Component {
  render() {
    return (
      <div>
        <DemoHeader />
        <DemoProjects />
      </div>
    );
  }
}

export default Demo;