import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';
import ProjectList from './ProjectList';
import ProjectItem from './ProjectItem';

describe('Smoke tests for components in DemoPage folder', () => {
  it('ProjectList renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <Route exact path='/demo-project' component={ProjectList} />
      </BrowserRouter>,
      div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('Header renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
      div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('ProjectItem renders without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(
      <BrowserRouter>
        <Route path='/demo-project/:projectId' component={ProjectItem} />
      </BrowserRouter>,
      div);
    ReactDOM.unmountComponentAtNode(div);
  });
})