import React,{useState,useEffect} from 'react';
import {FaTimes,FaTimesCircle,FaEdit} from 'react-icons/fa'
import Card from './shared/card'
import FeedbackData from '../data/FeedbackData'
import FeedbackContext,{FeedbackProvider} from '../context/FeedbackContext';
import {useContext} from 'react';

function FeedbackItem({item,handleDelete,handleEdit}){
const {deleteFeedback,addFeedback,editFeedback}=useContext(FeedbackContext);
/*const editFeedback=(item)=>{
	console.log(item);
}
*/

	return(
		<div>
		
		<Card  reverse={true}>
		<div className="num-display">{item.rating}</div>
		<button  onClick={()=>handleDelete(item.id)} className="close" >
		<FaTimesCircle color='red'/>
		</button>
		<button onClick={()=>{handleEdit(item)}} className="edit">
		<FaEdit color="purple"/>
		</button>
		<div className="text-display" id="jen">{item.text}</div>
	
			</Card>
			
			</div>
		
		)

}
 

export default FeedbackItem;