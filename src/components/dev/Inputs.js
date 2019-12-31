import React, { Component } from 'react'

class Inputs extends Component {

	state = {
		text: '',
		url: '',
		email: '',
		password: '',
		number: '',
		tel: '',

		file: '',
		color: '',

		datetimeLocal: '',
		date: '',
		month: '',
		week: '',
		time: '',

		checkbox: '',
		radio: '',
		range: '',
	}

	showForm = ( ) => {
		alert(JSON.stringify(this.state))
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
						<form className="login-form" onSubmit={this.showForm}>
							<input 
								onChange={this.handleTextChange}
								value={this.state.text}
								placeholder="text"
								name="text"
								label="Text"
								type="text" />
							<br/>
							<input
								onChange={this.handleTextChange}
								value={this.state.url}
								placeholder="url"
								name="url"
								label="url"
								type="url" />
							<br/>
							<input
								onChange={this.handleTextChange}
								value={this.state.email}
								placeholder="email"
								name="email"
								label="email"
								type="email" />
							<br/>
							<input 
								onChange={this.handleTextChange}
								value={this.state.password}
								placeholder="password"
								name="password"
								label="password"
								type="password" />
							<br/>
							<input
								onChange={this.handleTextChange}
								value={this.state.number}
								placeholder="number"
								name="number"
								label="number"
								type="number" />
							<br/>
							<input
								onChange={this.handleTextChange}
								value={this.state.tel}
								placeholder="tel"
								name="tel"
								label="tel"
								type="tel" />
							<br/>
							<select>
								<option value="option1">Option 1</option>
								<option value="option2">Option 2</option>
								<option value="option3">Option 3</option>
								<option value="option4">Option 4</option>
							</select>
							<br/>
							<label for="checkbox">
								<input
									id="checkbox"
									name="checkbox"
									label="Checkbox"
									type="checkbox" />
								<span className="ml-2">Checkbox</span>
							</label>
							<br/>
							<fieldset>
								<legend>Radio</legend>
								<label for="radio1">
									<input
										id="radio1"
										name="radio"
										label="Radio 1"
										type="radio" />
									<span className="ml-2">Radio 1</span>
								</label>
								<br/>
								<label for="radio2">
									<input
										id="radio2"
										name="radio"
										label="Radio 2"
										type="radio" />
									<span className="ml-2">Radio 2</span>
								</label>
								<br/>
								<label for="radio3">
									<input
										id="radio3"
										name="radio"
										label="Radio 3"
										type="radio" />
									<span className="ml-2">Radio 3</span>
								</label>
							</fieldset>
							<br/>
							<input
								name="range"
								label="Range"
								type="range" />
							<br/>
							<button type="submit">Submit</button>
						</form>
					</div>
				</section>

				<hr/>
				
				<section className="frame gutter">
					<div className="wrapper mxw-text">
						<form>
							<input
								placeholder="file"
								name="file"
								label="file"
								type="file" />
							<br/>
							<input
								placeholder="color"
								name="color"
								label="color"
								type="color" />
							<br/>
							<button type="submit">Submit</button>
						</form>
					</div>
				</section>

				<hr/>
				
				<section className="frame gutter">
					<div className="wrapper mxw-text">
						<form>
							<input
								placeholder="datetime local"
								name="datetimeLocal"
								label="datetimeLocal"
								type="datetime-local" />
							<br/>
							<input
								placeholder="date"
								name="date"
								label="date"
								type="date" />
							<br/>
							<input
								placeholder="month"
								name="month"
								label="month"
								type="month" />
							<br/>
							<input
								placeholder="week"
								name="week"
								label="week"
								type="week" />
							<br/>
							<input
								placeholder="time"
								name="time"
								label="time"
								type="time" />
							<br/>
							<button type="submit">Submit</button>
						</form>
					</div>
				</section>

				<hr/>

				<section className="frame gutter">
					<div className="wrapper mxw-text">
						<textarea></textarea>
						<br/>
						<input
							className="focus-underline"
							onChange={this.handleTextChange}
							value={this.state.username}
							placeholder="username"
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