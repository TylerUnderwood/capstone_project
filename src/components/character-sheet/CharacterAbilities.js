import React, { Component } from 'react'


class CharacterAbilities extends Component {

	constructor(props) {
		super(props);
		this.state = {
			abilitiesList: [
				{
					title: 'Strength',
					abbr: 'Str',
					score: '17',
					modifier: '+3',
				},
				{
					title: 'Dexterity',
					abbr: 'Dex',
					score: '8',
					modifier: '-1',
				},
				{
					title: 'Constitution',
					abbr: 'Con',
					score: '16',
					modifier: '+3',
				},
				{
					title: 'Intelligence',
					abbr: 'Int',
					score: '8',
					modifier: '-1',
				},
				{
					title: 'Wisdom',
					abbr: 'Wis',
					score: '8',
					modifier: '-1',
				},
				{
					title: 'Charisma',
					abbr: 'Cha',
					score: '15',
					modifier: '+2',
				},
			],
		};
	}

	render() {
		return (
			<div className="character-abilities">
			{this.state.abilitiesList.map(( ability, index ) => (
				<div className="ability" key={index}>
					<span className="ability__title geo-text">{ ability.title }</span>
					<span className="ability__abbr geo-text">{ ability.abbr }</span>
					<span className="ability__score heading">{ ability.score }</span>
					<span className="ability__modifier geo-text">{ ability.modifier }</span>
				</div>
			))}
			</div>
		)
	}
}

export default CharacterAbilities