import React, { Component } from 'react';
import Navigation from './Navigation.jsx';
import { hot } from 'react-hot-loader/root';

class App extends Component {
  render() {
    return <Navigation/>;
  }
}

export default hot(App);
