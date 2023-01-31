import { Outlet } from 'react-router-dom';

import AppFooter from '../app-footer';
import AppHeader from '../app-header';
import AppHero from '../app-hero';
import MobileNav from '../mobile-nav';

import './app-layout.scss';

export const AppLayout = () => (
    <>
        <MobileNav />
        <AppHeader />
        <AppHero />
        <Outlet />
        <AppFooter />
    </>
);
