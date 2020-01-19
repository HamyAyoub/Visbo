import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import scrumBoard from '../../images/scrum-board.jpg';

class Main extends Component {
  render() {
    return (
      <main className='landing-main'>
        <div className='scrum-board-wrapper'>
          <img src={scrumBoard} alt="scrum-board-bg" className="scrum-board" />
        </div>

        <div className='landing-main-inner-wrapper'>
          <h1 className='headline'>Track small
            <br />to large scale
            <br />projects.
          </h1>
        </div>

        <div className='footer-wrapper'>
          <Link to='/demo-project' className='btn btn-demo'>EXPLORE VISBO</Link>
          <h3>Easy, flexibile and free.</h3>
        </div>
      </main>
    );
  }
}

export default Main;