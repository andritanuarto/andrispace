import React from 'react';
import { connect } from "react-redux";
import Header from '../shared/header';
import { handleSplash } from '../../actions/ui';

const mapStateToProps = ({ splashIndex }) => {
  return {
    splashIndex
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleSplash: (splashIndex) => {
      dispatch(handleSplash(splashIndex));
    }
  };
};

const Splash = (
    {
      children,
      clientLogo,
      backgroundColor,
      navColor,
      logoColor,
      handleSplash,
      slideLength
    }
  ) => {
    const splashHandler = (splashNumber) => {
      handleSplash(splashNumber)
    };

    const fillers = Array(slideLength).fill('');

    const slidenavs = fillers.map(
      (_, index) => <li><a onClick={() => splashHandler(index)}/></li>
    );

    return (
      <div className="splash" style={{backgroundColor}}>
        <Header navColor={navColor} logoColor={logoColor}/>
        <div className="splash__content">
          {children}
        </div>
        <div className="splash__bottom">
          <div className="splash__left">
            <span>Project Client</span>
            <div className="splash__client-logo">
              <img src={clientLogo} alt="planswift"/>
            </div>
          </div>
          <div className="splash__right">
            <span>Read more the case study</span>
            <strong>Case Study</strong>
            <ul>
              {slidenavs}
            </ul>
          </div>
        </div>
      </div>
    )
  }

export default connect(mapStateToProps, mapDispatchToProps)(Splash);