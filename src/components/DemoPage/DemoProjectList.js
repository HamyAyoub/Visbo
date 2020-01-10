import React, { Component } from 'react';
import DemoHeader from './DemoHeader';
import './Demo.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

function mapStateToProps(state) {
  return {
    projects: state.projects
  };
}

class DemoProjectList extends Component {
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
            <button>Create new project</button>
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