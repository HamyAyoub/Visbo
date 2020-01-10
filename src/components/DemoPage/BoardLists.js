import React, { Component } from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  lists: state.lists
}

class BoardLists extends Component {
  render() {

    return (
      <div>
        {this.props.lists.map(li => <h3>{li.title}</h3>)}
      </div>
    );
  }
}

export default BoardLists;