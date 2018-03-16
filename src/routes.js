import React from 'react';
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';
import Layout from './layout';
// import Main from 'Pages/main';
// import Ifr from 'Pages/ifr';

import Loading from 'Components/Loading';

const Main = Loadable({
	loader: () => import('Pages/main'),
	loading: Loading
});
const Ifr = Loadable({
	loader: () => import('Pages/ifr'),
	loading: Loading
});
const routes = [
	{
		path: '/',
		exact: true,
		component: Main
	},
	{
		path: '/ifr',
		component: Ifr
	}
];
const RouteWithSubRoutes = (route) => (
	<Route
		path={route.path}
		render={(props) => (
			// pass the sub-routes down to keep nesting
			<route.component {...props} />
		)}
	/>
);
const RouteConfig = () => (
	<Router>
		<Layout>
			<Switch>{routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}</Switch>
		</Layout>
	</Router>
);
export default RouteConfig;
