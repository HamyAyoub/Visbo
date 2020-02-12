import React, { Component } from 'react';
import Header from './Header';
import './Demo.css';
import { Link } from 'react-router-dom';
import uuid from 'uuid/v4';
import scrumBoard2 from '../../images/scrum-board2.jpg';
import AppContext from '../../AppContext';

class ProjectList extends Component {

  static contextType = AppContext;
  handleSubmit(e) {
    e.preventDefault()

    let id = uuid()
    let title = e.target.title.value

    this.context.addProject(id, title)
    this.formRef.reset();
  }

  render() {
    const { projects } = this.context;

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

export default ProjectList
