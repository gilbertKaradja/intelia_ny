import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from "react-router-dom";

import RootScreen from './screens/index.js';

import './styles/main.scss';

export class App extends Component {
    render() {
        return (
            <HashRouter>
                <RootScreen />
            </HashRouter>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root') || document.createElement('div')
);