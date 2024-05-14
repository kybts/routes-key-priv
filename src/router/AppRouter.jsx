import { Route, Routes } from 'react-router-dom';
import { Navbar } from '../Navbar';
import {
	HomePage,
	DashboardPage,
	LoginPage,
	RegisterPage,
	NosotrosPage,
	AyudaPage,
	BtsPage,
	keylaPage
} from '../pages';
import { PrivateRoute } from './PrivateRoute';

export const AppRouter = () => {
	return (
		<>
			<Routes>
				<Route path='/' element={<Navbar />}>
					<Route index element={<HomePage />} />
					<Route path='login' element={<LoginPage />} />
					<Route path='register' element={<RegisterPage />} />
					<Route path='nosotros' element={<NosotrosPage />} />
					<Route path='ayuda' element={<AyudaPage />} />
					<Route path='bts' element={<BtsPage />} />
					<Route path='keyla' element={<keylaPage />} />
					<Route
						path='dashboard'
						element={
							<PrivateRoute>
								<DashboardPage />
							</PrivateRoute>
						}
					/>
				</Route>
			</Routes>
		</>
	);
};