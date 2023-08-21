/**
 * @jest-environment jsdom
 */
import React from 'react';
import Header from './Header';
import { shallow, mount } from 'enzyme';
import { StyleSheetTestUtils } from 'aphrodite';
import { AppContext, defaultUser, defaultLogout } from '../App/AppContext';

beforeEach(() => {
	StyleSheetTestUtils.suppressStyleInjection();
});
afterEach(() => {
	StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe('Test for header components', () => {
	it('render without crashing', () => {
		const wrapper = shallow(
			<AppContext.Provider>
				<Header />
			</AppContext.Provider>
		);

		expect(wrapper.exists()).toBe(true);
	});

	it('renders img and h1 tags', () => {
		const wrapper = mount(<Header />);

		expect(wrapper.exists('img')).toBe(true);
		expect(wrapper.exists('h1')).toBe(true);
	});
});

describe('context test', () => {
	it('mounts the default context value and not create logoutSection', () => {
		const wrapper = mount(
			<AppContext.Provider value={{ user: defaultUser, logout: defaultLogout }}>
				<Header />
			</AppContext.Provider>
		);

		expect(wrapper.find('img')).toHaveLength(1);
		expect(wrapper.find('h1')).toHaveLength(1);
		expect(wrapper.find('#logoutSection').exists()).toBe(false);
	});

	it('should mount with defined user and create logoutSection', () => {
		const dummy = {
			email: 'tobi@gmail.com',
			password: 'code247',
			isLoggedIn: true,
		};
		
		const wrapper = mount(
			<AppContext.Provider value={{ user: dummy, logout: defaultLogout }}>
				<Header />
			</AppContext.Provider>
		);

		expect(wrapper.find('img')).toHaveLength(1);
		expect(wrapper.find('h1')).toHaveLength(1);
		expect(wrapper.find('#logoutSection').exists()).toBe(true);
	});

	it('should mount with verified user and call logOut when link is clicked', () => {
		const testData = {
			user: {
				email: 'tobi@gmail.com',
				password: 'code247',
				isLoggedIn: true,
			},
			logOut: () => {},
		};
		const spy = jest.spyOn(testData, 'logOut');
		const wrapper = mount(
			<AppContext.Provider value={testData}>
				<Header />
			</AppContext.Provider>
		);
		wrapper.find('#logoutSection a').simulate('click');
		expect(spy).toHaveBeenCalled();
		spy.mockRestore();
	});
});