import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import BoardLists from './BoardLists';

function mapStateToProps(state) {
  return {
    projects: state.projects,
    lists: state.lists,
    cards: state.cards,
    boards: state.boards
  }
}

class DemoProjectItem extends Component {

  renderBoardLists() {
    const activeProject = this.props.projects.find(p =>
      p.id == this.props.match.params.projectId
    )

    const activeBoard = this.props.boards.find(b =>
      b.id == activeProject.boardId
    )

    const activeLists = activeBoard.listIds.map(id =>
      this.props.lists[id]
    )

    return activeLists
  }

  render() {
    const project = this.props.projects.find(p =>
      p.id == this.props.match.params.projectId
    )

    return (
      <main className="demo-main">
        <div>
          <h2>{project.title}</h2>
        </div>

        <h3>
          <BoardLists
            lists={this.renderBoardLists()}
            cards={this.props.cards}
          />
        </h3>
      </main>
    );
  }
}

DemoProjectItem.propTypes = {
  projects: PropTypes.array
}

export default connect(mapStateToProps)(DemoProjectItem);