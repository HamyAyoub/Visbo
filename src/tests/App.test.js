import React from 'react';
import ReactDOM from 'react-dom';
import HelloWorld from '../components/HelloWorld';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16'
import Enzyme, { shallow } from 'enzyme';
import { Provider } from 'react-redux';

Enzyme.configure({ adapter: new Adapter() })

function setup() {
  const props = {
    text: jest.fn()
  }

  const enzymeWrapper = shallow(<HelloWorld {...props} />)

  return {
    props,
    enzymeWrapper
  }

}

describe("HelloWorld Component", () => {
  // it('renders without crashing using jest', () => {
  //   const div = document.createElement('div');
  //   ReactDOM.render(<App />, div);
  //   ReactDOM.unmountComponentAtNode(div);
  // });

  // it('renders the UI as expected', () => {
  //   const tree = renderer.create(<App />).toJSON();
  //   expect(tree).toMatchSnapshot()
  // });

  it('should render self and subcomponents', () => {
    const { enzymeWrapper } = setup()

    expect(enzymeWrapper.find('h1').text()).toBe('Hello World')

    const helloWorldProps = enzymeWrapper.find('Hello World').props()
    
    expect(helloWorldProps.placeholder).toEqual('Hello World')
  });
})



