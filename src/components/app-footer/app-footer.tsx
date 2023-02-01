import './app-footer.scss';

import { ReactComponent as LogoIcon } from '@/assets/fromzero.svg';

export const AppFooter = () => (
    <footer id='footer' className='footer'>
        <div className='container'>
            <div className='copyright'>
                &copy; Copyright
                <LogoIcon />
            </div>
            <div className='credits'>
                Made by{' '}
                <a href='mailto:vit.shvaichuk@gmail.com' target='_blank' rel='noreferrer'>
                    @fstk1337
                </a>
            </div>
        </div>
    </footer>
);
