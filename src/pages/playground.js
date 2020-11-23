import React, { Component } from 'react';
import Hoc from '../components/playground/hoc';

class Playground extends Component {
  render() {
    const that = this;
    return (
      <button onClick={function () {that.props.handleClick('Playground')}}>Playground</button>
    )
  }
}

class App extends Component {
  clickMe() {
    this.props.handleClick('App');
  }

  render() {
    return (
      <button onClick={this.clickMe.bind(this)}>App</button>
    )
  }
}

Playground = Hoc(Playground);
App = Hoc(App);

export default Playground;
// export default App