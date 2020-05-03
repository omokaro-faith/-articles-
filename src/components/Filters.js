import React from 'react';
import Tooltip from 'antd/lib/tooltip';
import Dropdown from 'antd/lib/dropdown';
import { DownOutlined } from '@ant-design/icons';

const Filters = () => {
	return (
		<>
			<h2 className="section_title">Similar articles</h2>
			<div className="filter_container">
				<h2>Filters:</h2>
				<div className="dropdown_container dropdown_container_one">
					<i className="fa fa-newspaper-o"></i>
					<Dropdown overlay={<div />}>
						<a className="ant-dropdown-link" onClick={(e) => e.preventDefault()} id="my_sources">
							MY SOURCES <DownOutlined />
						</a>
					</Dropdown>
				</div>
				<div className="filter_divider" />
				<div className="dropdown_container dropdown_container_three">
					<i className="fa fa-clock-o"></i>
					<Dropdown overlay={<div />}>
						<a className="ant-dropdown-link" onClick={(e) => e.preventDefault()} id="past_month">
							PAST MONTH <DownOutlined />
						</a>
					</Dropdown>
				</div>
				<div className="dropdown_container circle_icon_container dropdown_container_four">
					<Tooltip title="Useful information">
						<i className="fa fa-question-circle"></i>
					</Tooltip>
				</div>
			</div>
		</>
	);
};

export default Filters;
