import React from "react";
import Notifications from "./Notifications";
import { shallow } from "enzyme";

describe('Notification tests', () => {
    it('render notification without crashing', () => {
        const component = shallow(<Notifications />);

        expect(component).toBeDefined();
    });

    it('render ul', () => {
        const component = shallow(<Notifications />);

        expect(component.find('ul')).toBeDefined();
    });

    it('renders three list items', () => {
        const component = shallow(<Notifications />);

        expect(component.find('li')).toHaveLength(3);
    });

    it('render the correct text', () => {
        const component = shallow(<Notifications />);

        expect(component.find('p').prop('children')).toBe(
            'Here is the list of notifications'
        );
    });
});