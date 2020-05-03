import actionTypes from '../actions/actionTypes';

const initialState = {
	articlesData: {
		isPending: false,
		isFulfilled: false,
		isRejected: false,
		data: null,
		error: null,
	},
};

export default (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.NEWS_REQUEST:
			return {
				...state,
				articlesData: {
					...initialState.articlesData,
					isPending: true,
				},
			};
		case actionTypes.NEWS_REQUEST_SUCCESS:
			return {
				...state,
				articlesData: {
					...initialState.articlesData,
					isFulfilled: true,
					data: action.data,
				},
			};
		case actionTypes.NEWS_REQUEST_SUCCESS_FAILED:
			return {
				...state,
				articlesData: {
					...initialState.articlesData,
					isRejected: true,
					error: action.error,
				},
			};
		default:
			return state;
	}
};
