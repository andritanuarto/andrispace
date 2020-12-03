import React from "react";
import Enzyme, { shallow, mount } from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';
import { PrevNextButtons, mapStateToProps, handlePrevNextValue } from "../../shared/prevNextButtons";

Enzyme.configure({ adapter: new EnzymeAdapter() });

describe('<PrevNextButtons/>', () => {
  const defaultProps = {
    heroIndex: 1,
    slidesLength: 3,
    clickHandler: jest.fn()
  }

  let wrapper;

  beforeEach(() => {
    wrapper = mount(<PrevNextButtons {...defaultProps} />);
  });

  it('show expected props value', () => {
    expect(wrapper.props()).toEqual(defaultProps);
  });

  it('show expected value for mapStateToProps', () => {
    expect(mapStateToProps(defaultProps).heroIndex).toEqual(1);
  });

  it('has two buttons', () => {
    expect(wrapper.find('.btn--transparent').length).toEqual(2);
  });

  it('clicks previous button the index should be 0 because the heroIndex is 0', () => {
    wrapper.find('.btn--transparent').at(0).simulate('click');
    expect(defaultProps.clickHandler).toHaveBeenCalledWith(0);
  });

  it('clicks next button the index should be 0 because the heroIndex is 1', () => {
    wrapper.find('.btn--transparent').at(1).simulate('click');
    expect(defaultProps.clickHandler).toHaveBeenCalledWith(2);
  });

  it('has the right return value for handlePrevNextValue', () => {
    let slidePrevValue = handlePrevNextValue('prev', 1, 3);
    expect(slidePrevValue).toEqual(0);

    slidePrevValue = handlePrevNextValue('prev', 2, 3);
    expect(slidePrevValue).toEqual(1);

    slidePrevValue = handlePrevNextValue('next', 1, 3);
    expect(slidePrevValue).toEqual(2);

    slidePrevValue = handlePrevNextValue('next', 3, 1);
    expect(slidePrevValue).toEqual(0);
  });
});