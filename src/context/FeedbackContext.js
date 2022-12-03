import {createContext,useState} from 'react';
import FeedbackData from '../data/FeedbackData'
import {v4 as uuidv4} from 'uuid';




const FeedbackContext=createContext();

export const FeedbackProvider=({children})=>{

const [feedback,setFeedback]=useState(FeedbackData);
const [feedbackedit,setFeedbackedit]=useState({
	item:{},
	edit:false
})


const deleteFeedback=(id)=>{
		if(window.confirm("Are you sure you want to delete this?")){
			setFeedback(feedback.filter((item)=>item.id!==id))
		}
	}

const addFeedback=(newFeedback)=>{
		newFeedback.id=uuidv4();
setFeedback([newFeedback, ...feedback]);
		
	}

const editFeedback=(item)=>{
		setFeedbackedit({
		item:item,
		edit:true
		
		});}
const updateFeedback=(id,updItem)=>{
	setFeedback(
		feedback.map((item)=>(item.id===id?{...item,...updItem}:item))
		)
}



	return(<FeedbackContext.Provider 
		value={
			{feedback,
		deleteFeedback,
		addFeedback,
		editFeedback,
		feedbackedit,
		updateFeedback
		}
		}>

		{children}
		</FeedbackContext.Provider>
		)
}
export default FeedbackContext;