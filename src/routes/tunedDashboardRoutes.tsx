import React from 'react';
import { RouteProps } from 'react-router-dom';

import { tunedDashboardPage } from '../config/pages.config';
import TunedDashboard from '../tuned/page/tunedDashboard.page';

const tunedDashboardRoutes: RouteProps[] = [
	{ path: tunedDashboardPage.dashboardPage.to, element: <TunedDashboard /> },
];

export default tunedDashboardRoutes;
