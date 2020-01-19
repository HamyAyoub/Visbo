import React, { Component } from 'react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
import Header from './Header';
import ListTodo from './ListTodo';
import ListDoing from './ListDoing';
import ListDone from './ListDone';
import './Demo.css';

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
        <Header />

        <div className='project-item-title'>
          <h2>{project.title}</h2>
        </div>

        <main className="project-item-main">

          <ListTodo projectId={project.id} todoCards={this.renderTodoCards()} />

          <ListDoing inProgressCards={this.renderInProgressCards()} />

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