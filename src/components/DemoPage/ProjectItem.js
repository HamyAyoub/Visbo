import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import Header from './Header';
import './Demo.css';
import scrumBoard2 from '../../images/scrum-person.jpg'
import Board from 'react-trello';
import AppContext from '../../AppContext';

class ProjectItem extends Component {
  static contextType = AppContext;

  render() {
    const project = this.context.projects.find(p =>
      p.id == this.props.match.params.projectId
    )

    let data = { lanes: project.lanes }

    return (
      <div>
        <Header />

        <div className='project-item-title'>
          <h2>{project.title}</h2>
        </div>

        <main className="project-item-main">
          <Board
            data={data}
            editable
          // canAddLanes
          // editLaneTitle
          />
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

export default ProjectItem