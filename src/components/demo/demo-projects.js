import React, { Component } from 'react';

class DemoProjects extends Component {
  render() {
    return (
      <main className="demo-main">
        <ul className="projects-list">
          <li>
            <h3>Project 1</h3>
          </li>
          <li>
            <h3>Project 2</h3>
          </li>
        </ul>
        <div>
          <button>Create new project</button>
        </div>
      </main>
    );
  }
}

export default DemoProjects;