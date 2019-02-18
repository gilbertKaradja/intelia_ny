import React, { Component } from 'react';
import { BrowserRouter, HashRouter, Route, Link } from "react-router-dom";

import RootScreen from './screens/index.js';

import './styles/main.scss';
// import './assets/fonts/Nunito-Regular.ttf';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <RootScreen />
      </HashRouter>
    );
  }
}

export default App;
