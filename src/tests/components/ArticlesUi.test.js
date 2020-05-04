import React from 'react';
import { shallow } from 'enzyme';
import ArticlesUi from '../../components/ArticlesUi';
import mock from '../fixtures/mock';

jest.mock('react-redux', () => {
	const ActualReactRedux = require.requireActual('react-redux');
	return {
		...ActualReactRedux,
		useSelector: jest.fn().mockImplementation(() => {
			return mock.article;
		}),
		useDispatch: jest.fn().mockImplementation(() => {
			return jest.fn();
		}),
	};
});

jest.mock('../../components/Search', () => 'SearchMock');
jest.mock('../../components/Card', () => 'CardMock');
jest.mock('../../components/Filters', () => 'FiltersMock');
jest.mock('../../components/Search', () => 'SearchMock');
jest.mock('../../components/Header', () => 'HeaderMock');
jest.mock('../../components/Message', () => 'MessageMock');

describe('ArticlesUi', () => {
	let wrapper;

	beforeEach(() => {
		wrapper = shallow(<ArticlesUi />);
	});

	it('renders the components correctly', () => {
		const SearchMock = wrapper.find('SearchMock');
		const CardMock = wrapper.find('CardMock');
		const FiltersMock = wrapper.find('FiltersMock');
		const HeaderMock = wrapper.find('SearchMock');

		expect(SearchMock.exists()).toEqual(true);
		expect(CardMock.exists()).toEqual(true);
		expect(FiltersMock.exists()).toEqual(true);
		expect(HeaderMock.exists()).toEqual(true);
	});
});
