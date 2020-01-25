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

	logout( event ) {
		let confirmation = window.confirm( 'Are you sure you want to logout?' )

		if ( confirmation ) {
			this.props.closeNavs()
			this.props.logout()
			document.cookie = 'NULYPH_USER=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
		} else {
			event.preventDefault()
		}
	}

	render() {

		const { loggedIn, username } = this.props.currentUser
		const navLeftActive = this.props.activeElements.navLeft
		const navRightActive = this.props.activeElements.navRight

		return (
			<header id="header" className="site-header fixed-header">

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
					<Link 
						className="nav__link drawer-nav__item" 
						to="/dungeon" 
						onClick={() => this.props.closeNavs()}>
							Dungeon
					</Link>
				</nav>

				<h5 id="logo" className="nav-logo">
					<Link to="/">Nu-lyph</Link>
				</h5>

				<nav className={`
					drawer-nav 
					drawer-nav--right 
					${navRightActive ? "drawer-nav--active" : ''}`}>

					{ loggedIn ? (
						<Link 
							className="nav__link drawer-nav__item" 
							to="/login" 
							onClick={(event) => this.logout(event)}>
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

					{ loggedIn && (
						<Link 
							className="nav__link drawer-nav__item" 
							to="/dev"
							onClick={() => this.props.closeNavs()}>
								Dev
						</Link>
					)}

					{ loggedIn && (
						<Link 
							className="nav__link drawer-nav__item" 
							to="/characters"
							onClick={() => this.props.closeNavs()}>
								Characters
						</Link>
					)}

				</nav>

				<label className="user-btn" htmlFor="user-btn">
					<span className="user-btn__text"><span className="put-left pad-r">{username}</span>User</span>
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