import React from 'react';
import {Link} from "react-router";
import $ from 'jquery';
import Form from 'react-router-form'

export default class Home extends React.Component
{
		constructor(){
			super();
			this.state = {
					badge:"",
					orgID:"1"
					};


		}

    	handleChange(event){

    		var state = this.state;
    		state.badge = event.target.value;
    		
    		this.setState(state);
    	}

    	handleSelect(event){
    	
    		var state = this.state;
    		state.orgID = event.target.value
    		this.setState(state);
    	}




  render() {

    return(
 		<div>
 			<div className="titleSection">
	    		<p className="homeTitle">
	    			Those who protect
	    		</p>
    		</div>

    		<div className="container-fluid">
	    		<div className="homeContent col-xs-12 col-sm-6 col-md-6 col-lg-6">
	    		</div>
	    		<div className="formContent col-xs-12 col-sm-6 col-md-6 col-lg-6">

	    		<Form to={"officerPosts/"+ this.state.orgID +"/"+this.state.badge} method="POST" >
	    			<label>Badge:<br/>
	    				<input type="text" value={this.state.badge} name="badge" onChange={this.handleChange.bind(this)} />
	    			</label>
	    			<br/>
	    			<label>
			    			Find your police service:<br/>
			    			<select name ="orgID" onChange={this.handleSelect.bind(this)}>
			    				<option value="1">Toronto Police Service</option>
			    				<option value="2">Peel Police</option>	    			
			    			</select>
		    		</label>
	    			<br/>
	    		<button type="submit">Go</button>
	    		</Form>
	    		</div>
    		</div>


   		 </div>

    	) ;
  }
}
