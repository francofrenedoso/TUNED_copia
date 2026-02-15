import React from 'react';
import { Navigate, RouteProps } from 'react-router-dom';

import { tunedDashboardPage } from '../config/pages.config';
import TunedDashboard from '../tuned/page/tunedDashboard.page';

const tunedDashboardRoutes: RouteProps[] = [
	{ path: '/', element: <Navigate to={tunedDashboardPage.dashboardPage.to} replace /> },
	{ path: tunedDashboardPage.dashboardPage.to, element: <TunedDashboard /> },
];

export default tunedDashboardRoutes;
