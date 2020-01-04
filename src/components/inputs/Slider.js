import React, { Component } from 'react'

class Slider extends Component {

	constructor(props) {
		super(props);
		this.state = {
			name: this.props.name,
			min: this.props.min,
			max: this.props.max,
			step: this.props.step,
			value: this.props.value,
		};
	}

	static defaultProps = {
		name: 'slider',
		min: 0,
		max: 100,
		step: 1,
		value: 0,
	}

	onChange = ( event ) => {
		const target = event.target;
		const value = target.type === 'checkbox' ? target.checked : target.value;
		const name = target.name;

		this.setState({
			[name]: value,
			value: value,
		});
	}

	render() {

		const name = this.state.name
		const min = this.state.min
		const max = this.state.max
		const step = this.state.step
		const value = this.state.value

		const range = max - min
		const percentage = ( ( value - min ) / range ) * 100
			
		const thumbStyles = {
			left: `${ percentage }%`,
			transform: `translate( -${ percentage }%, -50% )`,
		}

		return (
			<label className="slider" htmlFor={ name }>

				<input className="slider__input"
					id={ name }
					name={ name }
					type="range" 
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