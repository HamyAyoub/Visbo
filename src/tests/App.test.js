import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components/App';
import HelloWorld from '../components/HelloWorld';
import renderer from 'react-test-renderer';
import Enzyme, { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import store from '../redux/store';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';

configure({ adapter: new Adapter() })

// function shallowSetup() {
//   const props = {
//    text: "Hello World"
//   }

//   const enzymeWrapper = shallow(
//     <Provider store={store}>
//         <HelloWorld />
//     </Provider>
//   ).dive();

//   return {
//     props,
//     enzymeWrapper
//   };
// }

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

  it('should render an h1 tag containing Hello World string', () => {
    //const { enzymeWrapper, props } = shallowSetup();

    const enzymeWrapper = shallow(
      <Provider store={store}>
        <HelloWorld />
      </Provider>
    )

    expect(enzymeWrapper.find('h1').text()).toBe(props.text);
   // expect(enzymeWrapper.containsMatchingElement(<h1>Hello World</h1>)).toBe(true);
  });
})



