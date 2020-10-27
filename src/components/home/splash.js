import React from 'react';
import { connect } from "react-redux";
import Header from '../shared/header';
import { handleSplash } from '../../actions/ui';

export const mapDispatchToProps = (dispatch) => {
  return {
    handleSplash: (splashIndex) => {
      dispatch(handleSplash(splashIndex));
    }
  };
};

export const Splash = (
  {
    children,
    clientLogo,
    backgroundColor,
    navColor,
    logoColor,
    handleSplash,
    slideLength,
    textColor,
    slideNavColor,
    activeSlideNavColor,
    activeSlideIndex,
  }
) => {
  const splashHandler = (splashNumber) => {
    handleSplash(splashNumber)
  };

  const fillers = Array(slideLength).fill('');

  const slidenavs = fillers.map((_, index) => {
    return (
      <li key={index}>
        <a
          data-test={`slide-nav`}
          style={{background: activeSlideIndex === index ? activeSlideNavColor : slideNavColor}}
          onClick={() => splashHandler(index)}/>
      </li>
    );
  });

  return (
    <div className="splash" style={{backgroundColor}}>
      <Header navColor={navColor} logoColor={logoColor}/>
      <div className="splash__content">
        {children}
      </div>
      <div className="splash__bottom" style={{color: textColor}}>
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

Splash.defaultProps = {
  navColor: '#fff',
  logoColor: '#fff',
  backgroundColor: '#101010',
  textColor: '#fff',
  slideNavColor: '#fff',
  activeSlideNavColor: 'yellow'
};

export default connect(null, mapDispatchToProps)(Splash);