import Reducer from '../../reducers';
import mock from '../fixtures/mock';
import actionTypes from '../../actions/actionTypes';
import constants from '../../constants';
const initialState = {
	articlesData: {
		isPending: false,
		isFulfilled: false,
		isRejected: false,
		data: null,
		error: null,
	},
};

describe('Reducer', () => {
	it('should set up default values', () => {
		const state = Reducer(undefined, { type: '@@INIT' });
		expect(state).toEqual(initialState);
	});

	it('should set articles', () => {
		const articles = mock.articles;

		const action = {
			type: actionTypes.NEWS_REQUEST_SUCCESS,
			data: articles,
		};

		const state = Reducer(initialState, action);

		expect(state).toEqual({
			...initialState,
			articlesData: {
				...initialState.articlesData,
				isFulfilled: true,
				data: articles,
			},
		});
	});

	it('should set isPending to true when request is made', () => {
		const action = {
			type: actionTypes.NEWS_REQUEST,
		};

		const state = Reducer(initialState, action);

		expect(state).toEqual({
			...initialState,
			articlesData: {
				...initialState.articlesData,
				isPending: true,
			},
		});
	});

	it('should set isRejected to false when an error occurs', () => {
		const action = {
			type: actionTypes.NEWS_REQUEST_SUCCESS_FAILED,
			error: constants.ERROR,
		};

		const state = Reducer(initialState, action);

		expect(state).toEqual({
			...initialState,
			articlesData: {
				...initialState.articlesData,
				isRejected: true,
				error: { message: 'Error occured while fetching request' },
			},
		});
	});
});
