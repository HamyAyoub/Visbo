import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Main extends Component {
  render() {
    return (
      <main className='landing-main'>
        <h1 className='headline'>Visbo keeps track of small to large scale projects.</h1>
        <h3>Easy, flexibile and free.</h3>

        <div>
          <Link to='/demo-project' className='btn btn-demo'>EXPLORE VISBO</Link>
        </div>
      </main>
    );
  }
}

export default Main;