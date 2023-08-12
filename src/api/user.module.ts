import { AxiosInstance } from 'axios';

const URL = '/users';

const userModule = (user: AxiosInstance) => ({
    getAllUsers() {
        return user.get(URL);
    },
    getOneUser(id: string) {
        return user.get(`${URL}/${id}`);
    },
    createUser(payload: {
        nickname: string;
        password: string;
        firstName: string;
        lastName: string;
    }) {
        return user.post(URL, payload);
    },
    updateUser(payload: {
        id: number;
        nickname: string;
        password: string;
        firstName: string;
        lastName: string;
    }) {
        return user.put(URL, payload);
    },
    deleteUser(id: string) {
        return user.delete(`${URL}/${id}`);
    }
});

export default userModule;
