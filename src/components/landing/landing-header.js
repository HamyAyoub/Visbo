import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class LandingHeader extends Component {
  render() {
    return (
      <header>
        <nav>
          <ul>
            <NavLink to='/' className='logo'>Visbo</NavLink>
            <li className='landing-li'>Sign Up</li>
            <NavLink to='/demo' className='landing-li'>Demo</NavLink>
          </ul>
        </nav>
      </header>
    );
  }
}

export default LandingHeader;