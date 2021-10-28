import axios from "axios";

const get = (url, config = {}) => {
  return axios.get(`${process.env.REACT_APP_API_URL}${url}`, config);
};

const post = (url, data, config = {}) => {
  return axios.post(`${process.env.REACT_APP_API_URL}${url}`, data, config);
};

export default {
  get,
  post,
};
