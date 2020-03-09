import React from "react";
import renderer from "react-test-renderer";
import { findByTestAttr } from '../../../test/testUtils';
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

test("renders correctly", () => {
  const logoComponent = findByTestAttr(setup(), 'logo');
  expect(logoComponent.length).toBe(1);
});