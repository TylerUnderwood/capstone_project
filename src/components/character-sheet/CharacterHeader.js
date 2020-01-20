import React, { Component } from 'react'


class CharacterHeader extends Component {

	constructor(props) {
		super(props);
		this.state = {
			name: 'Krunk',
			race: 'Orc',
			class: 'Bard',
		};
	}

	render() {
		return (
			<div className="character-header">
				<h3 className="cs__heading">{ this.props.title }</h3>
				<div className="filler"></div>
				<div className="cs__name">{ this.state.name }/</div>
				<div className="cs__race">{ this.state.race }/</div>
				<div className="cs__class">{ this.state.class }</div>
			</div>
		)
	}
}

export default CharacterHeader