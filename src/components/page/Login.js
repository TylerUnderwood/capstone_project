import React, { Component } from 'react'

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
		
		document.cookie = `loggedIn=true;max-age=60*1000`
		this.props.history.push('/')
	}

	render() {
		return (
			<div className="view-login wrapper frame">
				<form className="login-form" onSubmit={this.login}>
					<input
						//required
						onChange={this.handleTextChange}
						value={this.state.username}
						name="username"
						label="Username"
						type="text" />
					<input
						//required
						onChange={this.handleTextChange}
						value={this.state.password}
						name="password"
						label="Password"
						type="password" />
					<button
						type="submit"
						className="btn login-button"
						variant="contained"
						color="primary">Login</button>
				</form>
			</div>
		);
	}
}

export default Login;