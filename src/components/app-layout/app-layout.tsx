import { Outlet } from 'react-router-dom';

import AppFooter from '../app-footer';
import AppHeader from '../app-header';
import AppHero from '../app-hero';

import './app-layout.scss';

export const AppLayout = () => (
    <>
        <AppHeader />
        <AppHero />
        <Outlet />
        <AppFooter />
    </>
);
