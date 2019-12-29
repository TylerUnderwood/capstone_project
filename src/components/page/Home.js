import React from 'react'
import { Link } from 'react-router-dom'


const Home = () => {
    return (
		<div className="page-home">

			<section className="trim gutter">
				<div className="wrapper">
					<Link to="/login">Login</Link>
				</div>
			</section>
			
		</div>
    )
}

export default Home