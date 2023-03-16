import { lazy } from 'react';

// Bounding Import
import Layout from 'layouts';
import Loadable from 'components/Loadable';

const WorkStation = Loadable(lazy(() => import('pages/WorkStation')));

const MainRoutes = {
    path: '/',
    element: <Layout />,
    children: [
        {
            path: '/workstation',
            element: <WorkStation />
        }
    ]
};

export default MainRoutes;
