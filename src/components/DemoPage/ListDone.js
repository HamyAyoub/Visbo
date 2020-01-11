import React, { Component } from 'react';

class ListDone extends Component {
  render() {
    return (
      <div>
        <ul>
          <h3>Done</h3>
          {this.props.doneCards.map(c =>
            <li>
              {c.title}
            </li>
          )}
        </ul>
      </div>
    );
  }
}

export default ListDone;