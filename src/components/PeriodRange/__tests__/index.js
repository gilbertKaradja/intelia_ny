import React from 'react';
import { shallow, mount } from 'enzyme';

import PeriodRange from '../index.js';

let sampleOptions = [
    { label: 'today', value: '1' },
    { label: 'last week', value: '7' },
    { label: 'last month', value: '30' },
];

describe('PeriodRange component', () => {

    it('should render without issues', () => {

        //renders initial dropdown properly
        const component = shallow(
            <PeriodRange
                value={sampleOptions[0]}
                options={sampleOptions}
            />
        );
        expect(component).toMatchSnapshot();

        component.unmount();
    });

    

    it('should call a handler function and reflect value accordingly', () => {

        const onChangeHandler = jest.fn(value => value);

        const component = mount(
            <PeriodRange
                value={sampleOptions[0]}
                options={sampleOptions}
                onChange={onChangeHandler}
            />
        );

        expect(component).toMatchSnapshot();

        component.simulate('click');
        component.children().childAt(1).simulate('click');

        expect(onChangeHandler.mock.calls.length).toBe(1);
        expect(onChangeHandler.mock.results[0].value).toBe(sampleOptions[1]);

        expect(component).toMatchSnapshot();

        component.unmount();

    });
});