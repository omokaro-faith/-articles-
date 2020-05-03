import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import actions from '../../actions/index';
import mock from '../fixtures/mock';

jest.mock('../../services', () => ({
	requestArticleExtractor: (url) =>
		new Promise((resolve) => {
			if (url) {
				resolve({
					ok: true,
					status: 200,
					headers: {},
					body:
						'In the past five years, Britain has had a startup renaissance. We’re now the world leaders in several key sectors, like fintech and artificial intelligence. We have the most ‘Unicorn’ status companies of anywhere in Europe',
				});
			}

			throw new Error({ ok: false, status: 500 });
		}),
	requestNewsRecommender: (body) =>
		new Promise((resolve) => {
			if (body) {
				resolve({
					ok: true,
					status: 200,
					headers: {},
					data: mock,
				});
			}
			throw new Error({ ok: false, status: 500 });
		}),
}));

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Actions', () => {
	describe('getNews', () => {
		it('dispatches success action', async () => {
			const store = mockStore();
			const actual = actions.getNews('dummy-url');

			await store.dispatch(actual);
			expect(store.getActions()).toEqual([
				{
					type: 'NEWS_REQUEST',
				},
				{
					data: {
						data: {
							article: mock.article,
						},
						headers: {},
						ok: true,
						status: 200,
					},
					type: 'NEWS_REQUEST_SUCCESS',
				},
			]);
		});

		it('dispatches failure action', async () => {
			const store = mockStore();
			const actual = actions.getNews();

			await store.dispatch(actual);
			expect(store.getActions()).toEqual([
				{
					type: 'NEWS_REQUEST',
				},
				{
					error: { message: 'Error occured while fetching request' },
					type: 'NEWS_REQUEST_SUCCESS_FAILED',
				},
			]);
		});
	});
});
