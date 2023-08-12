import { AxiosInstance } from 'axios';

const URL = '/posts';

const postModule = (post: AxiosInstance) => ({
    getAllPosts() {
        return post.get(URL);
    },
    getPostsByUserId(userId: string) {
        return post.get(`${URL}?userId=${userId}`);
    },
    getOnePost(id: string) {
        return post.get(`${URL}/${id}`);
    },
    createPost(payload: { title: string; date: string; content: string; userId: string }) {
        return post.post(URL, payload);
    },
    updatePost(payload: {
        id: number;
        title: string;
        date: string;
        content: string;
        userId: string;
    }) {
        return post.put(URL, payload);
    },
    deletePost(id: string) {
        return post.delete(`${URL}/${id}`);
    }
});

export default postModule;
