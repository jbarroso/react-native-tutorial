import React, { Component } from 'react';
import App from './containers/App';

const setup = () => {
  class Root extends Component {
    render() {
      return (
        <App/>
      );
    }
  }
  return Root;
}

export default setup;
