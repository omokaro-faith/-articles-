import axios from 'axios';
import config from './config.js'

const requestArticleExtractor = async (url) => {
  try {
    const parsedElement = await axios.get(`https://document-parser-api.lateral.io/?url=${url}`, config);
    return parsedElement.data;
  } catch (err) {
    return ;
  }
};

const requestNewsRecommender = async (extract) => {
  try {
    const result = await axios.post('https://news-api.lateral.io/documents/similar-to-text', extract, config);
    return result.data;
  } catch (err) {
    return ;
  }
};

export default {
  requestArticleExtractor, requestNewsRecommender
}