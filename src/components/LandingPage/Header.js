import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <header>
        <nav>
          <ul>
            <NavLink to='/' className='logo'>Visbo</NavLink>
            <li className='landing-li'>Sign Up</li>
            <NavLink to='/demo-project' className='landing-li'>Demo</NavLink>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;