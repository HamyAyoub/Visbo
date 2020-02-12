import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <header>
        <nav>
          <ul>
            <span className="glyphicon glyphicon-check logo"></span>
            <NavLink to='/' className='logo'>visbo</NavLink>
            <NavLink to='/demo-project' className='landing-nav-li demo'>Demo</NavLink>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;