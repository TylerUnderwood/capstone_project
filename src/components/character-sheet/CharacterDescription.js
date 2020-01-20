import React, { Component } from 'react'
import CharacterHeader from '../character-sheet/CharacterHeader';


class CharacterDescription extends Component {

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
			<div className="cs-description sheet">

				<div className="cs__header sheet-box">
					<CharacterHeader title="Description" />
				</div>
				
			</div>
		)
	}
}

export default CharacterDescription