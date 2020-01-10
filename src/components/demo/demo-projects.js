import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

function mapStateToProps(state) {
  return {
    projects: state.projects,
  };
}

class DemoProjects extends Component {
  render() {
    const { projects } = this.props;

    return (
      <main className='demo-main'>
        <ul className="projects-list">
          {projects.map(p => {
            return (
              <li key={p.id}>
                <h3>{p.title}</h3>
              </li>
            )
          })}
        </ul>
        <div>
          <button>Create new project</button>
        </div>
      </main>
    );
  }
}

DemoProjects.propTypes = {
  projects: PropTypes.array,
};

export default connect(mapStateToProps)(DemoProjects);