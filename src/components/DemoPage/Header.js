import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <header>
        <nav>
          <ul>
            <NavLink to='/' className='logo'>visbo</NavLink>
            {
              this.props.path != '/demo-project'
              &&
              <NavLink to='/demo-project' className='demo-nav-li'>+ Add Project</NavLink>
            }
            <li className='demo-nav-li'>Search</li>
            <NavLink to='/' className='demo-nav-li'>Home</NavLink>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;