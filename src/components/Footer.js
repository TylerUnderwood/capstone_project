import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Footer extends Component {

	render() {
		return (
			<footer id="footer" className="bg-dark p-2">
				<div className="wrapper flex items-center">

					<h5 id="logo" className="nav-logo">
						<Link to="/">Nulyph</Link>
					</h5>

					<div className="filler"></div>

					<nav className="static-nav flex justy-end">

						<a className="static-nav__item" href="#top">TOP</a>

					</nav>

				</div>
			</footer>
		)
	}
}

export default Footer