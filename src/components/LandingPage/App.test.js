import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from '../App';
import Footer from './Footer';
import Header from '../DemoPage/Header';
import Main from './Main';
import PageNotFound from '../PageNotFound';
import Landing from './Landing';

describe('Smoke tests for components in LandingPage folder', () => {
  it('App renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
      div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('Footer renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Footer />, div);
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

  it('Main renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <Main />
      </BrowserRouter>,
      div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('PageNotFound renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<PageNotFound />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('Landing renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <Landing />
      </BrowserRouter>,
      div);
    ReactDOM.unmountComponentAtNode(div);
  });
})


