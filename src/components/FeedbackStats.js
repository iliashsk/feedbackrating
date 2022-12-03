import React from 'react';
import FeedbackContext,{FeedbackProvider} from '../context/FeedbackContext';
import {useContext} from 'react';

function FeedbackStats(){

	const {feedback,deleteFeedback}=useContext(FeedbackContext);
	let avg=feedback.reduce((accum,curr)=>{return (accum+curr.rating)},0)/(feedback.length);

	return(<div>

	<h2>{feedback.length} reviews</h2>
	<h3>average rating is :{isNaN(avg) ? 0 : avg}</h3>

		</div>)

}

export default FeedbackStats;