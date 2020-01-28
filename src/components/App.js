import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Landing from './LandingPage/Landing';
import ProjectList from './DemoPage/ProjectList';
import ProjectItem from './DemoPage/ProjectItem';
import PageNotFound from './PageNotFound';
import AppContext from '../AppContext';
import config from '../config';

class App extends Component {
  state = { projects: [] }

  componentDidMount() {
    fetch(`${config.API_ENDPOINT}/projects`, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => {
        if (!res.ok) {
          return res.json().then((error) => {
            throw error;
          });
        }
        return res.json()
      })
      .then((data) => {
        const newProjects = this.state.projects.concat(data)
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
          { id: 'todo', title: 'Todo', cards: [] },
          { id: 'doing', title: 'Doing', cards: [] },
          { id: 'done', title: 'Done', cards: [] }
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
