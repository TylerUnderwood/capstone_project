import React, { Component } from 'react'

class Toggle extends Component {

	constructor(props) {
		super(props);
		this.state = {
			id: this.props.id ? this.props.id : this.props.name,
			name: this.props.name,
			labelOn: this.props.labelOn ? this.props.labelOn : false,
			labelOff: this.props.labelOff ? this.props.labelOff : false,
			value: this.props.value,
		};
	}

	static defaultProps = {
		name: 'toggle',
		value: false,
	}

	onChange = ( event ) => {
		this.setState({
			value: event.target.checked,
		})

		if ( this.props.update ) {
			this.props.update( event )
		}
	}

	render() {
		return (
			<label className="toggle" htmlFor={ this.state.id }>

				<input 
					className="toggle__input input--override"
					type="checkbox" 
					id={ this.state.id } 
					name={ this.state.name } 
					checked={ this.state.value } 
					onChange={ this.onChange }
				/>

				<div className="toggle__switch"></div>

				{ /* if there is both an off and on prop, switch between the two */ }
				{( this.state.labelOn && this.state.labelOff ) && (
					<div className="label">
					{ this.state.value && (
						<span className="toggle__value">{ this.state.labelOn }</span>
					)}
					{ !this.state.value && (
						<span className="toggle__value">{ this.state.labelOff }</span>
					)}
					</div>
				)}

			</label>
		)
	}
}

export default Toggle