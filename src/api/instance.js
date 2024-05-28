import axios from 'axios';

export const instance = axios.create({
  baseURL: 'http://localhost:8080',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

instance.interceptors.response.use(
  (response) => response,
  (error) => {
    const { status } = error.response;
    const { message } = error.response.data;
    const tokenExpiredMsg = '"exp" claim timestamp check failed';

    if (status === 401 && message === tokenExpiredMsg) {
      localStorage.removeItem('auth');
      window.location.reload();
    }

    return Promise.reject(error);
  }
);
