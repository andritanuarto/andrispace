import React from "react";
import Enzyme, { mount, shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import { initialState } from '../../../state/createStore';
import { Header } from "../../shared/header";

Enzyme.configure({ adapter: new EnzymeAdapter() });
const mockStore = configureStore([]);

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
    const overwrite = {
      navColor: '#ffffff',
      logoColor: '#ffffff',
      navigationOpen: true,
      initialRender: false,
      handleNavigation: () => {},
      handleInitialRenderStatus: () => {}
    }

    const wrapper = shallow(
      <Header {...overwrite} />
    );

    expect(wrapper.find('.nav').length).toBe(1);
  });
});