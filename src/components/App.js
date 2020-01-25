import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Landing from './LandingPage/Landing';
import ProjectList from './DemoPage/ProjectList';
import ProjectItem from './DemoPage/ProjectItem';
import PageNotFound from './PageNotFound';
import AppContext from '../AppContext';
import config from '../config';

class App extends Component {
  state = {
    projects: []
    // projects: [
    //   {
    //     id: 0,
    //     title: 'Fullstack Capstone',
    //     lanes: [
    //       {
    //         id: 'todo',
    //         title: 'Todo',
    //         cards: [
    //           { id: 'c5', title: 'implement MVP', description: 'using node/express, postgres' },
    //           { id: 'c6', title: 'feedback and iteration' },
    //           { id: 'c7', title: 'style your app' },
    //           { id: 'c8', title: 'finalize project', label: 'by Jan 31' },
    //         ]
    //       },
    //       {
    //         id: 'doing',
    //         title: 'Doing',
    //         cards: [
    //           { id: 'c4', title: 'build static client', description: 'using react' },
    //         ]
    //       },

    //       {
    //         id: 'done',
    //         title: 'Done',
    //         cards: [
    //           { id: 'c0', title: 'submit project proposal' },
    //           { id: 'c1', title: 'user stories' },
    //           { id: 'c2', title: 'screen inventory', label: 'due Jan 5' },
    //           { id: 'c3', title: 'html wireframes' },
    //         ]
    //       }
    //     ]
    //   },
    //   {
    //     id: 1,
    //     title: 'Bachelorette Party',
    //     lanes: [
    //       {
    //         id: 'todo',
    //         title: 'Todo',
    //         cards: [
    //           { id: 'c9', title: 'book spa & hotel', label: 'by March 30' }
    //         ]
    //       },
    //       {
    //         id: 'doing',
    //         title: 'Doing',
    //         cards: []
    //       },

    //       {
    //         id: 'done',
    //         title: 'Done',
    //         cards: []
    //       }
    //     ]
    //   }
    // ]
  }

  componentDidMount() {
    fetch(`${config.API_ENDPOINT}/projects`, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => {
        console.log(res)
        if (!res.ok) {
          return res.json().then((error) => {
            throw error;
          });
        }
        return res.json()
      })
      .then((data) => {
        console.log(data)
        const newProjects = [
          ...this.state.projects,
          data
        ]

        this.setState({ projects: newProjects });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  addProject = (id, title) => {

    const newProjects = [
      ...this.state.projects,
      {
        id,
        title,
        lanes: [
          {
            id: 'todo',
            title: 'Todo',
            cards: []
          },
          {
            id: 'doing',
            title: 'Doing',
            cards: []
          },

          {
            id: 'done',
            title: 'Done',
            cards: []
          }
        ]
      }
    ]

    this.setState({ projects: newProjects });
  }

  render() {
    const contextValue = {
      projects: this.state.projects,
      addProject: this.addProject,
    }

    return (
      <AppContext.Provider value={contextValue}>

        <Switch>

          <Route exact path='/' component={Landing} />

          <Route exact path='/demo-project' component={ProjectList} />

          <Route path='/demo-project/:projectId' component={ProjectItem} />

          <Route component={PageNotFound} />

        </Switch>

      </AppContext.Provider>
    );
  }
}
export default App;
