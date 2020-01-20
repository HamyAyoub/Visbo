export const ADD_PROJECT = 'ADD_PROJECT'; // export this as it'll be needed in several places
export const ADD_CARD_TO_TODO = 'ADD_CARD_TO_TODO';
export const ADD_CARD_TO_DOING = 'ADD_CARD_TO_DOING';
export const ADD_CARD_TO_DONE = 'ADD_CARD_TO_DONE';

// action creators, returns only plain object

// actions define what changed NOT HOW
export function addProject(id, title) {
  return {
    type: ADD_PROJECT,
    id,
    title,
    listTodo: [],
    listDoing: [],
    listDone: []
  }
}

export function addCardTodo(id, title, projectId) {
  return {
    type: ADD_CARD_TO_TODO,
    id,
    title,
    projectId
  }
}

export function addCardDoing(id, title, projectId) {
  return {
    type: ADD_CARD_TO_DOING,
    id,
    title,
    projectId
  }
}

export function addCardDone(id, title, projectId) {
  return {
    type: ADD_CARD_TO_DONE,
    id,
    title,
    projectId
  }
}

