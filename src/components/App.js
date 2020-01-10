import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingPage from './LandingPage/LandingPage';
import DemoProjectList from './DemoPage/DemoProjectList';
import DemoProjectItem from './DemoPage/DemoProjectItem';
// import DemoBoard from './demo/demo-board';
import PageNotFound from './PageNotFound'


class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={LandingPage} />

        <Route exact path='/demo-project' component={DemoProjectList} />

        <Route path='/demo-project/:projectId' component={DemoProjectItem} />

        {/* <Route path='/demo-board' >
          <DemoBoard />
        </Route> */}

        <Route component={PageNotFound} />
      </Switch>
    );
  }
}
export default App;
