import React from 'react';
import logo from '../img/logo_icon.svg';
import logoText from '../img/logo_text.svg';

const Header = () => {
	return (
		<>
			<img src={logo} className="header_logo__icon" />
			<img src={logoText} className="header_logo__text" />
			<h1>News Recommender</h1>
			<p>Enter the URL of an article or blog article you wish to view.</p>
		</>
	);
};

export default Header;
