import React from 'react';
import { shallow, mount } from 'enzyme';

import ArticleEntry from '../index.js';

let sampleData = {
    "url": "https://www.nytimes.com/interactive/2019/02/15/upshot/british-irish-dialect-quiz.html",

    "section": "The Upshot",
    "byline": "By JOSH KATZ",

    "title": "The British-Irish Dialect Quiz",
    "abstract": "What does the way you speak say about where you’re from? Answer 25 questions to see your own custom dialect map.",
    "published_date": "2019-02-15",
    "source": "The New York Times",
    "id": 100000006354694,

    "media": [
        {
            "media-metadata": [
                {
                    "url": "https://static01.nyt.com/images/2019/02/14/us/british-irish-dialect-quiz-promo-1550183830563/british-irish-dialect-quiz-promo-1550183830563-thumbStandard-v3.jpg",
                    "format": "Standard Thumbnail",
                    "height": 75,
                    "width": 75
                },
                {
                    "url": "https://static01.nyt.com/images/2019/02/14/us/british-irish-dialect-quiz-promo-1550183830563/british-irish-dialect-quiz-promo-1550183830563-mediumThreeByTwo440-v3.jpg",
                    "format": "mediumThreeByTwo440",
                    "height": 293,
                    "width": 440
                }
            ]
        }
    ]
};

let sampleData2 = {
    "url": "https://www.nytimes.com/interactive/2019/02/15/upshot/british-irish-dialect-quiz.html",

    "section": "The Upshot",
    "byline": "By JOSH KATZ",

    "title": "The British-Irish Dialect Quiz",
    "abstract": "What does the way you speak say about where you’re from? Answer 25 questions to see your own custom dialect map.",
    "published_date": "2019-02-15",
    "source": "The New York Times",
    "id": 100000006354694,

    "media": ''
};



describe('DetailsScreen component', () => {

    it('should render without issues', () => {

        //renders initial dropdown properly
        const component = shallow(
            <ArticleEntry
                {...sampleData}
                selected={true}
            />
        );
        expect(component).toMatchSnapshot();

        component.unmount();
    });


    it('should render properly even if an image is not available', () => {

        //renders initial dropdown properly
        const component = shallow(
            <ArticleEntry
                {...sampleData2}
                selected={false}
            />
        );
        expect(component).toMatchSnapshot();

        component.unmount();
    });



    it('should call the back handler function when back button is clicked/pressed', () => {

        const onClickHandler = jest.fn(() => sampleData);

        const component = mount(
            <ArticleEntry
                articleData={sampleData}
                {...sampleData}
                onClickHandler={onClickHandler}
            />
        );

        expect(component).toMatchSnapshot();

        component.find('.ArticleEntry').simulate('click');

        expect(onClickHandler.mock.calls.length).toBe(1);
        expect(onClickHandler.mock.results[0].value.id).toBe(sampleData.id);

        component.unmount();
    });
});