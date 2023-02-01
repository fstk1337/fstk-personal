import { Outlet } from 'react-router-dom';

import AppFooter from '@/components/app-footer';
import AppHeader from '@/components/app-header';
import AppHero from '@/components/app-hero';
import MobileNav from '@/components/mobile-nav';

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
