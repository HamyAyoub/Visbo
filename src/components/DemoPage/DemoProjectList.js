import React, { Component } from 'react';
import DemoHeader from './DemoHeader';
import './Demo.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CreateProject from './CreateProject';
import uuid from 'uuid/v4';
import store from '../../store/store';
import addProject from '../../reducers/reducers';

function mapStateToProps(state) {
  return {
    projects: state.projects
  };
}

class DemoProjectList extends Component {

  updateFormInput(e) {

  }

  handleSubmit(e) {
    e.preventDefault()

    let id = uuid()
    let title = e.target.title.value

    store.dispatch(addProject(id, title))

  }

  render() {
    const { projects } = this.props;

    return (
      <div>
        <DemoHeader />

        <main className='demo-main'>
          <ul className="projects-list">
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
            <form onSubmit={e => this.handleSubmit(e)}>
              <label htmlFor='title'>
                <input
                  type='text'
                  name='title'
                  onChange={this.updateFormInput()}
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