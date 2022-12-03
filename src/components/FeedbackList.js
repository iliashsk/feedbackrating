import {motion,AnimatePresence} from 'framer-motion';
import React from 'react';
import FeedbackItem from './FeedbackItem'
import FeedbackContext,{FeedbackProvider} from '../context/FeedbackContext';
import {useContext} from 'react';
import {v4 as uuidv4} from 'uuid';
function FeedbackList(){

const {feedback,deleteFeedback,addFeedback,editFeedback}=useContext(FeedbackContext);
		
		return(<FeedbackProvider>
			<div>
			<div>
			<AnimatePresence>
			{
				feedback.map((item)=>{
				return(
					<motion.div
					key={item.id}
					initial={{opacity:0}}
					animate={{opacity:1}}
					exit={{opacity:0}}
					>
				<FeedbackItem 
				key={item.id}
				 item={item} 
				handleDelete={deleteFeedback}
				handleEdit={editFeedback}
				/>
				</motion.div>

				)
			}
			)
			}
			</AnimatePresence>
			</div>
			</div>
			</FeedbackProvider>)


	}
		

export default FeedbackList;