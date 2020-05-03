import React, { useEffect, useState, Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Alert } from 'antd';
import PropTypes from 'prop-types';
import actions from '../actions/index';
import Search from './Search';
import Card from './Card';
import Filters from './Filters';
import Header from './Header';
import Message from './Message';

const ArticlesUi = () => {
	const articles = useSelector((state) => state.articlesData.data);
	const loading = useSelector((state) => state.articlesData.isPending);
	const error = useSelector((state) => state.articlesData.error);
	const dispatch = useDispatch();

	const onFinish = ({ articleUrl }) => {
		dispatch(actions.getNews(articleUrl));
	};

	return (
		<div className="wrapper">
			<Header />
			<Search onFinish={onFinish} loading={loading} />
			<div className="content_container">
				<Filters />
				<div className="content_container__item">
					{articles &&
						articles.map((item) => {
							return (
								<Fragment key={item.document_id}>
									<Card content={item} />
								</Fragment>
							);
						})}
				</div>
				{articles && articles.length === 0 && <Message message={error || 'Name or service not known.'} />}
			</div>
		</div>
	);
};

export default ArticlesUi;
