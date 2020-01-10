import { createStore } from "redux";

const initialState = {
  todos: [
    {
      id: 0,
      title: 'Wash dishes',
      completed: false
    },
    {
      id: 1,
      title: 'Do homework',
      completed: false
    },
    {
      id: 3,
      title: 'Buy groceries',
      completed: false
    }
  ]
}

function reducer(state = initialState, action) {
  return state;
}

const store = createStore(reducer);

export default store;
