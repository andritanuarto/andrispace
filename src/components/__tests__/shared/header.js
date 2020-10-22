import React from "react";
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { findByTestAttr } from '../../../test/testUtils';
import { Header, mapStateToProps, mapDispatchToProps } from "../../shared/header";

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

  it('show expected value for mapStateToProps', () => {
    const initialState = {
      initialRender: true,
      navigationOpen: false
    };

    expect(mapStateToProps(initialState).initialRender).toEqual(true);
    expect(mapStateToProps(initialState).navigationOpen).toEqual(false);
  });

  it('handleNavigation should call the right action type', () => {
    const dispatch = jest.fn();

    mapDispatchToProps(dispatch).handleNavigation();
    expect(dispatch.mock.calls[0][0]).toEqual({ type: 'UI.SET_NAVIGATION_OPEN'});
  });

  it('handleInitialRenderStatus should call the right action type', () => {
    const dispatch = jest.fn();

    mapDispatchToProps(dispatch).handleInitialRenderStatus();
    expect(dispatch.mock.calls[0][0]).toEqual({ type: 'UI.SET_INITIAL_RENDER_STATUS'});
  });
});