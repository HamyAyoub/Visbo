import React, { Component } from 'react';
import './Demo.css';

class ListDone extends Component {
  render() {
    return (
      <div>
        <ul className='list-done'>
          <h3>Done</h3>
          {this.props.doneCards.map(c =>
            <li key={c.id}>
              {c.title}
            </li>
          )}
        </ul>
      </div>
    );
  }
}

export default ListDone;