import React from 'react';
import { shallow, mount } from 'enzyme';

import DetailsScreen from '../index.js';

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
            <DetailsScreen
                articleData={sampleData}
            />
        );
        expect(component).toMatchSnapshot();

        component.unmount();
    });


    it('should render properly even if an image is not available', () => {

        //renders initial dropdown properly
        const component = shallow(
            <DetailsScreen
                articleData={sampleData2}
            />
        );
        expect(component).toMatchSnapshot();

        component.unmount();
    });



    it('should call the back handler function when back button is clicked/pressed', () => {

        const spy = jest.spyOn(DetailsScreen.prototype, 'goBack');

        const component = mount(
            <DetailsScreen
                articleData={sampleData}
                history={{goBack: () => {}}}
            />
        );

        component.instance().goBack();

        expect(spy).toHaveBeenCalled();

        spy.mockClear()
    });

    it('should render nothing on empty props and call the back handler', () => {

        const spy = jest.spyOn(DetailsScreen.prototype, 'goBack');

        const component = mount(
            <DetailsScreen
                articleData={null}
                history={{goBack: () => {}}}
            />
        );

        expect(component).toMatchSnapshot();

        component.instance().goBack();

        expect(spy).toHaveBeenCalled();

        spy.mockClear()
    });
});