import React, { Component } from 'react';
import Overview from './screens/Overview/Overview';

export default class App extends Component {
  render() {
    return (
      <Overview {...props} />
    );
  };
}

module.export = App;
