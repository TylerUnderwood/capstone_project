import React, { Component } from 'react'
import DungeonGenerator from '../DungeonGenerator'

class Dungeon extends Component {
	render() {
		return (
			<div className="page-dungeon">
	
				<section className="frame gutter">
					<div className="inner">
						
						<DungeonGenerator />

					</div>
				</section>
				
			</div>
		)
	}
}

export default Dungeon