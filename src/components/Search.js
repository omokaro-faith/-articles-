import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Form from 'antd/lib/form';
import Button from 'antd/lib/button';
import Input from 'antd/lib/input';

const Search = ({ onFinish, loading }) => {
	return (
		<Form onFinish={onFinish}>
			<Form.Item
				className="form_input__container"
				name="articleUrl"
				rules={[
					{
						required: true,
						message: 'Please enter a URL!',
						type: 'url',
					},
				]}
			>
				<Input placeholder="Enter the URL of an article or blog article" />
			</Form.Item>

			<Form.Item className="form_button__container">
				<Button type="primary" htmlType="submit" id="submit___button" loading={loading}>
					Click to view articles
				</Button>
			</Form.Item>
		</Form>
	);
};

Search.propTypes = {
	onFinish: PropTypes.func.isRequired,
	loading: PropTypes.bool.isRequired,
};

export default Search;
