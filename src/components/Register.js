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

import validation from 'react-validation-mixin'
import strategy from 'react-validatorjs-strategy'
import validatorjs from 'validatorjs'
import classnames from 'classnames'

 class Register extends React.Component{

 constructor(props){
     super(props);
     this.state={
     	
     };

     this.validatorTypes = strategy.createSchema(
	     	{
	     		firstName:'required',
	     		lastName:'required',
	     		email:'required'	,
	     		password:'required',
	     		gender:'required',
	     		food:'required'
	     	},
	     	{
	     		"required":"The field: attribute is required!"
	     	},
	     	(validation)=>{
	     		validation.setAttributeNames({
	     			lastName:'lastName',
	     			firstName:'firstName',
	     			email:'email',
	     			password:'password',
	     			gender:'gender',
	     			food:'food'
	     		});
	     	}
     	);

 	}
	 goToApp=()=>{
	 	this.props.history.push("/");
	 };

	 getValidatorData = ()=> {
        return this.state
    };

	getClasses = (field)=>{
        return classnames({
            'success': this.props.isValid(field),
            'error': !this.props.isValid(field)
        });
 	};


	getErrorText=(field)=>{
        var error = this.props.errors[field];
        if(!error)
            return null;
        if(Array.isArray(error)){
            var message = [];
            message = error.map((item,i)=>{
                return(
                    <span key={i}>
                        {item}
                        <br/>
                    </span>
                )
            });
            return message;
        }
        else
            return  (<span>{error || ''}</span>);
    };

    onFormSubmit = (event)=>{
        event.preventDefault();
        this.setState({
        	validated:true
        });
        this.props.validate(this.onValidate);
    };
 
	onValidate=(error)=>{
        if (error) {
            //form has errors; do not submit
        } else {
           // submit to rest here
        }
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
			    <form onSubmit={this.onFormSubmit} noValidate>
			    	<FormGroup  validationState={this.getClasses('firstName')}>
			    		<ControlLabel>First Name</ControlLabel>
			        	<FormControl
			        		name="firstName"
			        		type="text"
			        		placeholder="Enter your First Name"
			        		value={this.state.firstName || ''}
			        		onChange={(e)=>this.setState({
			        				firstName:e.target.value
			        			})
			        		}
			        	/>
			        <HelpBlock>{this.getClasses('firstName')}</HelpBlock>
			        </FormGroup>
			        <FormGroup  validationState={this.getClasses('lastName')}>
			        	<ControlLabel>Last Name</ControlLabel>
			        	<FormControl
			        		name="lastName"
			        		type="text"
			        		placeholder="Enter your Last Name"
			        		value={this.state.lastName || ''}
			        		onChange={(e)=>this.setState({
			        				lastName:e.target.value
			        			})
			        		}
			        		
			        	/>
			         <HelpBlock>{this.getClasses('lastName')}</HelpBlock>
			        </FormGroup>
			        <FormGroup  validationState={this.getClasses('email')}>
			        	<ControlLabel>Email</ControlLabel>
			        	<FormControl
			        		name="email"
			        		type="Email"
			        		placeholder="Enter your Email"
			        		value={this.state.email || ''}
			        		onChange={(e)=>this.setState({
			        				email:e.target.value
			        			})
			        		}
			        	/>
			        <HelpBlock>{this.getClasses('email')}</HelpBlock>
			        </FormGroup>
			         <FormGroup  validationState={this.getClasses('password')}>
			        	<ControlLabel>Password</ControlLabel>
			        	<FormControl
			        		name="password"
			        		type="Password"
			        		placeholder="Enter your Password"
			        		value={this.state.password || ''}
			        		onChange={(e)=>this.setState({
			        				password:e.target.value
			        			})
			        		}
			        	/>
			        	<FormControl.Feedback />
			        	<HelpBlock>{this.getClasses('password')}</HelpBlock>
			        	</FormGroup>
			        	<ControlLabel>Sex</ControlLabel>
			        	<FormGroup validationState={this.getClasses('gender')} >
					      <Radio  inline name="gender" value="Male"
					      	onChange={(e)=>this.setState({
			        				gender:e.target.value
			        			})
			        		}
					      >
					        Male
					      </Radio>
					      <Radio inline name="gender" value="Female"
					      	onChange={(e)=>this.setState({
			        				gender:e.target.value
			        			})
			        		}
					      >
					        Female
					      </Radio>
					      <HelpBlock>{this.getClasses('gender')}</HelpBlock>
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
					    <FormGroup validationState={this.getClasses('food')} >
					    <ControlLabel>Favorite food</ControlLabel>
					      <FormControl componentClass="select" placeholder="Select"
					      		name="food"
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
					      <HelpBlock>{this.getClasses('food')}</HelpBlock>
					    </FormGroup>
					     <div style={btnstyle}>
					     <ButtonGroup>
				         	<Button bsStyle="primary" type="submit">Submit</Button>
				         	<Button bsStyle="info" type="button" onClick={this.goToApp}>Cancel</Button>
				         </ButtonGroup>
				         </div>
			    </form>
		    </Well>
	    </div>
		
	);
	}
}

export default validation(strategy)(Register);