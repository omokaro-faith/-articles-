import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'regenerator-runtime/runtime';
import ArticlesUi from './components/ArticlesUi';
import configureStore from './store/configureStore';
import 'antd/es/button/style/css';
import 'antd/es/form/style/css';
import 'antd/es/input/style/css';
import 'antd/es/tooltip/style/css';
import 'antd/es/dropdown/style/css';

import './styles/index.css';

const store = configureStore();

const Wrapper = () => {
	return (
		<Provider store={store}>
			<ArticlesUi />
		</Provider>
	);
};

ReactDOM.render(<Wrapper />, document.getElementById('articles'));
