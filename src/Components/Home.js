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
			 				<p className="homeTitle">Those who protect</p>
	    	</div>

    		<div className="homeContainer container-fluid">
	    		<div className="formContent col-xs-12 col-sm-6 col-md-6 col-lg-6">

	    			{/*<img className="titleImage" src="./src/Components/security.png" />*/}
	    			<img className="badgeCop" src="./src/Components/badge.png" />

			    		<Form to={"officerPosts/"+ this.state.orgID +"/"+this.state.badge} method="POST" >
			    			<label className="badgeLabel"> 
			    				<input className="badgeInput" type="text" placeholder="enter badge" value={this.state.badge} name="badge" onChange={this.handleChange.bind(this)} />
			    			</label>
			    			<br/>
			    			<label>
					    			<select className="orgInput" name ="orgID" onChange={this.handleSelect.bind(this)}>
					    				<option value="1">Toronto Police Service</option>
					    				<option value="2">Peel Police</option>	    			
					    			</select>
				    		</label>
			    			<br/>
			    		<button className="badgeButton" type="submit">Search</button>
			    		</Form>
	    		</div>



	    		<div className="homeContent col-xs-12 col-sm-6 col-md-6 col-lg-6">
	    		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas elementum bibendum imperdiet. Proin suscipit dapibus tellus quis sodales. Cras sagittis pharetra lorem. Pellentesque porttitor ipsum ac purus vulputate, ut lobortis leo ultrices. Sed vestibulum dignissim ante. Mauris eget rutrum arcu, at posuere tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer euismod turpis orci, quis maximus mauris facilisis nec. Nulla ac consequat nunc. Suspendisse gravida dolor lacinia diam tincidunt eleifend. Cras mauris enim, laoreet.</p>
	    		</div>
	    
    		</div>


   		 </div>

    	) ;
  }
}
