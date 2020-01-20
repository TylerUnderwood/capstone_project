import React, { Component } from 'react'
import CharacterHeader from '../character-sheet/CharacterHeader';


class CharacterNotes extends Component {

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
			<div className="cs-notes sheet">

				<div className="cs__header sheet-box">
					<CharacterHeader title="Notes" />
				</div>
				
			</div>
		)
	}
}

export default CharacterNotes