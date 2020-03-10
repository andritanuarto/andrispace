import React from "react";
import { findByTestAttr, proptypesValidator } from '../../../test/testUtils';
import Logo from "../../shared/logo";

import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new EnzymeAdapter() });

const defaultProps = {
  animated: true
}

const setup = (props={}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow( <Logo {...setupProps} /> );
}

test('renders correctly', () => {
  const logoComponent = findByTestAttr(setup(), 'logo');
  expect(logoComponent.length).toBe(1);
});

test('proptypes are correct', () => {
  const expectedProps = { animated: false, logoColor: '#ffffff' };
  proptypesValidator(Logo, expectedProps);
});

test('logo has .logo--animated when animated props is true', () => {
  const wrapper = setup({animated: true});
  expect(wrapper.find('.logo--animated').length).toBe(1);
});
