import React from 'react';
import ReactDOM from 'react-dom';
import HelloWorld from '../components/HelloWorld';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../redux/store';

describe("HelloWorld Component", () => {

  it('renders without crashing using jest', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Provider store={store}>
        <HelloWorld />
      </Provider>, 
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders the UI as expected', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <HelloWorld />
      </Provider>
      ).toJSON();
    expect(tree).toMatchSnapshot()
  });
})



