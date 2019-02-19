import React from 'react';
import { shallow, mount } from 'enzyme';

import ArticleList from '../index.js';

let sampleData = [
    { id: 'itemOne' },
    { id: 'itemTwo' },
    { id: 'itemTHree' },
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

    it('should render a list of articles given a list of articles', () => {

        const selectArticleHandler = jest.fn(value => value);
        const loadMoreClickHandler = jest.fn();

        const component = mount(
            <ArticleList
                loading={false}
                errorLoading={false}
                data={sampleData}
                selectArticleHandler={selectArticleHandler}
                loadMoreClickHandler={loadMoreClickHandler}
                fetchingMoreArticles={false}
                activeArticleData={sampleData[0]}
            />
        );

        expect(component).toMatchSnapshot();

        component.find('.articles_wrapper').childAt(1).simulate('click');

        expect(selectArticleHandler.mock.calls.length).toBe(1);
        expect(selectArticleHandler.mock.results[0].value).toBe(sampleData[1]);

        component.find('.load_control').simulate('click');

        expect(loadMoreClickHandler.mock.calls.length).toBe(1);

        component.setProps({ fetchingMoreArticles: true });

        // expect(component).toMatchSnapshot();
    });

    it('should render an empty article list message and image', () => {


        //renders initial dropdown properly
        const component = mount(
            <ArticleList
                loading={false}
                errorLoading={false}
                data={null}
            />
        );
        expect(component).toMatchSnapshot();

        component.unmount();
    });

});