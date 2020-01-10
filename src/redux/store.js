import { createStore } from "redux";

const initialState = {
  projects: [
    {
      id: 0,
      title: 'Wash dishes',
    },
    {
      id: 1,
      title: 'Do homework',
    },
    {
      id: 3,
      title: 'Buy groceries',
    }
  ]
}

function reducer(state = initialState, action) {
  return state;
}

const store = createStore(reducer);

export default store;
