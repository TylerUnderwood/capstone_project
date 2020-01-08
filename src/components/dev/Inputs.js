import React, { Component } from 'react'
import Checkbox from '../inputs/Checkbox'
import Radio from '../inputs/Radio'
import Slider from '../inputs/Slider'
import Toggle from '../inputs/Toggle'

class Inputs extends Component {

	state = {
		coolness: false,
		awesome: true,
		reactRadio: 'reactRadio2',
		reactSlider: 0,
		toggle1: true,
		toggle2: false,
		toggle3: true,

		text: '',
		url: '',
		email: '',
		password: '',
		number: '',
		tel: '',
		textarea: '',

		select: '',
		checkbox: '',
		radio: '',
		range: '',

		date: '',
		time: '',

		file: '',
		color: '',

		username: '',
	}

	onChange = ( event ) => {
		const target = event.target
		const name = target.name
		let value = undefined

		if ( target.type === 'checkbox' ) {
			value = target.checked
		}
		else if ( target.type === 'radio' ) {
			value = target.id
		}
		else {
			value = target.value
		}

		this.setState({
			[name]: value,
		})
	}

	showForm = ( event ) => {
		event.preventDefault()
		// console.log( event.target )
		alert( JSON.stringify( this.state, null, 4 ) )
	}

	render() {
		return (
			<div className="page-inputs">
				
				<section className="frame gutter">
					<div className="inner">
						<form onSubmit={this.showForm}>
							<Checkbox 
								name="coolness" 
								label="Coolness" 
								value={ this.state.coolness } 
								update={ this.onChange } 
							/>
							<br />
							<Checkbox 
								name="awesome" 
								label="Awesome" 
								value={ this.state.awesome } 
								update={ this.onChange } 
							/>
							<br />
							<fieldset>
								<legend>React Radio</legend>
								<Radio 
									id="reactRadio1" 
									name="reactRadio" 
									label="Radio 1" 
									value={ this.state.reactRadio } 
									update={ this.onChange } 
								/>
								<br/>
								<Radio 
									id="reactRadio2" 
									name="reactRadio" 
									label="Radio 2" 
									value={ this.state.reactRadio } 
									update={ this.onChange } 
								/>
								<br/>
								<Radio 
									id="reactRadio3" 
									name="reactRadio" 
									label="Radio 3" 
									value={ this.state.reactRadio } 
									update={ this.onChange } 
								/>
							</fieldset>
							<br/>
							<div className="range">
								<span className="range__text label">Health</span>
								<div className="range__wrap">
									<Slider 
										name="reactSlider" 
										min="-100" 
										max="100" 
										value={ this.state.reactSlider } 
										update={ this.onChange } 
									/>
								</div>
								<span className="range__text label">{this.state.reactSlider}</span>
							</div>
							<br />
							<Toggle 
								name="toggle1" 
								labelOn="on" 
								labelOff="off" 
								value={ this.state.toggle1 } 
								update={ this.onChange } 
							/>
							<br />
							<Toggle 
								name="toggle2" 
								labelOn="on" 
								labelOff="off" 
								value={ this.state.toggle2 } 
								update={ this.onChange } 
							/>
							<br />
							<Toggle 
								name="toggle3" 
								labelOn="on" 
								labelOff="off" 
								value={ this.state.toggle3 } 
								update={ this.onChange } 
							/>
							<br />
							<button type="submit">Submit</button>
						</form>
					</div>
				</section>

				<hr/>
	
				<section className="frame gutter">
					<div className="inner">
						<form onSubmit={this.showForm}>
							<input 
								type="text" 
								name="text" 
								placeholder="text" 
								value={this.state.text} 
								onChange={this.onChange} 
							/>
							<br/>
							<input 
								type="url" 
								name="url" 
								placeholder="url" 
								value={this.state.url} 
								onChange={this.onChange} 
							/>
							<br/>
							<input 
								type="email" 
								name="email" 
								placeholder="email" 
								value={this.state.email} 
								onChange={this.onChange} 
							/>
							<br/>
							<input 
								type="password" 
								name="password" 
								placeholder="password" 
								value={this.state.password} 
								onChange={this.onChange} 
							/>
							<br/>
							<input 
								type="number" 
								name="number" 
								placeholder="number" 
								value={this.state.number} 
								onChange={this.onChange} 
							/>
							<br/>
							<input 
								type="tel" 
								name="tel" 
								placeholder="tel" 
								value={this.state.tel} 
								onChange={this.onChange} 
							/>
							<br/>
							<textarea></textarea>
							<br/>
							<button type="submit">Submit</button>
						</form>
					</div>
				</section>

				<hr/>
				
				<section className="frame gutter">
					<div className="inner">
						<form onSubmit={this.showForm}>
							<select name="select" onChange={this.onChange}>
								<option value="option1">Option 1</option>
								<option value="option2">Option 2</option>
								<option value="option3">Option 3</option>
								<option value="option4">Option 4</option>
							</select>
							<br/>
							<label htmlFor="checkbox">
								<input
									id="checkbox"
									name="checkbox"
									label="Checkbox"
									type="checkbox" 
									onChange={this.onChange}/>
								<span className="ml-2">Checkbox</span>
							</label>
							<br/>
							<fieldset>
								<legend>Radio</legend>
								<label htmlFor="radio1">
									<input
										id="radio1"
										name="radio"
										label="Radio 1"
										type="radio" 
										onChange={this.onChange}/>
									<span className="ml-2">Radio 1</span>
								</label>
								<br/>
								<label htmlFor="radio2">
									<input
										id="radio2"
										name="radio"
										label="Radio 2"
										type="radio" 
										onChange={this.onChange}/>
									<span className="ml-2">Radio 2</span>
								</label>
								<br/>
								<label htmlFor="radio3">
									<input
										id="radio3"
										name="radio"
										label="Radio 3"
										type="radio" 
										onChange={this.onChange}/>
									<span className="ml-2">Radio 3</span>
								</label>
							</fieldset>
							<br/>
							<input
								name="range"
								label="Range"
								type="range" 
								onChange={this.onChange} 
							/>
							<br/>
							<button type="submit">Submit</button>
						</form>
					</div>
				</section>

				<hr/>
				
				<section className="frame gutter">
					<div className="inner">
						<form onSubmit={this.showForm}>
							<input
								placeholder="file"
								name="file"
								label="file"
								type="file" 
								onChange={this.onChange} 
							/>
							<br/>
							<input
								placeholder="color"
								name="color"
								label="color"
								type="color" 
								onChange={this.onChange} 
							/>
							<br/>
							<button type="submit">Submit</button>
						</form>
					</div>
				</section>

				<hr/>
				
				<section className="frame gutter">
					<div className="inner">
						<form onSubmit={this.showForm}>
							<input
								placeholder="date"
								name="date"
								label="date"
								type="date" 
								onChange={this.onChange} 
							/>
							<br/>
							<input
								placeholder="time"
								name="time"
								label="time"
								type="time" 
								onChange={this.onChange} 
							/>
							<br/>
							<button type="submit">Submit</button>
						</form>
					</div>
				</section>

				<hr/>

				<section className="frame gutter">
					<div className="inner">
						<form onSubmit={this.showForm}>
							<input
								className="focus-underline"
								placeholder="username" 
								type="text" 
								name="username" 
								value={this.state.username} 
								onChange={this.onChange} 
							/>
							<br/>
							<button type="submit">Submit</button>
						</form>
					</div>
				</section>
				
			</div>
		)
	}
}

export default Inputs