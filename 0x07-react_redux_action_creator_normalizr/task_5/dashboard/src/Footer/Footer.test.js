/**
 * @jest-environment jsdom
 */
import { shallow, mount } from 'enzyme';
import React from 'react';
import Footer from './Footer';
import { getFullYear, getFooterCopy } from '../utils/utils';
import { AppContext } from '../App/AppContext';

describe('rendering components', () => {
	it('renders Footer component without crashing', () => {
		const wrapper = shallow(<Footer />);

		expect(wrapper.exists()).toEqual(true);
	});

	it('Footer components renders "Copyright ${getFullYear()} - ${getFooterCopy(true)}"', () => {
		const wrapper = mount(<Footer />);

		expect(wrapper.find('.footer').text()).toEqual(
			`Copyright ${getFullYear()} - ${getFooterCopy(true)}`
		);
	});

	it('only renders a link when user is logged in', () => {
		const testData = {
			user: { email: 'tobi@gmail.com', password: 'code247', isLoggedIn: true },
			logOut: () => {},
		};
		const wrapper = mount(
			<AppContext.Provider value={testData}>
				<Footer />
			</AppContext.Provider>
		);

		expect(wrapper.find('.footer a').exists()).toBe(true);
	});

	it('does not render link when user is logged out', () => {
		const testData = {
			user: { email: 'tobi@gmail.com', password: 'code247', isLoggedIn: false},
			logOut: () => {},
		};
		const wrapper = mount(
			<AppContext.Provider value={testData}>
				<Footer />
			</AppContext.Provider>
		);

		expect(wrapper.find('.footer a').exists()).toBe(false);
	});
});