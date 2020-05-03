import React from 'react';
import { shallow } from 'enzyme';
import Message from '../../components/Message';

describe('Message', () => {
	let wrapper;

	beforeEach(() => {
		wrapper = shallow(<Message message="dummy message" />);
	});

	it('renders correctly', () => {
		const text = wrapper.find('h1').at(0);
		const paragraphText = wrapper.find('p').at(0);

		expect(text.props().children).toEqual('dummy message');
	});
});
