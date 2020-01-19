import React, { Component } from 'react';
import Header from './Header';
import './Demo.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
import uuid from 'uuid/v4';
import { addProject } from '../../actions/actions';
import scrumSetupBoard from '../../images/scrum-setup-board.jpg'

function mapStateToProps(state) {
  return {
    projects: state.projects.projects
  };
}

class DemoProjectList extends Component {
  handleSubmit(e) {
    e.preventDefault()

    let id = uuid()
    let title = e.target.title.value

    this.props.dispatch(addProject(id, title))

    this.formRef.reset();
  }

  render() {
    const { projects } = this.props;
    return (
      <div>
        <Header path={this.props.match.path} />

        <div className='project-list-title'>
          <h2>Projects</h2>
        </div>

        <main className='project-list-main'>

          <ul className="projects-list">
            {projects && projects.map(p => {
              return (
                <li key={p.id}>
                  <Link to={`/demo-project/${p.id}`}>
                    <h3>{p.title}</h3>
                  </Link>
                </li>
              )
            })}
          </ul>
          <div>
            <form
              onSubmit={e => this.handleSubmit(e)}
              ref={el => this.formRef = el}
              className='add-project-form'
            >
              <label htmlFor='title'>
                <input
                  type='text'
                  name='title'
                  placeholder='Create a project'
                />
              </label>
            </form>
          </div>
        </main>
        <div className='scrum-setup-board-wrapper'>
          <img src={scrumSetupBoard} alt="scrum-setup-board" className="scrum-setup-board" />
        </div>
      </div>
    );
  }
}

// DemoProjectList.propTypes = {
//   projects: PropTypes.array
// };

export default connect(mapStateToProps)(DemoProjectList);