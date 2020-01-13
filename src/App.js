import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom'
import store from './redux/store'
import { Provider } from 'react-redux'
import './App.scss'
import Startup from './components/Startup'
import Main from './components/Main'
import Header from './components/Header'
import Router from './Router'
import Footer from './components/Footer'


class App extends Component {

	render() {
		return (
			<Provider store={store}>
				<BrowserRouter>
					<Startup />
					<div id="top"></div>
					<Header />
					<Main>
						<main id="main" className="viewable">
							<Router />
						</main>
						<Footer />
					</Main>
				</BrowserRouter>
			</Provider>
		)
	}
}

export default App