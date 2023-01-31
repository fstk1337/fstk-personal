import { createRoutesFromElements, Route } from 'react-router-dom';

import HomePage from '../pages/HomePage';
import ProjectsPage from '../pages/ProjectsPage';
import BlogPage from '../pages/BlogPage';

const routes = createRoutesFromElements(
    <Route path='/'>
        <Route index element={<HomePage />} />
        <Route path='/blog' element={<BlogPage />} />
        <Route path='/projects' element={<ProjectsPage />} />
    </Route>
);

export default routes;
