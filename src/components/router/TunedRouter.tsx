import React from 'react';
import { Route, Routes } from 'react-router-dom';
import tunedDashboardRoutes from '../../routes/tunedDashboardRoutes';

const TunedDashboardRoutes = () => {
	return (
		<Routes>
			{tunedDashboardRoutes.map((routeProps) => (
				<Route key={routeProps.path} {...routeProps} />
			))}
		</Routes>
	);
};

export default TunedDashboardRoutes;
