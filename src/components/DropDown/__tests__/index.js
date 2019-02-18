import React from 'react';
import { shallow, mount } from 'enzyme';

import DropDown from '../index.js';

let sampleOptions = [
    { label: 'Train', value: '1' },
    { label: 'Stop Sign', value: '9' },
    { label: 'Couch', value: 'joke' },
    { label: 'Random Sentence', value: 'evo993' },
    { label: 'Something', value: 'chihuahua' }
];

describe('DropDown component', () => {

    it('should render without issues', () => {

        //renders initial dropdown properly
        const component = shallow(
            <DropDown
                value={sampleOptions[0]}
                options={sampleOptions}
            />
        );
        expect(component).toMatchSnapshot();

        component.unmount();
    });

    it('should open and close properly', () => {
        //renders initial dropdown properly
        const component = mount(
            <DropDown
                value={sampleOptions[0]}
                options={sampleOptions}
            />
        );


        expect(component.state('showList')).toBeFalsy();
        expect(component.exists('.dropdown_list')).toBeFalsy();
        expect(component).toMatchSnapshot();


        //make sure dropdown opens properly
        component.find('.value_container').simulate('click');

        expect(component.state('showList')).toBeTruthy();
        expect(component.exists('.dropdown_list')).toBeTruthy();
        expect(component).toMatchSnapshot();

        //stays open
        component.find('.value_container').simulate('click');

        expect(component.state('showList')).toBeTruthy();
        expect(component.exists('.dropdown_list')).toBeTruthy();

        //make sure dropdown closes properly
        component.find('.overlay').simulate('click');

        expect(component.state('showList')).toBeFalsy();
        expect(component.exists('.dropdown_list')).toBeFalsy();
        expect(component).toMatchSnapshot();

        component.unmount();
    });

    it('should call a handler function and update in value accordinglyDictionary', () => {

        const onChangeHandler = jest.fn(value => value);

        const component = mount(
            <DropDown
                value={sampleOptions[0]}
                options={sampleOptions}
                onChange={onChangeHandler}
            />
        );

        expect(component.state('showList')).toBeFalsy();
        expect(component.exists('.dropdown_list')).toBeFalsy();

        component.find('.value_container').simulate('click');

        expect(component.state('showList')).toBeTruthy();
        expect(component.exists('.dropdown_list')).toBeTruthy();

        component.find('.dropdown_list ul').childAt(1).simulate('click');

        expect(component.state('showList')).toBeFalsy();
        expect(component.exists('.dropdown_list')).toBeFalsy();


        expect(onChangeHandler.mock.calls.length).toBe(1);
        expect(onChangeHandler.mock.results[0].value).toBe(sampleOptions[1]);

        expect(component).toMatchSnapshot();

        component.unmount();

    });
});