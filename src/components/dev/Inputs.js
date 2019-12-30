import React, { Component } from 'react'

class Inputs extends Component {

	state = {
		text: 'text',
		password: 'password',
		number: 12345,
		checkbox: 'checkbox',
		color: 'color',
		date: 'date',
		datetimeLocal: 'datetimeLocal',
		email: 'email',
		file: 'file',
		hidden: 'hidden',
		image: 'image',
		month: 'month',
		number: 'number',
		password: 'password',
		radio: 'radio',
		range: 'range',
		reset: 'reset',
		search: 'search',
		submit: 'submit',
		tel: 'tel',
		text: 'text',
		time: 'time',
		url: 'url',
		week: 'week',
	}

	handleTextChange = ( event ) => {
		const state = { ...this.state }
		state[event.target.name] = event.target.value
		this.setState(state)
	}

	render() {
		return (
			<div className="page-inputs">
	
				<section className="frame gutter">
					<div className="wrapper mxw-text">
						<form className="login-form" onSubmit={this.login}>
							<input 
								onChange={this.handleTextChange}
								value={this.state.text}
								name="username"
								label="Username"
								type="text" />
							<input
								onChange={this.handleTextChange}
								value={this.state.password}
								name="password"
								label="Password"
								type="password" />
							<input
								onChange={this.handleTextChange}
								value={this.state.number}
								name="number"
								label="Number"
								type="number" />
							<label for="checkbox">
								<input
									id="checkbox"
									name="checkbox"
									label="Checkbox"
									type="checkbox" />
								<span>Checkbox</span>
							</label>
							<br/>
							<fieldset>
								<legend>Radio:</legend>
								<label for="radio1">
									<input
										id="radio1"
										name="radio"
										label="Radio 1"
										type="radio" />
									<span>Radio 1</span>
								</label>
								<label for="radio2">
									<input
										id="radio2"
										name="radio"
										label="Radio 2"
										type="radio" />
									<span>Radio 2</span>
								</label>
								<label for="radio3">
									<input
										id="radio3"
										name="radio"
										label="Radio 3"
										type="radio" />
									<span>Radio 3</span>
								</label>
							</fieldset>
							<br/>
							<input
								name="range"
								label="Range"
								type="range" />
							<br/>
							<select>
								<option value="volvo">Volvo</option>
								<option value="saab">Saab</option>
								<option value="mercedes">Mercedes</option>
								<option value="audi">Audi</option>
							</select>
							<button
								type="submit"
								>Submit</button>
						</form>
					</div>
				</section>

				<hr/>

				<section className="frame gutter">
					<div className="wrapper mxw-text">
						<textarea></textarea>
						<input
							className="focus-underline"
							onChange={this.handleTextChange}
							value={this.state.text}
							name="username"
							label="Username"
							type="text" />
					</div>
				</section>

				<hr/>
				
			</div>
		)
	}
}

export default Inputs