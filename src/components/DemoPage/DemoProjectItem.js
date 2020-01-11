import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Lists from './Lists';
import DemoHeader from './DemoHeader';

function mapStateToProps(state) {
  return {
    projects: state.projects,
    lists: state.lists,
  }
}

class DemoProjectItem extends Component {

  renderProjectLists() {
    const activeProject = this.props.projects.find(p =>
      p.id == this.props.match.params.projectId
    )

    const activeLists = activeProject.listIds.map(id =>
      this.props.lists[id]
    )

    return activeLists
  }

  render() {
    const project = this.props.projects.find(p =>
      p.id == this.props.match.params.projectId
    )

    return (
      <div>
        <DemoHeader />

        <main className="demo-main">
          <div>
            <h2>{project.title}</h2>
          </div>

          <Lists
            lists={this.renderProjectLists()}
            cards={this.props.cards}
          />

        </main>
      </div>
    );
  }
}

DemoProjectItem.propTypes = {
  projects: PropTypes.array
}

export default connect(mapStateToProps)(DemoProjectItem);