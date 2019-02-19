import React from 'react';
import { shallow, mount } from 'enzyme';

import FadeImage from '../index.js';

import testImage from './test_image.jpg';
import testImage2 from './test_image_2.png';

describe('FadeImage component', () => {

    it('should render without issues', () => {

        //renders initial dropdown properly
        const component = shallow(
            <FadeImage
                src={testImage}
            />
        );
        expect(component).toMatchSnapshot();

        component.unmount();
    });

    it('should call onLoad function', () => {

        const spy = jest.spyOn(FadeImage.prototype, 'onLoadHandler');

        const component = mount(
            <FadeImage
                src={testImage}
            />
        );

        component.instance().onLoadHandler();
        expect(spy).toHaveBeenCalled();

        component.unmount();
    });

    it('should swap images when src is changed', () => {
        
        const component = shallow(
            <FadeImage
                src={testImage}
            />
        );
        expect(component).toMatchSnapshot();

        component.setProps({
            src: testImage2
        });

        expect(component).toMatchSnapshot();
    });
});