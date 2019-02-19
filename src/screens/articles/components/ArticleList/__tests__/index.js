import React from 'react';
import { shallow, mount } from 'enzyme';

import ArticleList from '../index.js';

let sampleOptions = [
    { label: 'Train', value: '1' },
    { label: 'Stop Sign', value: '9' },
    { label: 'Couch', value: 'joke' },
    { label: 'Random Sentence', value: 'evo993' },
    { label: 'Something', value: 'chihuahua' }
];

describe('ArticleList component', () => {

    it('should render a loading indicator when loading', () => {

        //renders initial dropdown properly
        const component = mount(
            <ArticleList loading={true} />
        );
        expect(component).toMatchSnapshot();

        component.unmount();
    });

    it('should render an error message and a retry button when failed to get posts', () => {

        const retryButtonHandler = jest.fn(value => value);

        //renders initial dropdown properly
        const component = mount(
            <ArticleList
                loading={false}
                errorLoading={true}
                retryButtonHandler={retryButtonHandler}
            />
        );
        expect(component).toMatchSnapshot();

        component.find('.retry_button').simulate('click');

        expect(retryButtonHandler.mock.calls.length).toBe(1);

        component.unmount();
    });

});