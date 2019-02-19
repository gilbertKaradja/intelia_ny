import React from 'react';
import { shallow, mount } from 'enzyme';

import { HashRouter as Router, Switch, Route, Redirect, MemoryRouter, StaticRouter } from 'react-router-dom';

import ArticlesScreen from '../index.js';


describe('ArticlesScreen component', () => {

    it('should render without issues', () => {

        // renders initial dropdown properly
        const wrapper = mount(
            <Router>
                <Switch>
                    <Route path='/articles' render={(props) => <ArticlesScreen {...props} />} />
                    <Redirect from="/" to="/articles" />
                </Switch>
            </Router>
        );

        expect(wrapper).toMatchSnapshot();

        wrapper.unmount();
    });

});