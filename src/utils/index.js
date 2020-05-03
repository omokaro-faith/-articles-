import CONSTANT from '../constants/index';

const formatTimeStamp = (value) => {
	if (!value) return null;
	return new Date(value).toLocaleString('de-DE', CONSTANT.DATE_OPTION).replace(/ +/g, '');
};

const formatDecimalToPercent = (value) => {
	if (!value) return null;
	return `${Math.floor(value * 100)}%`;
};

const extractString = (value, length) => {
	if (!value) return null;
	else if (window.innerWidth <= 499) return value;
	else if (value.length <= length) return value;
	else return value.slice(0, length) + '...';
};

const displayImg = (img) => (img ? {} : { display: 'none' });

const filterNullSrc = (imgSrc) => (imgSrc ? imgSrc : '');

export default { formatTimeStamp, extractString, formatDecimalToPercent, displayImg, filterNullSrc };
