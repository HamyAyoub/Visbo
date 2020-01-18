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
            <NavLink to='/demo-project' className='demo-nav-li'>+ Add Project</NavLink>
            <li className='demo-nav-li'>Search</li>
            <NavLink to='/' className='demo-nav-li'>Home</NavLink>
          </ul>
        </nav>
      </header>
    );
  }
}

export default DemoHeader;