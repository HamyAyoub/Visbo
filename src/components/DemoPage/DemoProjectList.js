import React, { Component } from 'react';
import DemoHeader from './DemoHeader';
import './Demo.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import uuid from 'uuid/v4';
import { addProject } from '../../actions/actions';

function mapStateToProps(state) {
  return {
    projects: state.addProjectReducer.projects
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
        <DemoHeader />

        <main className='demo-main'>
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
            <form onSubmit={e => this.handleSubmit(e)} ref={el => this.formRef = el}>
              <label htmlFor='title'>
                <input
                  type='text'
                  name='title'
                />
              </label>

              <button type='submit'>Create new project</button>
            </form>
          </div>
        </main>
      </div>
    );
  }
}

DemoProjectList.propTypes = {
  projects: PropTypes.array
};

export default connect(mapStateToProps)(DemoProjectList);