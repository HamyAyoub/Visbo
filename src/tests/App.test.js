import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

describe("HelloWorld component", () => {
  it('renders without crashing using jest', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders the UI as expected', () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot()
  });

  it('renders without crashing using shallow rendering', () => {
    shallow(<App />);
  });
})



