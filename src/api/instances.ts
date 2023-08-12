import axios from 'axios';


const authInstance = axios.create({
    baseURL: 'http://localhost:8000/auth',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        "Content-Type": 'application/json'
    }
});

const userInstance = axios.create({
    baseURL: 'http://localhost:8000/api',
    withCredentials: false,
    headers: {
        Accept: 'application/json'
    }
});

userInstance.interceptors.request.use(req => {
    const token = localStorage.getItem('token');
    if (token) {
        req.headers.Authorization = `Bearer ${token}`;
    } else {
        req.headers.Authorization = null;
    }
    return req;
});

const postInstance = axios.create({
    baseURL: 'http://localhost:8000/api',
    withCredentials: false,
    headers: {
        Accept: 'application/json'
    }
});

postInstance.interceptors.request.use(req => {
    const token = localStorage.getItem('token');
    if (token) {
        req.headers.Authorization = `Bearer ${token}`;
    } else {
        req.headers.Authorization = null;
    }
    return req;
});

export default {
    auth: authInstance,
    user: userInstance,
    post: postInstance
};
