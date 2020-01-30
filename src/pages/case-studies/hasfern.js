import React from "react";
import ad1 from '../../case-studies/hasfern/img/ad1.gif';

export default () => (
  <div
    className="hasfern"
    style={{
      display: 'flex',
      width: '100%',
      height: '100vh',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
    <img src={ad1} style={{width: '780px'}}/>
  </div>
);