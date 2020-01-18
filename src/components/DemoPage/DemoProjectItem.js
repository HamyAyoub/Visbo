import React, { Component } from 'react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
import DemoHeader from './DemoHeader';
import ListTodo from './ListTodo';
import ListInProgress from './ListInProgress';
import ListDone from './ListDone';

function mapStateToProps(state) {
  return {
    projects: state.projects.projects,
    cards: state.cards.cards
  }
}

class DemoProjectItem extends Component {

  renderTodoCards() {
    const activeProject = this.props.projects.find(p =>
      p.id == this.props.match.params.projectId
    )

    const todoCards = activeProject.listTodo.map(id => {
      return this.props.cards[id]
    })

    return todoCards
  }

  renderInProgressCards() {
    const activeProject = this.props.projects.find(p =>
      p.id == this.props.match.params.projectId
    )

    const inProgressCards = activeProject.listInProgress.map(id =>
      this.props.cards[id]
    )

    return inProgressCards
  }

  renderDoneCards() {
    const activeProject = this.props.projects.find(p =>
      p.id == this.props.match.params.projectId
    )

    const doneCards = activeProject.listDone.map(id =>
      this.props.cards[id]
    )

    return doneCards
  }

  render() {
    const project = this.props.projects.find(p =>
      p.id == this.props.match.params.projectId
    )

    return (
      <div>
        <DemoHeader />

        <main className="demo-main">
          <div>
            <h2>{project.title}</h2>
          </div>

          <ListTodo todoCards={this.renderTodoCards()} />

          <ListInProgress inProgressCards={this.renderInProgressCards()} />

          <ListDone doneCards={this.renderDoneCards()} />

        </main>
      </div>
    );
  }
}

// DemoProjectItem.propTypes = {
//   projects: PropTypes.array
// }

export default connect(mapStateToProps)(DemoProjectItem);