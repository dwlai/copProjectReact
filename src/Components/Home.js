import React from 'react';
import {Link} from "react-router";
import $ from 'jquery';
import Form from 'react-router-form'

export default class MyComponent extends React.Component
{

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
	    		<Form to={"contact"}>
	    			<textarea name="badge" />
	    		<button type="submit">Go</button>
	    		</Form>
	    		</div>
    		</div>


   		 </div>

    	) ;
  }
}
