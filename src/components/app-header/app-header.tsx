import { Link } from 'react-router-dom';
import './app-header.scss';

export const AppHeader = () => (
    <header id='header' className='header'>
        <div className='d-flex flex-column'>
            <div className='profile'>
                <img
                    src='src/assets/img/profile-img.png'
                    alt=''
                    className='img-fluid rounded-circle'
                />
                <h1 className='text-light'>
                    <Link to='/'>Vitali Shvaichuk</Link>
                </h1>
                <div className='social-links mt-3 text-center'>
                    <a
                        href='https://twitter.com/fstk1337'
                        target='_blank'
                        className='twitter'
                        rel='noreferrer'
                    >
                        <i className='bx bxl-twitter'></i>
                    </a>
                    <a
                        href='https://www.facebook.com/fstk1337'
                        target='_blank'
                        className='facebook'
                        rel='noreferrer'
                    >
                        <i className='bx bxl-facebook'></i>
                    </a>
                    <a
                        href='https://www.instagram.com/fstk1337'
                        target='_blank'
                        className='instagram'
                        rel='noreferrer'
                    >
                        <i className='bx bxl-instagram'></i>
                    </a>
                    <a
                        href='skype:vit_shvaichuk?chat'
                        target='_blank'
                        className='skype'
                        rel='noreferrer'
                    >
                        <i className='bx bxl-skype'></i>
                    </a>
                    <a
                        href='https://www.linkedin.com/in/fstk1337'
                        target='_blank'
                        className='linkedin'
                        rel='noreferrer'
                    >
                        <i className='bx bxl-linkedin'></i>
                    </a>
                </div>
            </div>

            <nav id='navbar' className='nav-menu navbar'>
                <ul>
                    <li>
                        <Link to='/' className='nav-link scrollto active'>
                            <i className='bx bx-home'></i> <span>Home</span>
                        </Link>
                    </li>
                    <li>
                        <a href='#' className='nav-link scrollto disabled'>
                            <i className='bx bx-user'></i> <span>About</span>
                        </a>
                    </li>
                    <li>
                        <a href='#' className='nav-link scrollto disabled'>
                            <i className='bx bx-file-blank'></i> <span>Resume</span>
                        </a>
                    </li>
                    <li>
                        <a href='#' className='nav-link scrollto disabled'>
                            <i className='bx bx-book-content'></i> <span>Portfolio</span>
                        </a>
                    </li>
                    <li>
                        <a href='#' className='nav-link scrollto disabled'>
                            <i className='bx bx-server'></i> <span>Services</span>
                        </a>
                    </li>
                    <li>
                        <a href='#' className='nav-link scrollto disabled'>
                            <i className='bx bx-envelope'></i> <span>Contact</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
);
