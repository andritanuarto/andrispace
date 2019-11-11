import React from 'react';
import Illustration from "./plan.png";

export default (props) => {
  return (
    <div className="planswift" style={{width: '100%', position: 'relative'}}>
      <div className="planswift__content">
        <h1>Redesign The Planning System</h1>
        <img src={Illustration}/>
      </div>
      <div className="line1"/>
      <div className="line2"/>
      <div className="line3"/>
      <div className="line2"/>
      <div className="line1"/>
    </div>
  )
}