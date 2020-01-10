import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import BoardLists from './BoardLists';

function mapStateToProps(state) {
  return {
    projects: state.projects,
    lists: state.lists,
    cards: state.cards,
    boards: state.boards
  }
}

class DemoProjectItem extends Component {
  render() {
    const { boards, lists } = this.props;

    const project = this.props.projects.find(p =>
      p.id == this.props.match.params.projectId
    )

    return (
      <main className="demo-main">
        <div>
          <h2>{project.title}</h2>
        </div>

        <section className="demo-project-uls">
          {boards.map(b =>
            <ul key={b.id}>
              <h3>
                <BoardLists
                  lists={b.listIds.map(id => lists[id])}
                />
              </h3>
            </ul>
          )}
        </section>
      </main>
    );
  }
}

DemoProjectItem.propTypes = {
  projects: PropTypes.array
}

export default connect(mapStateToProps)(DemoProjectItem);