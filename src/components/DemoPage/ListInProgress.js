import React, { Component } from 'react';
import './Demo.css';

class ListInProgress extends Component {
  render() {
    return (
      <div>
        <ul className='list-in-progress'>
          <h3>In-progress</h3>
          {this.props.inProgressCards.map(c =>
            <li key={c.id}>
              {c.title}
            </li>
          )}
        </ul>
      </div>
    );
  }
}

export default ListInProgress;