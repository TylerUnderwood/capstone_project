import React, { Component } from 'react'
import CharacterHeader from '../character-sheet/CharacterHeader';


class CharacterEquipment extends Component {

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
			<div className="cs-equipment sheet">

				<div className="cs__header sheet-box">
					<CharacterHeader title="Equipment" />
				</div>
				
			</div>
		)
	}
}

export default CharacterEquipment