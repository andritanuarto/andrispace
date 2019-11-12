import React from 'react';
import { connect } from "react-redux";
import Header from '../shared/header';

const mapStateToProps = ({ count }) => {
  return {
    count
  }
}

const Splash = ({children, clientLogo, backgroundColor, navColor, count}) => {
  console.log(count, 'count');
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
            <li><a/></li>
            <li><a/></li>
            <li><a/></li>
            <li><a/></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default connect(mapStateToProps)(Splash);