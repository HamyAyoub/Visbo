import React, { Component } from 'react';

class ListInProgress extends Component {
  render() {
    return (
      <div>
        <ul>
          <h3>In-progress</h3>
          {this.props.inProgressCards.map(c =>
            <li>
              {c.title}
            </li>
          )}
        </ul>
      </div>
    );
  }
}

export default ListInProgress;