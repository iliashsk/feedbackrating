import React from 'react';
import {FaQuestion} from 'react-icons/fa'
import {Link} from 'react-router-dom'
function AboutIconLink(){
	return(<div>
		<Link to='/about/:200/iliash'>
		Go To About Page<FaQuestion/>
		</Link>
	</div>)
}
export default AboutIconLink;