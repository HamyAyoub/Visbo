import { createStore } from "redux";

const initialState = {
  projects: [
    { id: 0, title: 'Fullstack Capstone', boardId: 0 },
    { id: 1, title: 'Bachelorette Party', boardId: 1 }
  ],

  boards: [
    { id: 0, listIds: [0, 1, 2] },
    { id: 1, listIds: [4] }
  ],

  lists: [
    { id: 0, title: 'To-do', cardIds: [5, 6, 7, 8] },
    { id: 1, title: 'In-progress', cardIds: [4] },
    { id: 2, title: 'Done', cardIds: [0, 1, 2, 3] },
    { id: 4, title: 'To-do', cardIds: [9] }
  ],

  cards: [
    { id: 0, title: 'submit project proposal' },
    { id: 1, title: 'user stories' },
    { id: 2, title: 'screen inventory' },
    { id: 3, title: 'html wireframes' },
    { id: 4, title: 'build static client' },
    { id: 5, title: 'implement MVP' },
    { id: 6, title: 'feedback and iteration' },
    { id: 7, title: 'style your app' },
    { id: 8, title: 'finalize project' },
    { id: 9, title: 'book spa & hotel' }
  ]
}

function reducer(state = initialState, action) {
  return state;
}

const store = createStore(reducer);

export default store;
