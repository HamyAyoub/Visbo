import React, { Component } from 'react';

class DemoBoard extends Component {
  render() {
    return (
      <main className="demo-main">
        <div>
          <h2>Project 1</h2>
        </div>

        <section className="demo-project-uls">
          <ul>
            <h3>To-do</h3>
            <li>html wireframes</li>
            <li>screen inventory</li>
            <li>user stories</li>

            <div>
              <button>Add new task</button>
            </div>
          </ul>

          <ul>
            <h3>In-progress</h3>
            <li>html wireframes</li>

            <div>
              <button>Add new task</button>
            </div>
          </ul>

          <ul>
            <h3>Done</h3>
            <li></li>

            <div>
              <button>Add new task</button>
            </div>
          </ul>

        </section>
      </main>
    );
  }
}

export default DemoBoard;