import React from "react";
import Enzyme, { shallow, mount } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { findByTestAttr } from '../../../test/testUtils';
import { Splash, mapStateToProps } from "../../home/splash";

Enzyme.configure({ adapter: new EnzymeAdapter() });

const defaultProps = {
  navColor: '#fff',
  logoColor: '#fff',
  backgroundColor: '#101010',
  textColor: '#fff',
  slideNavColor: '#fff',
  activeSlideNavColor: 'yellow'
};

describe('<Splash/>', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Splash {...defaultProps} />);
  });

  it('It should render the component properly', () => {
    expect(wrapper.find('.splash').length).toBe(1);
  });
});
