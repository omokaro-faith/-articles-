import React from 'react';
import { shallow } from 'enzyme';
import { ImagePlaceholder, ThumbnailPlaceholder } from '../../components/Placeholders';

describe('ImagePlaceholder', () => {
	let wrapper;

	beforeEach(() => {
		wrapper = shallow(<ImagePlaceholder />);
	});

	it('renders correctly', () => {
		const text = wrapper.find('h2').at(0);

		expect(text.props().children).toEqual('Placeholder');
	});
});

describe('ThumbnailPlaceholder', () => {
	let wrapper;

	beforeEach(() => {
		wrapper = shallow(<ThumbnailPlaceholder />);
	});

	it('renders correctly', () => {
		const div = wrapper.find('div').at(0);

		expect(div.exists()).toEqual(true);
	});
});
