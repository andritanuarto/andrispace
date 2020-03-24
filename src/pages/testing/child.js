import React, { memo } from 'react';

const Child = (props) => {
  console.log('child rerender');
  return (
    <h1>Hello, {props.name}</h1>
  );
}

export default memo(Child, (prevProps, nextProps) => {
  return prevProps !== nextProps;
});