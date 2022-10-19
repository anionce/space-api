import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { MainLayout } from './layout';
import { ItemDetails } from './containers/ItemDetails';
import { AddRocket } from './containers/AddRocket/AddRocket';
import './services/i18n';
import './App.scss';
import { NotFound } from './containers/NotFound';
import { Home } from './containers/Home';
import { ListPage } from './containers/ListPage/ListPage';

export const App = () => {
	return (
		<Router>
			<Routes>
				<Route element={<MainLayout />}>
					<Route index element={<Home />} />
					<Route path='capsules' element={<ListPage />} />
					<Route path='capsules/:id' element={<ItemDetails />} />
					<Route path='rockets' element={<ListPage />} />
					<Route path='rockets/:id' element={<ItemDetails />} />
					<Route path='rockets/:id/update' element={<AddRocket />} />
					<Route path='rocket/add' element={<AddRocket />} />
					<Route path='*' element={<NotFound />} />
				</Route>
			</Routes>
		</Router>
	);
};
