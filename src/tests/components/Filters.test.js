import React from 'react';
import { shallow } from 'enzyme';
import Filters from '../../components/Filters';
import Tooltip from 'antd/lib/tooltip';

describe('Filters', () => {
	let wrapper;

	beforeEach(() => {
		wrapper = shallow(<Filters />);
	});

	it('renders correctly', () => {
		const text = wrapper.find('h2').at(0);
		const tooltip = wrapper.find(Tooltip).at(0);

		expect(text.props().children).toEqual('Similar articles');
		expect(tooltip.exists()).toEqual(true);
	});
});
