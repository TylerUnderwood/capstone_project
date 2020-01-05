import React, { Component } from 'react'

class Radio extends Component {

	constructor(props) {
		super(props);
		this.state = {
			id: this.props.id,
			name: this.props.name,
			label: this.props.label ? this.props.label : false,
			value: this.props.value,
		};
	}

	static defaultProps = {
		id: 'radio1',
		name: 'radio',
	}

	onChange = ( event ) => {
		this.setState({
			value: event.target.id
		})

		if ( this.props.update ) {
			this.props.update( event )
		}
	}

	render() {
		return (
			<label className="radio" htmlFor={ this.state.id }>

				<input 
					className="radio__input input--override" 
					type="radio" 
					id={ this.state.id } 
					name={ this.state.name } 
					checked={ this.props.value === this.state.id ? true : false } 
					onChange={ this.onChange } 
				/>

				<div className="radio__box"></div>

				{ this.state.label && (
					<span className="label">{ this.state.label }</span>
				)}
				
			</label>
		)
	}
}

export default Radio