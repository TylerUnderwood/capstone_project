import React, { Component } from 'react'

class Checkbox extends Component {

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
			<label className="checkbox" htmlFor={ this.props.name }>

				<input 
					type="checkbox" 
					id={ this.props.name } 
					name={ this.props.name } 
					onChange={this.onChange} />

				<div className="checkbox__box">
					<svg className="icon-checkmark" width="20" height="20" viewBox="0 0 20 20">
						<polyline className="check-line" points="4 11 8 15 16 6"></polyline>
					</svg>
				</div>

				<span className="checkbox__label">{ this.props.name }</span>
				
			</label>
		)
	}
}

export default Checkbox