import React from 'react';
import { shallow } from 'enzyme';
import Search from '../../components/Search';
import Form from 'antd/lib/form';
import Button from 'antd/lib/button';

describe('Search', () => {
	const props = {
		onFinish: () => {},
		loading: false,
	};

	let wrapper;

	beforeEach(() => {
		wrapper = shallow(<Search {...props} />);
	});

	it('renders correctly', () => {
		const form = wrapper.find(Form);
		const button = wrapper.find(Button);

		expect(form.exists()).toEqual(true);
		expect(button.exists()).toEqual(true);
		expect(button.props().children).toEqual('Click to view articles');
	});
});
