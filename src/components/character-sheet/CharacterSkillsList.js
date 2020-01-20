import React, { Component } from 'react'


class CharacterSkillsList extends Component {

	constructor(props) {
		super(props);
		this.state = {
			skillsList: [
				{
					prof: false,
					mod: 'DEX',
					skill: 'Acrobatics',
					bonus: '-1',
				},
				{
					prof: true,
					mod: 'WIS',
					skill: 'Animal Handling',
					bonus: '+1',
				},
				{
					prof: false,
					mod: 'INT',
					skill: 'Arcana',
					bonus: '-1',
				},
				{
					prof: false,
					mod: 'STR',
					skill: 'Athletics',
					bonus: '+3',
				},
				{
					prof: false,
					mod: 'CHA',
					skill: 'Deception',
					bonus: '+2',
				},
				{
					prof: false,
					mod: 'INT',
					skill: 'History',
					bonus: '-1',
				},
				{
					prof: false,
					mod: 'WIS',
					skill: 'Insight',
					bonus: '-1',
				},
				{
					prof: true,
					mod: 'CHA',
					skill: 'Intimidation',
					bonus: '+4',
				},
				{
					prof: false,
					mod: 'INT',
					skill: 'Investigation',
					bonus: '-1',
				},
				{
					prof: false,
					mod: 'WIS',
					skill: 'Medicine',
					bonus: '-1',
				},
				{
					prof: false,
					mod: 'INT',
					skill: 'Nature',
					bonus: '-1',
				},
				{
					prof: false,
					mod: 'WIS',
					skill: 'Perception',
					bonus: '-1',
				},
				{
					prof: true,
					mod: 'CHA',
					skill: 'Performance',
					bonus: '+4',
				},
				{
					prof: true,
					mod: 'CHA',
					skill: 'Persuasion',
					bonus: '+4',
				},
				{
					prof: false,
					mod: 'INT',
					skill: 'Religion',
					bonus: '-1',
				},
				{
					prof: false,
					mod: 'DEX',
					skill: 'Sleight of Hand',
					bonus: '-1',
				},
				{
					prof: false,
					mod: 'DEX',
					skill: 'Stealth',
					bonus: '-1',
				},
				{
					prof: false,
					mod: 'WIS',
					skill: 'Survival',
					bonus: '-1',
				},
			],
		};
	}

	render() {
		return (
			<div className="character-skills skills-list">
				<div className="skills-list__item--head">
					<div className="skills-list__col--skill">SKILL</div>
					<div className="skills-list__col--bonus">BONUS</div>
					<div className="skills-list__col--mod">MOD</div>
					<div className="skills-list__col--prof">PROF</div>
				</div>
				{this.state.skillsList.map(( skill, index ) => (
					<div className="skills-list__item" key={index}>
						<div className="skills-list__col--skill">{ skill.skill }</div>
						<div className="skills-list__col--bonus">{ skill.bonus }</div>
						<div className="skills-list__col--mod">{ skill.mod }</div>
						<div className="skills-list__col--prof">{ skill.prof ? 'Y' : 'N' }</div>
					</div>
				))}
			</div>
		)
	}
}

export default CharacterSkillsList