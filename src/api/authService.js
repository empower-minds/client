import { instance } from './instance';

export const authService = {
  postAuthLogin(data) {
    return instance.post('/api/auth/signin', data).then((res) => res.data);
  },
};
