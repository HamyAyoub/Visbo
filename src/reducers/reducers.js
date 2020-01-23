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

// TODO: merge reducers together, adjust rootReducer accordingly, you can have only 1 initialState..
export const addCardReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CARD_TO_TODO:
      let updatedStateForTodoList = {
        projects: [
          ...action.projects, action.projects.map(p => {
            if (p.id == action.projectId) {

              p.listTodo.push(action.id)
            }
            return p
          })
        ],

        cards: [
          ...state.cards,
          {
            id: action.id,
            title: action.title
          }
        ]
      }

      return updatedStateForTodoList;

    case ADD_CARD_TO_DOING:
      let updatedStateForDoingList = {
        projects: [
          ...action.projects, action.projects.map(p => {
            if (p.id === action.projectId) {
              p.listDoing.push(action.id)
            }
            return p
          })
        ],

        cards: [
          ...state.cards,
          {
            id: action.id,
            title: action.title
          }
        ]
      }

      return updatedStateForDoingList;

    case ADD_CARD_TO_DONE:
      let updatedStateForDoneList = {
        projects: [
          ...action.projects, action.projects.map(p => {
            if (p.id === action.projectId) {
              p.listDone.push(action.id)
            }
            return p
          })
        ],

        cards: [
          ...state.cards,
          {
            id: action.id,
            title: action.title
          }
        ]
      }

      return updatedStateForDoneList;

    default:
      return state
  }
}

