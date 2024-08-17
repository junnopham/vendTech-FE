import React, {
	createContext,
	useContext,
	useState,
	ReactNode,
	useEffect,
} from 'react';
import axios from 'axios';
import { setAuthorizationHeader } from '../config/axios';

interface AuthContextType {
	isAuthenticated: boolean;
	user: any;
	accessToken: string | null;
	signIn: (user: any, token: string) => void;
	signOut: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
	children,
}) => {
	const [accessToken, setAccessToken] = useState<string | null>(
		localStorage.getItem('authToken')
	);
	const [user, setUser] = useState<any>(null);
	const isAuthenticated = !!accessToken;

	useEffect(() => {
		const savedToken = localStorage.getItem('authToken');
		if (savedToken) {
			setAuthorizationHeader(savedToken);
			setAccessToken(savedToken);
		}
	}, []);

	const signIn = (user: any, token: string) => {
		setAuthorizationHeader(token);
		setAccessToken(token);
		setUser(user);
		localStorage.setItem('authToken', token);
	};

	const signOut = () => {
		setAccessToken(null);
		localStorage.removeItem('authToken');
	};

	return (
		<AuthContext.Provider
			value={{ isAuthenticated, user, accessToken, signIn, signOut }}
		>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuth = () => {
	const context = useContext(AuthContext);
	if (context === undefined) {
		throw new Error('useAuth must be used within an AuthProvider');
	}
	return context;
};
