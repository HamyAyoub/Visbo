import React, { Component } from 'react';
import Header from './Header';
import './Demo.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
import uuid from 'uuid/v4';
import { addProject } from '../../actions/actions';
import scrumBoard2 from '../../images/scrum-board2.jpg'

function mapStateToProps(state) {
  console.log(state)
  return {
    projects: state.projects.projects
  };
}

class ProjectList extends Component {
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
      <div className='project-list-wrapper'>
        <Header path={this.props.match.path} />

        <div className='project-list-title'>
          <h2>Projects</h2>
        </div>

        <main className='project-list-main'>

          <ul className="project-list">
            {projects.map(p => {
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
                  placeholder='Create a project..'
                />
              </label>
            </form>
          </div>
        </main>
        <div className='scrum-board2-wrapper'>
          <img src={scrumBoard2} alt="scrum-board" className="scrum-board2" />
        </div>
      </div>
    );
  }
}

// ProjectList.propTypes = {
//   projects: PropTypes.array
// };

export default connect(mapStateToProps)(ProjectList);