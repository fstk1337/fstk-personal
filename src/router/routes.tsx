import React from 'react';
import { createRoutesFromElements, Route } from 'react-router-dom';

import HomePage from '@/pages/HomePage';
import ProjectsPage from '@/pages/ProjectsPage';
import BlogPage from '@/pages/BlogPage';
import AppLayout from '@/components/app-layout';

const routes = createRoutesFromElements(
    <React.Fragment>
        <Route path='/' element={<AppLayout />}>
            <Route index element={<HomePage />} />
            <Route path='projects' element={<ProjectsPage />} />
        </Route>
        <Route path='/blog' element={<BlogPage />} />
    </React.Fragment>
);

export default routes;
