import React from 'react'
import ReactDOM from 'react-dom'
import {hashHistory,Route,Router} from 'react-router'

//pages
import App from './App'
import Register from './Register'
//style
import '../styles/app.css'
import '../styles/bootstrap.css'

const Components=(
	<Router history={hashHistory}>
		<Route path="/" component={App}/>
		<Route path="/register" component={Register}/>
	</Router>
);

ReactDOM.render(Components, document.getElementById('app')); 
