import { ChangeEvent, useEffect, useState } from 'react';

import api from '@/api';
import { User } from '@/models/User';
import { Post } from '@/models/Post';

const BlogPage = () => {
    const [loggedIn, setLoggedIn] = useState(false);
    const [users, setUsers] = useState<User[] | null>(null);
    const [posts, setPosts] = useState<Post[] | null>(null);
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const fetchUsers = async () => {
        const response = await api.users.getAllUsers();
        setUsers(response.data);
    };

    const fetchPosts = async () => {
        const response = await api.posts.getAllPosts();
        setPosts(response.data);
    };

    const login = async () => {
        const response = await api.auth.login({
            email, password 
        });
        if (response.status === 200) {
            setLoggedIn(true);
            localStorage.setItem('token', response.data.token);
        }
    };

    const logout = () => {
        localStorage.removeItem('token');
        setLoggedIn(false);
    };

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setLoggedIn(true);
        }
    }, []);
   
    useEffect(() => {
        if (loggedIn) {
            fetchUsers();
            fetchPosts();
        }
    }, [loggedIn]);

    return (
        <div>
            <h2>Blog Page</h2>
            <form>
                {!loggedIn && <>
                    <label>
                        <input type='email' id='email' name='email' placeholder='Email' onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} />
                    </label>
                    <label>
                        <input type='password' id='password' name='password' placeholder='Password' onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)} />
                    </label>
                    <button type='button' onClick={() => login()}>Login</button>
                </>}
                {loggedIn && 
                    <button type='button' onClick={() => logout()}>Logout</button>
                }
            </form>
            {loggedIn && <div>
                <ul>
                    {users && users.map(user => 
                        <li key={user.id}>
                            <span>ID: {user.id}; </span>
                            <span>User: {`${user.first_name} ${user.last_name}`}</span>
                            <ul>
                                {posts && posts.filter(post => post.user.email == user.email).map(post => 
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
            </div>}
        </div>
    );
};

export default BlogPage;
