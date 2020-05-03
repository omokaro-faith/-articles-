import 'regenerator-runtime/runtime';
import services from '../services';
import actionTypes from './actionTypes';
import constants from '../constants';

const newsRquest = () => ({
	type: actionTypes.NEWS_REQUEST,
});

const newsRquestSuccess = (data = []) => ({
	type: actionTypes.NEWS_REQUEST_SUCCESS,
	data,
});

const newsRquestError = () => ({
	type: actionTypes.NEWS_REQUEST_SUCCESS_FAILED,
	error: constants.ERROR,
});

const getNews = (url) => async (dispatch) => {
	try {
		dispatch(newsRquest());

		const extractedResult = await services.requestArticleExtractor(url);

		if (extractedResult) {
			const data = await services.requestNewsRecommender({
				text: extractedResult.body,
				fields: 'meta',
			});

			return dispatch(newsRquestSuccess(data));
		}

		return dispatch(newsRquestSuccess());
	} catch (err) {
		return dispatch(newsRquestError());
	}
};

export default {
	newsRquest,
	newsRquestSuccess,
	newsRquestError,
	getNews,
};
