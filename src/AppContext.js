import React from 'react';

const AppContext = React.createContext({
  projects: [
    {
      id: 0,
      title: 'Fullstack Capstone',
      lanes: [
        {
          id: 'todo',
          title: 'Todo',
          cards: [
            { id: 5, title: 'implement MVP' },
            { id: 6, title: 'feedback and iteration' },
            { id: 7, title: 'style your app' },
            { id: 8, title: 'finalize project' },
          ]
        },
        {
          id: 'doing',
          title: 'Doing',
          cards: [
            { id: 4, title: 'build static client' },
          ]
        },

        {
          id: 'done',
          title: 'Done',
          cards: [
            { id: 0, title: 'submit project proposal' },
            { id: 1, title: 'user stories' },
            { id: 2, title: 'screen inventory' },
            { id: 3, title: 'html wireframes' },
          ]
        }
      ]
    },
    {
      id: 1,
      title: 'Bachelorette Party',
    }
  ]
})

export default AppContext