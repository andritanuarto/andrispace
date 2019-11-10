import React from 'react';
import Header from '../shared/header';
import SplashBottom from './splash-bottom';

export default (props) => {
  return (
    <div className="splash">
      <Header/>
      <div className="splash__content">
        {props.children}
      </div>
      <SplashBottom/>
    </div>
  )
}