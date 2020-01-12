import React, { Component } from 'react'
import { connect } from 'react-redux'
import { login } from '../../redux/actions'

class Login extends Component {

	state = {
		username: 'admin',
		password: 'password',
	}

	handleTextChange = ( event ) => {
		const state = { ...this.state }
		state[event.target.name] = event.target.value
		this.setState(state)
	}

	login = ( event ) => {
		event.preventDefault()
		
		this.props.login( this.state.username )

		let now = new Date(),
            milliSeconds = now - 0 + 30 * 24 * 3600 * 1000,
			expiryDate = new Date(milliSeconds)
		
		document.cookie = `NULYPH_USER=${ this.state.username }; expires=${ expiryDate.toGMTString() }; path=/`
		this.props.history.push('/dev')
	}

	render() {
		return (
			<div className="page-login">
	
				<section className="frame gutter">
					<div className="wrapper mxw-text">
						<form className="login-form" onSubmit={this.login}>
							<input
								required
								onChange={this.handleTextChange}
								value={this.state.username}
								name="username"
								label="Username"
								type="text" />
							<br/>
							<input
								required
								onChange={this.handleTextChange}
								value={this.state.password}
								name="password"
								label="Password"
								type="password" />
							<br/>
							<button type="submit">Login</button>
						</form>
					</div>
				</section>
				
			</div>
		);
	}
}

const mapStateToProps = ( state ) => {
    return {
        currentUser: state.currentUser,
    }
}

const mapDispatchToProps = ( dispatch ) => {
    return {
		login: ( username ) => dispatch( login( username ) )
    }
}

export default connect( mapStateToProps, mapDispatchToProps )(Login)