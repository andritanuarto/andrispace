import React, { Component } from 'react';

const Hoc = (HocComponent) => {

  const renderedComponent = () => {
    const clickMe = (x) => {
      console.log(x);
    }

    return (
      <HocComponent handleClick={clickMe} />
    );
  };

  return renderedComponent;
}

export default Hoc;