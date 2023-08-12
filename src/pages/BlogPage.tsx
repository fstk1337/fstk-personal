import React, { useEffect, useState } from 'react';

import BlogHeader from '@/components/blog-header';
import BlogFooter from '@/components/blog-footer';
import BlogContent from '@/components/blog-content';

import api from '@/api';
import { User } from '@/models/User';
import { Post } from '@/models/Post';

const BlogPage = () => {
    const [loggedIn, setLoggedIn] = useState(false);
    const [user, setUser] = useState<User | null>(null);
    const [posts, setPosts] = useState<Post[] | null>(null);

    const fetchUsers = async () => {
        const response = await api.users.getAllUsers();
        setUser(response.data[0]);
    };

    const fetchPosts = async () => {
        const response = await api.posts.getAllPosts();
        setPosts(response.data);
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
        <React.Fragment>
            <BlogHeader user={user} logged={loggedIn} setLogged={setLoggedIn} />
            <BlogContent showPosts={loggedIn} user={user} posts={posts} />
            <BlogFooter />
        </React.Fragment>
    );
};

export default BlogPage;
