import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { shallow } from 'enzyme';

describe('App component', () => {
  it('render without crashing', () => {
    render(<App />);
  });

  it('renders a div with the class App-header', () => {
    const component = shallow(<App />);

    expect(component.find('App-header')).toBeDefined();
  });

  it('renders a div with the class App-body', () => {
    const component = shallow(<App />);

    expect(component.find('App-body')).toBeDefined();
  });

  it('render a div with the class App-footer', () => {
    const component = shallow(<App />);

    expect(component.find('App-footer')).toBeDefined();
  });
});
