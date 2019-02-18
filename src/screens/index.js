import React, { Component } from 'react';
import { Switch, Route, Redirect } from "react-router-dom";

import ArticlesScreen  from './articles/index.js';

class AppRoot extends Component {
    render() {
        return (
            <div className="AppRoot">
                <Switch>
                    <Route path='/articles' component={ArticlesScreen}/>
                    <Redirect from="/" to="/articles"/>
                </Switch>
            </div>
        );
    }
}

export default AppRoot;
