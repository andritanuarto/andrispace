import React from "react";
import Enzyme, { shallow, mount } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { findByTestAttr } from '../../../test/testUtils';
import { Splash, mapDispatchToProps } from "../../home/splash";

Enzyme.configure({ adapter: new EnzymeAdapter() });

const defaultProps = {
  navColor: '#fff',
  logoColor: '#fff',
  backgroundColor: '#101010',
  textColor: '#fff',
  slideNavColor: '#fff',
  activeSlideNavColor: 'yellow',
  activeSlideIndex: 0,
  slideLength: 3
};

describe('<Splash/>', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Splash {...defaultProps} />);
  });

  it('It should render the component properly', () => {
    expect(wrapper.find('.splash').length).toBe(1);
  });

  it('handleNavigation should call the UI.SET_SPLASH_INDEX action type', () => {
    const dispatch = jest.fn();

    mapDispatchToProps(dispatch).handleSplash(1);
    expect(dispatch.mock.calls[0][0]).toEqual({ type: 'UI.SET_SPLASH_INDEX', splashIndex: 1});
  });

  it('should call splashHandler function', () => {
    const mockFunction = jest.fn();
    const overwriteProps = Object.assign(defaultProps, {handleSplash: mockFunction});
    wrapper = shallow(<Splash {...overwriteProps} />);


    const testAttr = findByTestAttr(wrapper, 'slide-nav');
    expect(testAttr.length).toBe(3);
    testAttr.at(0).simulate('click');
    testAttr.at(1).simulate('click');
    testAttr.at(2).simulate('click');
    expect(mockFunction).toHaveBeenCalledTimes(3);
  });

  // it('has the right active index slide', () => {

  // });

});
