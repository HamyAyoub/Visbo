export const ADD_PROJECT = 'ADD_PROJECT'; // export this as it'll be needed in several places

// action creator for addProject, returns only plain object
// actions define what changed NOT HOW
export default function addProject(id, title) {
  return {
    type: ADD_PROJECT,
    id: id,
    title: title
  }
}

console.log(addProject)