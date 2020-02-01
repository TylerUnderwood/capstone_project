import React, { Component } from 'react'

class Handbook extends Component {

	state = {
		spellsCount: 0,
		spellsList: [

		],
	}

	onChange = ( event ) => {
		const target = event.target
		const name = target.name
		let value = undefined

		if ( target.type === 'checkbox' ) {
			value = target.checked
		}
		else if ( target.type === 'radio' ) {
			value = target.id
		}
		else {
			value = target.value
		}

		this.setState({
			[name]: value,
		})
	}

	getSpells = ( ) => {
		fetch(`https://dnd5eapi.co/api/spells/`)
			.then( res => res.json() )
			.then( data => {
				console.log(data)
				if ( data.results.length === 0) {
					this.setState({
						spellsList: [{
							index: "null",
							name: "Sorry no results found",
						}]
					})
				} else {
					this.setState({
						spellsCount: data.count,
						spellsList: data.results
					})
				}
			})
			.catch( error => console.log(error) );
	};

	componentDidMount() {
		this.getSpells()
	}

	render() {
		return (
			<div className="page-handbook">
				
				<section className="frame gutter">
					<div className="wrapper">
						<h2 className="heading">Spells</h2>
						<h6>Count - { this.state.spellsCount }</h6>
					</div>
				</section>

				<hr/>

				<section className="frame gutter">
					<div className="wrapper">

						<table className="w-100">
							<thead>
								<tr>
									<td>Index</td>
									<td>Name</td>
								</tr>
							</thead>

						{this.state.spellsList.map(( spell, index ) => (
							<tr key={index}>
								<td>{ spell.index }</td>
								<td>{ spell.name }</td>
							</tr>
						))}
						</table>

					</div>
				</section>
				
			</div>
		)
	}
}

export default Handbook