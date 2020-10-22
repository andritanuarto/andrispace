import React from "react";
import Header from "../../shared/header";
import { findByTestAttr } from '../../../test/testUtils';
import Enzyme, { mount } from 'enzyme';
import { Provider } from "react-redux"
import configureStore from 'redux-mock-store';

import EnzymeAdapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new EnzymeAdapter() });

const mockStore = configureStore();
const store = mockStore();

const defaultProps = {
  navColor: '#ffffff',
  logoColor: '#ffffff',
  navigationOpen: '#ffffff',
  initialRender: '#ffffff',
  handleNavigation: '#ffffff',
  handleInitialRenderStatus: '#ffffff'
}

describe('My Footer Component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <Provider store={store}>
          <Header {...defaultProps} />
      </Provider>
    );
  });

  it('It should render <Header> properly', () => {
      expect(wrapper.find(Header).length).toBe(1);
      expect(wrapper.find('.header').length).toBe(1);
  });
});