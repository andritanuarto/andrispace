import React from "react";
import Enzyme, { mount, shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { findByTestAttr } from '../../../test/testUtils';
import { Header } from "../../shared/header";

Enzyme.configure({ adapter: new EnzymeAdapter() });

const defaultProps = {
  navColor: '#ffffff',
  logoColor: '#ffffff',
  navigationOpen: false,
  initialRender: false,
  handleNavigation: () => {},
  handleInitialRenderStatus: () => {}
}

describe('<Header/>', () => {
  let store;

  it('It should render the component properly', () => {
    const wrapper = shallow(
      <Header {...defaultProps} />
    );

    expect(wrapper.find('.header').length).toBe(1);
  });

  it('It should render nav', () => {
    const overwrite = Object.assign(defaultProps, {navigationOpen: true});

    const wrapper = shallow(
      <Header {...overwrite} />
    );

    expect(wrapper.find('.nav').length).toBe(1);
    expect(findByTestAttr(wrapper, 'nav-menu').length).toBe(5);
  });

  it('should call funtion', () => {
    const mockFunction = jest.fn();
    const overwrite = Object.assign(defaultProps, {navigationOpen: true, handleNavigation: mockFunction});

    const wrapper = shallow(
      <Header {...overwrite} />
    );

    findByTestAttr(wrapper, 'nav-menu-home').simulate('click');
    expect(mockFunction).toHaveBeenCalledTimes(1);
  });
});