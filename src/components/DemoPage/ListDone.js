import React, { Component } from 'react';
import './Demo.css';
import uuid from 'uuid/v4';
import { addCardDone } from '../../actions/actions';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {
    projects: state.projects.projects,
    cards: state.cards.cards,
  };
}

class ListDone extends Component {
  handleSubmit(e) {
    e.preventDefault()

    let id = uuid()
    let title = e.target.title.value
    let projectId = this.props.projectId

    this.props.dispatch(addCardDone(id, title, projectId))

    this.formRef.reset();
  }

  allowDrop(e) {
    e.preventDefault();
  }

  drag(e) {
    e.dataTransfer.setData("text", e.target.id);
  }

  drop(e) {
    e.preventDefault();
    var data = e.dataTransfer.getData("text");
    e.target.appendChild(document.getElementById(data));
  }

  render() {
    const { doneCards } = this.props

    return (
      <div className='list-done-wrapper'>
        <ul className='list-done'>
          <h3>Done</h3>
          <div className='done-column' onDrop={e => this.drop(e)} onDragOver={e => this.allowDrop(e)}>
            {doneCards.map(c =>
              <li key={c.id} id={c.id} draggable="true" onDragStart={e => this.drag(e)}>
                {c.title}
              </li>
            )}
          </div>
        </ul>

        <form
          onSubmit={e => this.handleSubmit(e)}
          ref={el => this.formRef = el}
          className='add-card-form'
        >
          <label htmlFor='title'>
            <input
              type='text'
              name='title'
              placeholder='Add a card'
            />
          </label>
        </form>
      </div>
    );
  }
}

export default connect(mapStateToProps)(ListDone);