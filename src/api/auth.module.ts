import { AxiosInstance } from 'axios';

const authModule = (auth: AxiosInstance) => ({
    login(payload: { email: string; password: string;}) {
      return auth.post('/login', payload);
    }
});

export default authModule;
