import React, { Component } from 'react';

class Cards extends Component {
  render() {
    return (
      <div>{this.props.cards.map(c =>
        <p>{c.title}</p>
      )}
      </div>
    );
  }
}

export default Cards;