import React from 'react';
import {useParams} from 'react-router-dom'

function AboutPage(){
	const params=useParams();
	return(
		<div className='about'>
		<p>This a React App {params.name+params.id}</p>
		<h2>how are you</h2>
	 
		</div>
		)
}
export default AboutPage;