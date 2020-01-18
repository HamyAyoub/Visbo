import React, { Component } from 'react';
import './Demo.css';

class ListDone extends Component {
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
    return (
      <div>
        <ul className='list-done'>
          <h3>Done</h3>
          <div className='done-column' onDrop={e => this.drop(e)} onDragOver={e => this.allowDrop(e)}>
            {this.props.doneCards.map(c =>
              <li key={c.id} id={c.id} draggable="true" onDragStart={e => this.drag(e)}>
                {c.title}
              </li>
            )}
          </div>
        </ul>
      </div>
    );
  }
}

export default ListDone;