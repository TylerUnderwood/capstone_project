import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Header extends Component {

	logout = () => {
		let confirmation = window.confirm( 'Are you sure you want to logout?' )

		if ( confirmation ) {
			this.props.logout()
			document.cookie = 'loggedIn=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
		}
	}

	render() {
		return (
			<header id="header" className="bg-dark p-2">
				<div className="wrapper flex items-center">

					<nav className="static-nav flex justy-start">

						<Link className="static-nav__item p-1" to="/">Home</Link>

						<Link className="static-nav__item p-1" to="/about">About</Link>

					</nav>

					<div className="filler"></div>

					<h5 id="logo" className="nav-logo">
						<Link to="/">Nulyph</Link>
					</h5>

					<div className="filler"></div>

					<nav className="static-nav flex justy-end">

						{ this.props.currentUser.loggedIn && (
							<Link className="static-nav__item p-1" to="/dev">Dev</Link>
						)}

						{ this.props.currentUser.loggedIn ? (
							<Link className="static-nav__item p-1" to="/login" onClick={() => this.logout()}>LOGOUT</Link>
						):(
							<Link className="static-nav__item p-1" to="/login">LOGIN</Link>
						)}

					</nav>
				</div>

				{ this.props.currentUser.loggedIn && (
					<div className="user wrapper pv-1 flex justy-end put-bottom text-color">
						<details>
							<summary>User</summary>
							<span>{this.props.currentUser.username}</span>
						</details>
					</div>
				)}
			</header>
		)
	}
}

export default Header