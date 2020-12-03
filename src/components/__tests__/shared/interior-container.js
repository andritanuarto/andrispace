import React from "react";
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';
import { InteriorContainer, mapStateToProps } from "../../../components/shared/interior-container";

Enzyme.configure({ adapter: new EnzymeAdapter() });

describe('<InteriorContainer/>', () => {
  let wrapper;

  it('It should render the component properly', () => {
    wrapper = shallow(
      <InteriorContainer additionalClass="journal-page" navigationOpen={true}>
        Render
      </InteriorContainer>
    );
    expect(wrapper.find('.interior-page').length).toBe(1);
    expect(wrapper.find('.interior-page--overflow-hidden').length).toBe(1);
    expect(wrapper.find('.journal-page').length).toBe(1);
  });

  it('.interior-page--overflow-hidden should not exist if navigation is not open', () => {
    wrapper = shallow(
      <InteriorContainer additionalClass="journal-page" navigationOpen={false}>
        Render
      </InteriorContainer>
    );
    expect(wrapper.find('.interior-page--overflow-hidden').length).toBe(0);
  });

  it('show expected value for mapStateToProps', () => {
    const initialState = {
      navigationOpen: true,
    };

    expect(mapStateToProps(initialState).navigationOpen).toEqual(true);
  });
});