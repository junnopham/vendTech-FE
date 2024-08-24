// src/components/withAuth.tsx

import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../../context/AuthContext';

const withAuth = <P extends object>(
	WrappedComponent: React.ComponentType<P>
) => {
	const WithAuthComponent: React.FC<P> = (props) => {
		const location = useLocation();
		const { isAuthenticated } = useAuth();

		if (!isAuthenticated) {
			return <Navigate to="/sign-in" state={{ from: location }} />;
		}

		return <WrappedComponent {...props} />;
	};

	return WithAuthComponent;
};

export default withAuth;
