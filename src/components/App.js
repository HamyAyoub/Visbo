import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Landing from './LandingPage/Landing';
import ProjectList from './DemoPage/ProjectList';
import ProjectItem from './DemoPage/ProjectItem';
// import DemoBoard from './demo/demo-board';
import PageNotFound from './PageNotFound'


class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={Landing} />

        <Route exact path='/demo-project' component={ProjectList} />

        <Route path='/demo-project/:projectId' component={ProjectItem} />

        {/* <Route path='/demo-board' >
          <DemoBoard />
        </Route> */}

        <Route component={PageNotFound} />
      </Switch>
    );
  }
}
export default App;
