import React from 'react';

// const Child = () => {
//   console.log('child rerender');
//   return (
//     <div>Child</div>
//   )
// }

class Child extends React.PureComponent {

  render() {
    console.log(this.props);
    console.log('child rerender');
    return <h1>Hello, {this.props.name}</h1>;
  }
}

export default Child;