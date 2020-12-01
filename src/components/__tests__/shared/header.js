import React from "react";
import Enzyme, { shallow, mount } from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';
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

jest.useFakeTimers();

describe('<Header/>', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Header {...defaultProps} />);
  });

  it('It should render the component properly', () => {
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

  it('should call handleNavigation funtion', () => {
    const mockFunction = jest.fn();
    const overwrite = Object.assign(defaultProps, {navigationOpen: true, handleNavigation: mockFunction});

    const wrapper = shallow(
      <Header {...overwrite} />
    );

    findByTestAttr(wrapper, 'nav-menu-home').simulate('click');
    expect(mockFunction).toHaveBeenCalledTimes(1);
  });

  it('should call handleInitialRenderStatus function', () => {
    const mockFunction = jest.fn();
    const overwrite = Object.assign(defaultProps, {navigationOpen: true, handleInitialRenderStatus: mockFunction});

    const wrapper = mount(<Header {...overwrite} />);
    
    // Fast-forward until all timers have been executed
    jest.advanceTimersByTime(5000);
    wrapper.update();

    // Now our callback should have been called!
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

  it('handleNavigation should call the UI.SET_NAVIGATION_OPEN action type', () => {
    const dispatch = jest.fn();

    mapDispatchToProps(dispatch).handleNavigation();
    expect(dispatch.mock.calls[0][0]).toEqual({ type: 'UI.SET_NAVIGATION_OPEN'});
  });

  it('handleInitialRenderStatus should call UI.SET_INITIAL_RENDER_STATUS action type', () => {
    const dispatch = jest.fn();

    mapDispatchToProps(dispatch).handleInitialRenderStatus();
    expect(dispatch.mock.calls[0][0]).toEqual({ type: 'UI.SET_INITIAL_RENDER_STATUS'});
  });
});