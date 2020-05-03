import React from 'react';
import { shallow } from 'enzyme';
import Header from '../../components/Header';

jest.mock('../../img/logo_icon.svg', () => 'iconMock');
jest.mock('../../img/logo_text.svg', () => 'textMock');

describe('Header', () => {
	let wrapper;

	beforeEach(() => {
		wrapper = shallow(<Header />);
	});

	it('renders correctly', () => {
		const text = wrapper.find('h1').at(0);
		const paragraphText = wrapper.find('p').at(0);

		expect(text.props().children).toEqual('News Recommender');
		expect(paragraphText.props().children).toEqual('Enter the URL of an article or blog article you wish to view.');
	});
});
