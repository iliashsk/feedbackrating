
import React from 'react';
import Header from './Header'
import FeedbackList from './FeedbackList'
import FeedbackStats from './FeedbackStats'
import FeedbackForm from './FeedbackForm'
import {FeedbackProvider} from '../context/FeedbackContext'
import AboutIconLink from './AboutIconLink'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import AboutPage from "./AboutPage"

function App(){

	
	

	return(<FeedbackProvider>
		<Header name="iliash sk"/>
		<BrowserRouter>

		<div>

		
		<Routes>

		<Route path='/' element={<>
		
		<FeedbackForm/>
		<FeedbackStats/>
		<FeedbackList />
		<AboutIconLink/></>} />

		<Route path='/about/:id/:name' element={<AboutPage/>} />
		</Routes>
		
	
		</div>
		</BrowserRouter>
		</FeedbackProvider>
		)

}


export default App;