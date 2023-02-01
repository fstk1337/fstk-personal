import './mobile-nav.scss';

export const MobileNav = () => {
    function handleClick() {
        const body = document.querySelector('body');
        const toggle = document.querySelector('.mobile-nav-toggle');
        body?.classList.toggle('mobile-nav-active');
        toggle?.classList.toggle('bi-list');
        toggle?.classList.toggle('bi-x');
    }

    return <i className='bi bi-list mobile-nav-toggle d-xl-none' onClick={() => handleClick()}></i>;
};
