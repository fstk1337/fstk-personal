import { ChangeEvent, FC, useState } from 'react';

import { BlogHeaderProps } from './blog-header-props';

import api from '@/api';
import './blog-header.scss';

export const BlogHeader: FC<BlogHeaderProps> = ({ user, logged, setLogged }) => {
    const [showLoginForm, setShowLoginForm] = useState(false);
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const login = async () => {
        const response = await api.auth.login({
            email,
            password
        });
        if (response.status === 200) {
            setLogged(true);
            localStorage.setItem('token', response.data.token);
        }
    };

    const logout = () => {
        localStorage.removeItem('token');
        setLogged(false);
    };

    return (
        <header className='blog-header'>
            <div className='blog-logo'>
                <h2>Cozy Blog</h2>
            </div>
            {logged && user && (
                <div className='user-info'>
                    <span className='first-name'>{user.first_name}</span>
                    <span className='last-name'>{user.last_name}</span>
                    <button type='button' className='logout-btn' onClick={() => logout()}>
                        Logout
                    </button>
                </div>
            )}
            {!logged && showLoginForm && (
                <form>
                    <input
                        type='email'
                        id='email'
                        name='email'
                        placeholder='Email'
                        onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                        className='input email-input'
                    />
                    <input
                        type='password'
                        id='password'
                        name='password'
                        placeholder='Password'
                        onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                        className='input password-input'
                    />
                    <button type='button' className='login-btn' onClick={() => login()}>
                        Login
                    </button>
                    <button
                        type='button'
                        className='cancel-btn'
                        onClick={() => setShowLoginForm(false)}
                    >
                        Cancel
                    </button>
                </form>
            )}
            {!logged && !showLoginForm && (
                <button className='signin-btn' onClick={() => setShowLoginForm(true)}>
                    Sign In
                </button>
            )}
        </header>
    );
};
