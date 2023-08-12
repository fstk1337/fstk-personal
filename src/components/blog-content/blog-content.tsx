import { FC } from 'react';

import { BlogContentProps } from './blog-content-props';
import './blog-content.scss';

export const BlogContent: FC<BlogContentProps> = ({ showPosts, user, posts }) => {
    return (
        <main className='blog-content'>
            {showPosts && (
                <ul className='post-list'>
                    {posts &&
                        user &&
                        posts
                            .filter((post) => post.user.email == user.email)
                            .map((post) => (
                                <li key={post.id} className='post-item'>
                                    <div>{post.title}</div>
                                    <div>{new Date(post.date).toISOString()}</div>
                                    <div>{post.content}</div>
                                </li>
                            ))}
                </ul>
            )}
        </main>
    );
};
