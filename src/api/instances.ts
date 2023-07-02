import axios from 'axios';

const userInstance = axios.create({
  baseURL: 'http://localhost:8000/api',
  withCredentials: false,
  headers: {
    Accept: 'application/json'
  }
});

const postInstance = axios.create({
  baseURL: 'http://localhost:8000/api',
  withCredentials: false,
  headers: {
    Accept: 'application/json'
  }
});

export default {
  user: userInstance,
  post: postInstance
};
