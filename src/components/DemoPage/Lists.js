import React, { Component } from 'react';
import Cards from './Cards';

class Lists extends Component {
  render() {
    return (
      <div>
        <ul className="demo-project-uls">
          {this.props.lists.map(li =>
            <li key={li.id}>
              <h3>{li.title}</h3>
              <Cards
                cards={li.cardIds.map(id => this.props.cards[id])} />
            </li>
          )}
        </ul>
      </div>
    );
  }
}

export default Lists;