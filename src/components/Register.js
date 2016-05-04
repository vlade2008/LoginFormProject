import React from 'react';
import {Well,
		FormControl,
		FormGroup,
		HelpBlock,
		ControlLabel,
		Button,
		ButtonGroup,
		Radio,
		Checkbox} from 'react-bootstrap'

export default  class Register extends React.Component{
 constructor(props){
     super(props);

     this.state={

     };


 	}
	 goToApp=()=>{
	 	this.props.history.push("/");
	 };

 render(){
 	const wellStyle={

 			width:400,
 			height:600,
 			marginLeft:'auto',
 			marginRight:'auto',
 			position:'relative'
 		};
 	const btnstyle={
 			float:'right',
 			marginLeft:'5px',
 			marginTop:'20px',
 			position:'relative'
 		};
 	return(
		<div className="container">
		    <Well style={wellStyle}>
		        <legend>Please Register</legend>
		        { JSON.stringify(this.state)}
			    <from>
			    	<ControlLabel>First Name</ControlLabel>
			        	<FormControl
			        		type="text"
			        		placeholder="Enter your First Name"
			        		value={this.state.firstName || ''}
			        		onChange={(e)=>this.setState({
			        				firstName:e.target.value
			        			})
			        		}
			        	/>
			        	<ControlLabel>Last Name</ControlLabel>
			        	<FormControl
			        		type="text"
			        		placeholder="Enter your Last Name"
			        		value={this.state.lastName || ''}
			        		onChange={(e)=>this.setState({
			        				lastName:e.target.value
			        			})
			        		}
			        	/>
			        	<ControlLabel>Email</ControlLabel>
			        	<FormControl
			        		type="Email"
			        		placeholder="Enter your Email"
			        		value={this.state.email || ''}
			        		onChange={(e)=>this.setState({
			        				email:e.target.value
			        			})
			        		}
			        	/>
			        	<ControlLabel>Password</ControlLabel>
			        	<FormControl
			        		type="Password"
			        		placeholder="Enter your Password"
			        		value={this.state.password || ''}
			        		onChange={(e)=>this.setState({
			        				password:e.target.value
			        			})
			        		}
			        	/>
			        	<FormControl.Feedback />
			        	<ControlLabel>Sex</ControlLabel>
			        	<FormGroup >
					      <Radio  inline name="gender" value="Male"
					      	onChange={(e)=>this.setState({
			        				gender:e.target.value
			        			})
			        		}
					      >
					        Male
					      </Radio>
					      {' '}
					      {''}
					      <Radio inline name="gender" value="Female"
					      	onChange={(e)=>this.setState({
			        				gender:e.target.value
			        			})
			        		}
					      >
					        Female
					      </Radio>
					      {' '}
					      
					    </FormGroup>
					    <ControlLabel>Movie</ControlLabel>
					    <FormGroup >
					      <Checkbox  inline name="movie" value="Probinsyano"
					      	checked={this.state.movie === 'Probinsyano'}
					      	onClick={()=>{


					      			if (this.state.movie==='Probinsyano') {
					      				this.setState({'movie':''})
					      			}else{
					      				this.setState({'movie':'Probinsyano'})
					      			}
					      			
					      		}
					      	}
					      >
					        Probinsyano
					      </Checkbox>
					      <Checkbox inline name="movie2" value="LoveStory"
					      	checked={this.state.movie2 === 'LoveStory'}
					      	onClick={()=>{
					      			if (this.state.movie2==='LoveStory') {
					      				this.setState({'movie2':''})
					      			}else{
					      				this.setState({'movie2':'LoveStory'})
					      			}
					      		}
					      	}
					      >
					        LoveStory
					      </Checkbox>
					      
					    </FormGroup>
					    <ControlLabel>Favorite food</ControlLabel>
					      <FormControl componentClass="select" placeholder="Select"
					      		value={this.state.food || ''}
					      		onChange={(e)=>this.setState({
			        				food:e.target.value
			        				})
							  	}
							  >
							  <option  value="">...</option>
					      	<option  value="doryan">doryan</option>
					        <option  value="mango">mango</option>
					        <option  value="banana">banana</option>
					      </FormControl>
					     <div style={btnstyle}>
					     <ButtonGroup>
				         	<Button bsStyle="primary" type="submit">Submit</Button>
				         	<Button bsStyle="info" type="button" onClick={this.goToApp}>Cancel</Button>
				         </ButtonGroup>
				         </div>
			    </from>
		    </Well>
	    </div>
		
	);
	}
}