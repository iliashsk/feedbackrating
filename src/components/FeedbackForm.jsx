import React,{useState,useEffect} from 'react';
import Card from './shared/card'
import Button from "./Button"
import RatingSelect from './RatingSelect'
import FeedbackContext from '../context/FeedbackContext';
import {useContext} from 'react'



function FeedbackForm(){
const {feedback,addFeedback,editFeedback,feedbackedit,updateFeedback}=useContext(FeedbackContext);
const [rating,setRating]=useState(10);
const [state,setState]=useState({value:""});
const [disabled,setDisabled]=useState(true);

  useEffect(()=>{
    if(feedbackedit.edit===true){
    setDisabled(false)
    setState({value:feedbackedit.item.text});
     console.log(state.value);
    }
   
    
  },[feedbackedit])



  function handleChange(event) {
    setState({value: event.target.value});
    if(event.target.value.length>10){
    setDisabled(false)
  }else{setDisabled(true)}
  }

  function handleSubmit(event) {
     event.preventDefault();
    
    
    const newFeedback={
  text:state.value,
  rating:rating,
}
if(feedbackedit.edit===true){
  updateFeedback(feedbackedit.item.id,newFeedback);
}
else{
  addFeedback(newFeedback);
}

setState({value:''});
  }




    return (
      <Card>
      
      <form onSubmit={handleSubmit}>
      <RatingSelect select={(rating)=>{setRating(rating)}}/>
        <label>
          Type your opinion:
          <input type="text" value={state.value} onChange={handleChange} />
          
          <Button type='submit' isDisabled={disabled} ></Button>

          </label>
        
      </form>
      
</Card>
  );
  }
export default FeedbackForm;
