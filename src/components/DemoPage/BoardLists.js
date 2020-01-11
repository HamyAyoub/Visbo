import React, { Component } from 'react';
import BoardCards from './BoardCards';

class BoardLists extends Component {
  render() {
    return (
      <div>
        <section className="demo-project-uls">
          <ul>
            {this.props.lists.map(li =>
              <li>
                <h3>{li.title}</h3>
                <BoardCards
                  cards={li.cardIds.map(id => this.props.cards[id])} />
              </li>
            )}
          </ul>
        </section>
      </div>
    );
  }
}

export default BoardLists;