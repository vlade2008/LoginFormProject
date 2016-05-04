import React from 'react';
import {Well,
		FormControl,
		FormGroup,
		HelpBlock,
		ControlLabel,
		Button,
		ButtonGroup} from 'react-bootstrap'

export default  class TodoApp extends React.Component{
 constructor(props){
     super(props);
 }
 
	 goToRegister=()=>{
	 	this.props.history.push("/register");
	 };

 render(){

 		const wellStyle={

 			width:400,
 			height:400,
 			marginLeft:'auto',
 			marginRight:'auto'
 		};

 		const btnstyle={
 			float:'right',
 			marginLeft:'5px'
 		};
     return (

         <div className="container">
	        <Well style={wellStyle}>
	         <legend>Please Login</legend>
	         	<form>
		         	<FormGroup>
		         		<ControlLabel>Enter Username</ControlLabel>
		         		<FormControl
		         			type="text"
		         			placeholder="Enter your username"
		         		/>
		         		<ControlLabel>Enter Password</ControlLabel>
		         		<FormControl
		         			type="text"
		         			placeholder="Enter your password"
		         		/>
		         		<FormControl.Feedback />
		         		<HelpBlock></HelpBlock>
		         	</FormGroup>
		         	<div style={btnstyle}>
		         		<ButtonGroup>
				         	<Button bsStyle="primary" type="submit">Login</Button>
				         	<Button bsStyle="info" type="button" onClick={this.goToRegister}>Register</Button>
				         </ButtonGroup>
		         	</div>
		         </form>
	         </Well>
         </div>
     );
 }
 

}