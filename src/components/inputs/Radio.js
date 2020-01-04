import React, { Component } from 'react'

class Radio extends Component {

	constructor(props) {
		super(props);
		this.state = {
			checked: this.props.checked,
		};
	}

	onChange = ( event ) => {
		const target = event.target;
		const value = target.type === 'checkbox' ? target.checked : target.value;
		const name = target.name;

		this.setState({
			[name]: value
		});
	}

	render() {
		return (
			<label className="radio" htmlFor={ this.props.id }>

				<input 
					type="radio" 
					id={ this.props.id } 
					name={ this.props.name } 
					onChange={this.onChange} />

				<div className="radio__box"></div>

				<span className="radio__label">{ this.props.label }</span>
				
			</label>
		)
	}
}

export default Radio