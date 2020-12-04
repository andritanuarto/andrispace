import React from "react";
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';
import { HeroRender, mapStateToProps, mapDispatchToProps } from "../../home/hero";

Enzyme.configure({ adapter: new EnzymeAdapter() });

describe('<HeroRenderer/>', () => { 
  const dummyData = {
    "allJavascriptFrontmatter":{
      "edges":[
        {
          "node":{
            "frontmatter":{
              "blurb":"Coders will be the wizard of tomorrow",
              "clientName":"UTG Academy",
              "error":false,
              "opacityColor":"#000000",
              "opacityLevel":"0.7",
              "postTitle":"UTG Academy – Website Redesign",
              "projectDate":"2019-12-18",
              "projectTitle":"UTG Academy Website Redesign",
              "url":"./utg",
              "logoWidth":"auto"
            }
          }
        }
      ]
    }
  }

  let wrapper;

  const defaultProps = {
    data: dummyData,
    heroIndex: 0,
    handleHeroIndex: jest.fn()
  }

  beforeEach(() => {
    wrapper = shallow(<HeroRender {...defaultProps} />);
  });

  it('It should render the HeroRender component properly', () => {
    expect(wrapper.find('.hero-container').length).toBe(1);
    expect(wrapper.find('.hero-container__slide-nav').length).toBe(1);
  });

  const initialState = {
    heroIndex: 1,
  };
  
  it('show expected value for mapStateToProps', () => {
    expect(mapStateToProps(initialState).heroIndex).toEqual(1);
  });

  it('handleNavigation should call the UI.SET_NAVIGATION_OPEN action type', () => {
    const dispatch = jest.fn();
    mapDispatchToProps(dispatch).handleHeroIndex(1);
    expect(dispatch.mock.calls[0][0]).toEqual({type: 'UI.SET_HERO_INDEX', heroIndex: 1});
  });


  it('calls slideIndexHandler function when slide is clicked', () => {
    wrapper.find('.hero-container__slide-nav').at(0).simulate('click');
    expect(defaultProps.handleHeroIndex).toHaveBeenCalled();
  });
});