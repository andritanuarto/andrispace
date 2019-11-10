import React from 'react';
import Illustration from "./plan.png";

export default (props) => {
  return (
    <div className="planswift" style={{width: '100%', position: 'relative'}}>
      <div
        style={{
          position: 'absolute',
          width: '100%',
          color: '#ffffff',
          display: 'flex',
          height: '100%',
          alignItems: 'center',
          padding: '0 30px',
          justifyContent: 'center'
        }}>
        <h1 style={{marginBottom: 0}}>Redesign The Planning System</h1>
        <img src={Illustration} style={{
          maxWidth: '300px', width: '100%', marginBottom: 0, marginLeft: '50px'
        }}/>
      </div>
      <div style={{height: '80px', background: '#523360'}}/>
      <div style={{height: '60px', background: '#1D3860'}}/>
      <div style={{height: '120px', background: '#194D29'}}/>
      <div style={{height: '60px', background: '#1D3860'}}/>
      <div style={{height: '80px', background: '#523360'}}/>
    </div>
  )
}