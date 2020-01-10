import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Landing from './landing/landing';
import Demo from './demo/demo';
import DemoBoard from './demo/demo-board';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {
    todos: state.todos,
  };
}

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' >
          <Landing />
        </Route>

        <Route path='/demo' >
          <Demo />
        </Route>

        <Route path='/demo-board' >
          <DemoBoard />
        </Route>
      </Switch>
    );
  }
}
export default connect(mapStateToProps)(App);
