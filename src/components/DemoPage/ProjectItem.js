import React, { Component } from 'react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
import Header from './Header';
import ListTodo from './ListTodo';
import ListDoing from './ListDoing';
import ListDone from './ListDone';
import './Demo.css';
import scrumBoard2 from '../../images/scrum-person.jpg'

function mapStateToProps(state) {
  return {
    projects: state.projects.projects,
    cards: state.cards.cards
  }
}

class ProjectItem extends Component {
  renderTodoCards() {
    const activeProject = this.props.projects.find(p =>
      p.id == this.props.match.params.projectId
    )

    const todoCards = activeProject.listTodo && activeProject.listTodo.map(id =>
      this.props.cards.find(x => x.id === id)
    )

    return todoCards
  }

  renderDoingCards() {
    const activeProject = this.props.projects.find(p =>
      p.id == this.props.match.params.projectId
    )

    const doingCards = activeProject.listDoing && activeProject.listDoing.map(id =>
      this.props.cards.find(x => x.id === id)
    )

    return doingCards
  }

  renderDoneCards() {
    const activeProject = this.props.projects.find(p =>
      p.id == this.props.match.params.projectId
    )

    const doneCards = activeProject.listDone && activeProject.listDone.map(id =>
      this.props.cards.find(x => x.id === id)
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

          <ListDoing projectId={project.id} doingCards={this.renderDoingCards()} />

          <ListDone projectId={project.id} doneCards={this.renderDoneCards()} />

        </main>

        <div className='scrum-board2-wrapper'>
          <img src={scrumBoard2} alt="scrum-board" className="scrum-board2" />
        </div>
      </div>
    );
  }
}

// ProjectItem.propTypes = {
//   projects: PropTypes.array
// }

export default connect(mapStateToProps)(ProjectItem);