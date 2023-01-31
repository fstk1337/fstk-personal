import './app-footer.scss';

export const AppFooter = () => (
    <footer id='footer' className='footer'>
        <div className='container'>
            <div className='copyright'>
                &copy; Copyright{' '}
                <strong>
                    <span>F57K</span>
                </strong>
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
