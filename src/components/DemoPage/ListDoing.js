import React, { Component } from 'react';
import './Demo.css';
import uuid from 'uuid/v4';
import { addCardDoing } from '../../actions/actions';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {
    projects: state.projects.projects,
    cards: state.cards.cards,
  };
}

class ListDoing extends Component {
  handleSubmit(e) {
    e.preventDefault()

    let id = uuid()
    let title = e.target.title.value
    let projectId = this.props.projectId
    let projects = this.props.projects

    this.props.dispatch(addCardDoing(id, title, projectId, projects))

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
    const { doingCards } = this.props

    return (
      <div className='list-doing-wrapper'>
        <ul className='list-doing'>
          <h3>Doing</h3>
          <div className='doing-column' onDrop={e => this.drop(e)} onDragOver={e => this.allowDrop(e)}>
            {doingCards.map(c =>
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

export default connect(mapStateToProps)(ListDoing);