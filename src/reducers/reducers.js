import {
  ADD_PROJECT, ADD_CARD_TO_TODO, ADD_CARD_TO_DOING, ADD_CARD_TO_DONE
} from '../actions/actions';

const initialState = {
  projects: [
    {
      id: 0,
      title: 'Fullstack Capstone',
      listTodo: [5, 6, 7, 8],
      listDoing: [4],
      listDone: [0, 1, 2, 3]
    },
    {
      id: 1,
      title: 'Bachelorette Party',
      listTodo: [9],
      listDoing: [],
      listDone: []
    }
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

// reducer is a pure function that takes the previous state 
// and an action, and returns the next state

export const addProjectReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PROJECT:
      return {
        projects: [
          ...state.projects,
          {
            id: action.id,
            title: action.title,
            listTodo: action.listTodo,
            listDoing: action.listDoing,
            listDone: action.listDone
          }
        ]
      }

    default:
      return state
  }
}

export const addCardReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CARD_TO_TODO:
      return {
        projects: [
          ...state.projects, {
            projects: state.projects.map(p => {
              if (p.id == action.projectId) {
                p.listTodo.push(action.id)
              }

              return p
            })
          }
        ],

        cards: [
          ...state.cards,
          {
            id: action.id,
            title: action.title
          }
        ]
      };

    case ADD_CARD_TO_DOING:
      return {
        cards: [
          ...state.cards,
          {
            id: action.id,
            title: action.title
          }
        ],

        projects: [
          ...state.projects, {
            projects: state.projects.map(p => {
              if (p.id === action.projectId) {
                p.listDoing.push(action.id)
              }

              return p
            })
          }
        ]
      };

    case ADD_CARD_TO_DONE:
      return {
        cards: [
          ...state.cards,
          {
            id: action.id,
            title: action.title
          }
        ],

        projects: [
          ...state.projects, {
            projects: state.projects.map(p => {
              if (p.id === action.projectId) {
                p.listDone.push(action.id)
              }

              return p
            })
          }
        ]
      }

    default:
      return state
  }
}

