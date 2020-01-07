import React, { Component } from 'react'
import { connect } from 'react-redux'
import { 
	logout,
	activateNavLeft,
	activateNavRight,
	closeNavs,
} from '../redux/actions'
import { Link } from 'react-router-dom'

class Header extends Component {

	logout = () => {
		let confirmation = window.confirm( 'Are you sure you want to logout?' )

		if ( confirmation ) {
			this.props.closeNavs()
			this.props.logout()
			document.cookie = 'NULYPH_USER=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
		}
	}

	render() {

		const loggedIn = this.props.currentUser.loggedIn
		const username = this.props.currentUser.username
		const navLeftActive = this.props.activeElements.navLeft
		const navRightActive = this.props.activeElements.navRight

		return (
			<header id="header" className="bg-dark p-2 flex items-center">

				<label className="menu-btn" htmlFor="menu-btn">
					<button 
						id="menu-btn" 
						className={`nav-btn ${navLeftActive ? "nav-btn--active" : ''}`} 
						onClick={() => this.props.activateNavLeft()}>
						<div className="nav-btn__bar"></div>
						<div className="nav-btn__bar"></div>
						<div className="nav-btn__bar"></div>
					</button>
					<span className="menu-btn__text">Menu</span>
				</label>

				<nav  
					className={`
						drawer-nav 
						drawer-nav--left 
						${navLeftActive ? "drawer-nav--active" : ''}
					`}>
					<Link 
						className="nav__link drawer-nav__item" 
						to="/" 
						onClick={() => this.props.closeNavs()}>
							Home
					</Link>
					<Link 
						className="nav__link drawer-nav__item" 
						to="/about" 
						onClick={() => this.props.closeNavs()}>
							About
					</Link>
				</nav>

				<div className="wrapper flex items-center">

					{/* <nav className="nav justy-start">
						<Link className="nav__link" to="/">Home</Link>
						<Link className="nav__link" to="/about">About</Link>
					</nav> */}

					<div className="filler"></div>

					<h5 id="logo" className="nav-logo">
						<Link to="/">Nulyph</Link>
					</h5>

					<div className="filler"></div>

					{/* <nav className="nav justy-end">
						{ loggedIn && (
							<Link className="nav__link" to="/dev">Dev</Link>
						)}

						{ loggedIn ? (
							<div className="nav__link">
								<details className="relative">
									<summary>{username}</summary>
									<Link 
										className="put-bottom" 
										to="/login" onClick={() => this.logout()}>
										LOGOUT
									</Link>
								</details>
							</div>
						):(
							<Link className="nav__link" to="/login">LOGIN</Link>
						)}
					</nav> */}

				</div>

				<nav className={`
					drawer-nav 
					drawer-nav--right 
					${navRightActive ? "drawer-nav--active" : ''}`}>

					{ loggedIn && (
						<Link 
							className="nav__link drawer-nav__item" 
							to="/dev"
							onClick={() => this.props.closeNavs()}>
								Dev
						</Link>
					)}

					{ loggedIn ? (
						<Link 
							className="nav__link drawer-nav__item" 
							to="/login" 
							onClick={() => this.logout()}>
								LOGOUT
						</Link>
					):(
						<Link 
							className="nav__link drawer-nav__item" 
							to="/login"
							onClick={() => this.props.closeNavs()}>
								LOGIN
						</Link>
					)}

				</nav>

				<label className="user-btn" htmlFor="user-btn">
					<span className="user-btn__text">User: {username}</span>
					<button 
						id="user-btn" 
						className={`nav-btn ${navRightActive ? "nav-btn--active" : ''}`} 
						onClick={() => this.props.activateNavRight()}>
						<div className="nav-btn__bar"></div>
						<div className="nav-btn__bar"></div>
						<div className="nav-btn__bar"></div>
					</button>
				</label>

			</header>
		)
	}
}

const mapStateToProps = ( state ) => {
    return {
		currentUser:      state.currentUser,
		activeElements:   state.activeElements,
    }
}

const mapDispatchToProps = ( dispatch ) => {
    return {
		logout:           () => dispatch( logout() ),
		activateNavLeft:  () => dispatch( activateNavLeft() ),
		activateNavRight: () => dispatch( activateNavRight() ),
		closeNavs:        () => dispatch( closeNavs() ),
    }
}

export default connect( mapStateToProps, mapDispatchToProps )(Header)