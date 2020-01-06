import React, { Component } from 'react'
import { connect } from 'react-redux'
import { logout } from '../redux/actions'
import { Link } from 'react-router-dom'

class Header extends Component {

	logout = () => {
		let confirmation = window.confirm( 'Are you sure you want to logout?' )

		if ( confirmation ) {
			this.props.logout()
			document.cookie = 'NULYPH_USER=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
		}
	}

	render() {
		return (
			<header id="header" className="bg-dark p-2 flex items-center">

				<label className="menu-btn" for="menu-btn">
					<button id="menu-btn" class="nav-btn">
						<div class="nav-btn__bar"></div>
						<div class="nav-btn__bar"></div>
						<div class="nav-btn__bar"></div>
					</button>
					<span className="menu-btn__text">Menu</span>
				</label>

				<nav className="drawer-nav drawer-nav--left drawer-nav--active">

					<Link className="static-nav__item p-1" to="/">Home</Link>

					<Link className="static-nav__item p-1" to="/about">About</Link>

				</nav>

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
							<div className="static-nav__item p-1">
								<details className="relative">
									<summary>{this.props.currentUser.username}</summary>
									<Link 
										className="put-bottom" 
										to="/login" onClick={() => this.logout()}>
										LOGOUT
									</Link>
								</details>
							</div>
						):(
							<Link className="static-nav__item p-1" to="/login">LOGIN</Link>
						)}

					</nav>

				</div>

				<nav className="drawer-nav drawer-nav--right drawer-nav--active">

					{ this.props.currentUser.loggedIn && (
						<Link className="static-nav__item p-1" to="/dev">Dev</Link>
					)}

					{ this.props.currentUser.loggedIn ? (
						<div className="static-nav__item p-1">
							<details className="relative">
								<summary>{this.props.currentUser.username}</summary>
								<Link 
									className="put-bottom" 
									to="/login" onClick={() => this.logout()}>
									LOGOUT
								</Link>
							</details>
						</div>
					):(
						<Link className="static-nav__item p-1" to="/login">LOGIN</Link>
					)}

				</nav>

				<label className="user-btn" for="user-btn">
					<span className="user-btn__text">User</span>
					<button id="user-btn" class="nav-btn">
						<div class="nav-btn__bar"></div>
						<div class="nav-btn__bar"></div>
						<div class="nav-btn__bar"></div>
					</button>
				</label>

			</header>
		)
	}
}

const mapStateToProps = ( state ) => {
    return {
        currentUser: state.currentUser,
    }
}

const mapDispatchToProps = ( dispatch ) => {
    return {
		logout: () => dispatch( logout() )
    }
}

export default connect( mapStateToProps, mapDispatchToProps )(Header)