export const ADD_PROJECT = 'ADD_PROJECT'; // export this as it'll be needed in several places
export const ADD_CARD = 'ADD_CARD';

// action creator for addProject, returns only plain object
// actions define what changed NOT HOW
export function addProject(id, title) {
  return {
    type: ADD_PROJECT,
    id,
    title
  }
}

export function addCard(id, title) {
  return {
    type: ADD_CARD,
    id,
    title
  }
}

