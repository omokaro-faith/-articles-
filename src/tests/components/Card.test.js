import React from 'react';
import { shallow } from 'enzyme';
import Card from '../../components/Card';

jest.mock('../../utils', () => ({
	formatDecimalToPercent: jest.fn(),
	formatTimeStamp: jest.fn(),
	extractString: (value) => value,
	filterNullSrc: (value) => value,
	displayImg: jest.fn(),
}));

jest.mock('../../components/Placeholders.js', () => ({
	ThumbnailPlaceholder: 'ThumbnailPlaceholderMock',
	ImagePlaceholder: 'ImagePlaceholderMock',
}));

describe('Card', () => {
	const props = {
		content: {
			document_id: 13750099,
			similarity: 0.8528870344,
			title: 'The IMF is right: hard Brexit is an international threat',
			url: 'https://www.theguardian.com/business/2018/jul/22/hardcore-brexiters-real-threat-imf-warnings',
			published: '2018-07-22T06:00:08.000Z',
			author: null,
			image:
				'https://i.guim.co.uk/img/media/cfdd2f77083e70fdceb9d8607996a78224c86b81/0_230_4661_2796/master/4661.jpg?w=1200&h=630&q=55&auto=format&usm=12&fit=crop&crop=faces%2Centropy&bm=normal&ba=bottom%2Cleft&blend64=aHR0cHM6Ly9hc3NldHMuZ3VpbS5jby51ay9pbWFnZXMvb3ZlcmxheXMvNGU4MTRmMTFiNGM4MGNjMzJkZjVlODZlZDY4ZmJiMWMvdG8tb3BpbmlvbnMucG5n&s=cebd6922664b26fcd1fa4b96b4960fb7',
			thumbnail: 'https://images.getnewsbot.com/13750099.jpg',
			summary:
				'Crashing out of the EU is an extremists’ gamble – not just for the UK but also for Britain’s close neighbours',
			source_name: 'The Guardian',
			source_slug: 'the-guardian',
		},
	};
	let wrapper;

	beforeEach(() => {
		wrapper = shallow(<Card {...props} />);
	});

	it('renders correctly', () => {
		const imagePlaceholder = wrapper.find('ImagePlaceholderMock');

		expect(imagePlaceholder.exists()).toEqual(true);
	});

	it('renders the card contents', () => {
		const image = wrapper.find('img').at(0);
		const h3Text = wrapper.find('h3').at(0);
		const thumbnail = wrapper.find('img').at(1);

		expect(image.props().src).toEqual(
			'https://i.guim.co.uk/img/media/cfdd2f77083e70fdceb9d8607996a78224c86b81/0_230_4661_2796/master/4661.jpg?w=1200&h=630&q=55&auto=format&usm=12&fit=crop&crop=faces%2Centropy&bm=normal&ba=bottom%2Cleft&blend64=aHR0cHM6Ly9hc3NldHMuZ3VpbS5jby51ay9pbWFnZXMvb3ZlcmxheXMvNGU4MTRmMTFiNGM4MGNjMzJkZjVlODZlZDY4ZmJiMWMvdG8tb3BpbmlvbnMucG5n&s=cebd6922664b26fcd1fa4b96b4960fb7'
		);
		expect(thumbnail.props().src).toEqual('https://images.getnewsbot.com/13750099.jpg');
		expect(h3Text.props().children).toEqual('The IMF is right: hard Brexit is an international threat');
	});
});
