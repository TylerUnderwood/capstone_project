import React, { Component } from 'react'
import CharacterHeader from '../character-sheet/CharacterHeader';


class CharacterSpells extends Component {

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
			<div className="cs-spells sheet">

				<div className="cs__header sheet-box">
					<CharacterHeader title="Spells" />
				</div>
				
			</div>
		)
	}
}

export default CharacterSpells