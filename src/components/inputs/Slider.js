import React, { Component } from 'react'


class Slider extends Component {

	constructor(props) {
		super(props);
		this.state = {
			id: this.props.id ? this.props.id : this.props.name,
			name: this.props.name,
			min: this.props.min,
			max: this.props.max,
			step: this.props.step,
			value: this.props.value,
		};
	}

	static defaultProps = {
		// id: 'slider',
		name: 'slider',
		min: 0,
		max: 100,
		step: 1,
		value: 0,
	}

	onChange = ( event ) => {
		this.setState({
			value: event.target.value,
		})

		if ( this.props.update ) {
			this.props.update( event )
		}
	}

	render() {

		const { 
			id,
			name,
			min,
			max,
			step,
			value,  
		} = this.state

		const range = max - min
		const percentage = ( ( value - min ) / range ) * 100

		const thumbStyles = {
			left: `${ percentage }%`,
			transform: `translate( -${ percentage }%, -50% )`,
		}

		return (
			<label className="slider" htmlFor={ id }>

				<input 
					className="slider__input" 
					type="range" 
					id={ id }
					name={ name }
					min={ min } 
					max={ max } 
					step={ step }
					onChange={ this.onChange }
				/>

				<div className="slider__track"></div>
				<div className="slider__thumb" style={ thumbStyles }></div>

			</label>
		)
	}
}

export default Slider