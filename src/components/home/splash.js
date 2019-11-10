import React from 'react';
import Header from '../shared/header';
import SplashBottom from './splash-bottom';

export default ({children, clientLogo, backgroundColor, navColor}) => {
  return (
    <div className="splash" style={{backgroundColor}}>
      <Header navColor={navColor} />
      <div className="splash__content">
        {children}
      </div>
      <SplashBottom clientLogo={clientLogo} />
    </div>
  )
}