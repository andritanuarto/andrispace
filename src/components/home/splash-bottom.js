import React from 'react';

export default ({clientLogo}) => {
  return (
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
  )
}