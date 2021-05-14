import axios from 'axios';

const API_URL = 'http://localhost:8080';

// function to fetch data
const fetchData = (qParams = {}) => {
  const { limit, page, q, endpoint = '/products' } = qParams;
  // const endpoint = qParams.recommended ? '/recommendeds' : '/products';
  return axios
    .get(API_URL + endpoint, {
      params: {
        _limit: limit,
        _page: page,
        q,
      },
    })
    .then(res => res.data);
};

export default fetchData;
