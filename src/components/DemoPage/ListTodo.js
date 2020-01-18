import React, { Component } from 'react';
import uuid from 'uuid/v4';
import { addCard } from '../../actions/actions';
import { connect } from 'react-redux';
import './Demo.css';

function mapStateToProps(state) {
  return {
    cards: state.cards.cards,
  };
}

class ListTodo extends Component {
  handleSubmit(e) {
    e.preventDefault()

    let id = uuid()
    let title = e.target.title.value
    let projectId = this.props.projectId

    this.props.dispatch(addCard(id, title, projectId))

    this.formRef.reset();
  }

  render() {
    return (
      <div>
        <ul className='list-todo'>
          <h3>To-do</h3>
          {this.props.todoCards.map(c =>
            <li key={c.id}>
              {c.title}
            </li>
          )}
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
            />
          </label>

          <button type='submit'>Add card</button>
        </form>
      </div>
    );
  }
}

export default connect(mapStateToProps)(ListTodo);