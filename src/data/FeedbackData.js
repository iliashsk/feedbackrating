import React from 'react'
import App from '../components/App'
import FeedbackForm from "../components/FeedbackForm"
const FeedbackData=[
{
	id:1,
	rating:10,
	text:"This is Iliash from kolkata. I am a aspiring fullstack web developer in mern stack",
},
{
		id:2,
	rating:9,
	text:"Hollywood is A film industry in North america.",
},
{
		id:3,
	rating:8.5,
	text:"how are you friends . I like to invite all of you in my house to a party",
},
{
		id:4,
	rating:8,
	text:"West bengal is a state in India .i am gonna join this  ",
}
]
function Feed(){
	function FeedPass(req){FeedbackData.push(req.body.feed)};
	return(<div>

		<FeedbackForm FeedPass={FeedPass}/>
			</div>)

}



export default FeedbackData;