import React from 'react'
import { Switch, Route, Redirect } from 'react-router'
import cookie from 'cookie'
import Home from './components/page/Home'
import Login from './containers/Login'
import Dev from './components/dev/Dev'
import Typography from './components/dev/Typography'
import Error404 from './components/errors/404'


const checkAuth = () => {
	const cookies = cookie.parse(document.cookie)
	return cookies["loggedIn"] ? true : false
}


const ProtectedRoute = ({component: Component, ...rest}) => {
	return (
		<Route
		{...rest}
		render={(props) => checkAuth()
			? <Component {...props} />
			: <Redirect to="/login" />}
		/>
	)
}


const Router = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
			<Route path="/login" component={Login} />
			<ProtectedRoute exact path="/dev" component={Dev} />
			<ProtectedRoute path="/dev/typography" component={Typography} />
			<Route component={Error404} />
        </Switch>
    );
};

export default Router;