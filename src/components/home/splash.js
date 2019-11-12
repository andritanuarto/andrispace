import React from 'react';
import { connect } from "react-redux";
import Header from '../shared/header';
import { handleSplash } from '../../actions/ui';

const mapDispatchToProps = (dispatch) => {
  return {
    handleSplash: (splashIndex) => {
      dispatch(handleSplash(splashIndex));
    }
  };
};

const mapStateToProps = ({ splashIndex }) => {
  return {
    splashIndex
  };
};

const Splash = ({children, clientLogo, backgroundColor, navColor, count, handleSplash}) => {

  const splashHandler = (splashIndex) => {
    handleSplash(splashIndex)
  };

  return (
    <div className="splash" style={{backgroundColor}}>
      <Header navColor={navColor} />
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
            <li><a onClick={() => splashHandler(0)}/></li>
            <li><a onClick={() => splashHandler(1)}/></li>
            <li><a onClick={() => splashHandler(2)}/></li>
            <li><a onClick={() => splashHandler(3)}/></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Splash);