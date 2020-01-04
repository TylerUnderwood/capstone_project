import React, { Component } from 'react'

class Toggle extends Component {

	constructor(props) {
		super(props);
		this.state = {
			checked: this.props.checked,
			onOff: false,
		};
	}

	onChange = ( event ) => {
		const target = event.target;
		const value = target.type === 'checkbox' ? target.checked : target.value;
		const name = target.name;

		this.setState({
			[name]: value,
			onOff: !this.state.onOff,
		});
	}

	render() {
		return (
			<label className="toggle" htmlFor={ this.props.name }>

				<input  
					type="checkbox" 
					id={ this.props.name } 
					name={ this.props.name }  
					onChange={ this.onChange }
				/>

				<div className="toggle__switch"></div>

				{ /* if there is both an off and on prop, switch between the two */ }
				{ ( this.props.on && this.props.off ) && (
					<div className="toggle__label">
					{ this.state.onOff && (
						<span className="toggle__text">{ this.props.on }</span>
					)}
					{ !this.state.onOff && (
						<span className="toggle__text">{ this.props.off }</span>
					)}
					</div>
				)}

			</label>
		)
	}
}

export default Toggle