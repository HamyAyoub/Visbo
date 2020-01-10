import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class DemoHeader extends Component {
  state = {}
  render() {
    return (
      <header>
        <nav>
          <ul>
            <NavLink to='/' className='logo'>Visbo</NavLink>
            <li className='demo-li'> + Add Project</li>
            <li className='demo-li'>Search</li>
            <NavLink to='/' className='demo-li'>Home</NavLink>
          </ul>
        </nav>
      </header>
    );
  }
}

export default DemoHeader;