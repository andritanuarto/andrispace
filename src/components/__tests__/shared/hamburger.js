import React from "react";
import { findByTestAttr } from '../../../test/testUtils';
import Hamburger from "../../shared/hamburger";
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new EnzymeAdapter() });

const mockFunction = jest.fn();

const defaultProps = {
  navColor: '#000',
  navigationOpen: false,
  handleNavigation: mockFunction
}

const setup = (props={}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow( <Hamburger {...setupProps} /> );
}

test('renders correctly', () => {
  const hamburgerButton = findByTestAttr(setup(), 'hamburger');
  expect(hamburgerButton.length).toBe(1);
});

test('has the right class based on navigationOpen props', () => {
  const wrapper = setup({navigationOpen: true});
  expect(wrapper.find('.is-active').length).toBe(1);
});

test('call the right function when it\'s clicked', () => {
  const hamburgerButton = findByTestAttr(setup(), 'hamburger');
  hamburgerButton.simulate('click');

  expect(mockFunction).toHaveBeenCalledTimes(1);
});