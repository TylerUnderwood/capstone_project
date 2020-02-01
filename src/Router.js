import React from 'react'
import { Switch, Route, Redirect } from 'react-router'
import cookie from 'cookie'
import Home from './components/page/Home'
import Login from './components/page/Login'
import Handbook from './components/page/Handbook'
import Dungeon from './components/page/Dungeon'
import Dev from './components/dev/Dev'
import Typography from './components/dev/Typography'
import Inputs from './components/dev/Inputs'
import Sandbox from './components/dev/Sandbox'
import Characters from './components/archive/Characters'
import Character from './components/entry/Character'
import CharacterCreator from './components/creator/CharacterCreator'
import Error404 from './components/errors/404'


const checkAuth = () => {
	const cookies = cookie.parse(document.cookie)
	return cookies["NULYPH_USER"] ? true : false
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
			<Route path="/handbook" component={Handbook} />
			<Route path="/dungeon" component={Dungeon} />
			<ProtectedRoute exact path="/dev" component={Dev} />
			<ProtectedRoute path="/dev/typography" component={Typography} />
			<ProtectedRoute path="/dev/inputs" component={Inputs} />
			<ProtectedRoute path="/dev/sandbox" component={Sandbox} />
			<ProtectedRoute exact path="/characters" component={Characters} />
			<ProtectedRoute path="/characters/character" component={Character} />
			<ProtectedRoute path="/character-creator" component={CharacterCreator} />
			<Route component={Error404} />
        </Switch>
    );
};

export default Router;