import React, { Component } from 'react';

class BoardCards extends Component {
  render() {
    return (
      <div>{this.props.cards.map(c =>
        <p>{c.title}</p>
      )}
      </div>
    );
  }
}

export default BoardCards;