import React, { Component } from 'react'
import CharacterHeader from '../character-sheet/CharacterHeader';


class CharacterStats extends Component {

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
			<div className="cs-stats sheet">

				<div className="cs__header sheet-box">
					<CharacterHeader title="Stats" />
				</div>
				
			</div>
		)
	}
}

export default CharacterStats