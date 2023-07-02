import { useEffect, useState } from 'react';

import api from '@/api';

interface User {
    id: number;
    nickname: string;
    password: string;
    first_name: string;
    last_name: string;
}

interface Post {
    id: number;
    title: string;
    date: string;
    content: string;
    user_id: number;
}

const BlogPage = () => {
    const [users, setUsers] = useState<User[] | null>(null);
    const [posts, setPosts] = useState<Post[] | null>(null);

    const fetchUsers = async () => {
        const response = await api.users.getAllUsers();
        setUsers(response.data);
    }

    const fetchPosts = async () => {{
        const reponse = await api.posts.getAllPosts();
        setPosts(reponse.data);
    }}

    useEffect(() => {
        fetchUsers();
        fetchPosts();
    }, []);

    return (
        <div>
            <h2>Blog Page</h2>
            <div>
                <ul>
                    {users && users.map(user => 
                    <li key={user.id}>
                        <span>ID: {user.id}; </span>
                        <span>User: {`${user.first_name} ${user.last_name}`}</span>
                        <ul>
                            {posts && posts.filter(post => post.user_id === user.id).map(post => 
                                <li key={post.id}>
                                    <div>{post.title}</div>
                                    <div>{(new Date(post.date)).toISOString()}</div>
                                    <div>{post.content}</div>
                                </li>    
                            )}
                        </ul>
                    </li>
                    )}
                </ul>
            </div>
        </div>
    );
};

export default BlogPage;
