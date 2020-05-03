import utils from '../../utils/index';

describe('formatTimeStamp', () => {
	describe('when value is defined', () => {
		it('returns formatted date object', () => {
			expect(utils.formatTimeStamp('01/20/2000')).toEqual('Jan20,00');
		});
	});

	describe('when value is not defined', () => {
		it('returns null', () => {
			expect(utils.formatTimeStamp()).toEqual(null);
		});
	});
});

describe('formatDecimalToPercent', () => {
	describe('when value is defined', () => {
		it('returns formatted value', () => {
			expect(utils.formatDecimalToPercent('0.2345')).toEqual('23%');
		});
	});

	describe('when value is not defined', () => {
		it('returns null', () => {
			expect(utils.formatDecimalToPercent()).toEqual(null);
		});
	});
});

describe('extractString', () => {
	describe('when value is defined', () => {
		const string = 'this is a very lengthy text this is a very lengthy text this is a very lengthy text';
		const length = 14;

		describe('length of value is less than 14', () => {
			it('returns actual value passed', () => {
				expect(utils.extractString('Harvard', length)).toEqual('Harvard');
			});
		});

		describe('length of value is greater than 14', () => {
			it('returns extracted string value', () => {
				expect(utils.extractString(string, length)).toEqual('this is a very...');
			});
		});

		describe('when window inner width less than or equals 499', () => {
			beforeEach(() => {
				window.innerWidth = 498;
			});
			it('returns actual value passed', () => {
				expect(utils.extractString(string, length)).toEqual(string);
			});
		});
	});

	describe('when value is not defined', () => {
		it('returns null', () => {
			expect(utils.formatDecimalToPercent()).toEqual(null);
		});
	});
});

describe('displayImg', () => {
	describe('when image is defined', () => {
		it('displays image', () => {
			expect(utils.displayImg('dummyimage')).toEqual({});
		});
	});

	describe('when value is not defined', () => {
		it('does not display image', () => {
			expect(utils.displayImg()).toEqual({ display: 'none' });
		});
	});
});

describe('filterNullSrc', () => {
	describe('when imageSrc is defined', () => {
		it('returns imageSrc value', () => {
			expect(utils.filterNullSrc('dummyimage')).toEqual('dummyimage');
		});
	});

	describe('when value is not defined', () => {
		it('returns an empty string', () => {
			expect(utils.filterNullSrc()).toEqual('');
		});
	});
});
