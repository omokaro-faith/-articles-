import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ThumbnailPlaceholder, ImagePlaceholder } from './Placeholders';
import utils from '../utils/index';

const Cards = ({ content }) => {
	const [imgLoad, setImgLoad] = useState(null);
	const [thumnailLoad, setThumnailLoad] = useState(null);

	const onImgLoad = () => setImgLoad(true);

	const onThumbnailLoad = () => setThumnailLoad(true);

	return (
		<a href={content.url} target="_blank">
			<div className="card">
				<div className="card_layout">
					{!imgLoad && <ImagePlaceholder />}
					<div>
						<img
							className="card_image"
							src={utils.filterNullSrc(content.image)}
							onLoad={onImgLoad}
							style={utils.displayImg(imgLoad)}
						/>
					</div>
				</div>

				<div className="card_content">
					<h3 className="card_title">{utils.extractString(content.title, 80)}</h3>
					<div className="card_footer__content">
						<p className="card_footer__content___greentext">
							{utils.formatDecimalToPercent(content.similarity)} similar
						</p>
						<div className="card_footer__divider" />
						<p className="card_footer__content___text content___textrowtwo">
							{utils.formatTimeStamp(content.published)}
						</p>
						<div className="card_footer__divider" />
						<p className="card_footer__content___text content___textrowthree">
							{utils.extractString(content.source_name, 10)}
						</p>
						{!thumnailLoad && <ThumbnailPlaceholder />}
						<img
							src={utils.filterNullSrc(content.thumbnail)}
							className="card_footer__thumbnail"
							onLoad={onThumbnailLoad}
							style={utils.displayImg(thumnailLoad)}
						/>
					</div>
				</div>
			</div>
		</a>
	);
};

Cards.propTypes = {
	content: PropTypes.shape({
		document_id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
		similarity: PropTypes.number,
		title: PropTypes.string,
		published: PropTypes.string,
		author: PropTypes.string,
		summary: PropTypes.string,
		source_name: PropTypes.string,
		source_slug: PropTypes.string,
	}),
};

export default Cards;
