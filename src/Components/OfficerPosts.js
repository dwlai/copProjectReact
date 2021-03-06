import React from 'react';
import Post from './Post';
import OfficerStore from "./Stores/OfficerStore";
import * as OfficerActions from "./Actions/OfficerActions";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Validator from './Validator';

export default class OfficerPost extends React.Component 
{
	constructor(){
		
		super();

		this.getOfficer = this.getOfficer.bind(this);
		this.state = {

			posterFirstName:"",
			reportNumber:"",
			posterLastName:"",
			email:"",
			postMessage:"",
			optionalFields:"optionalFields",
			posts : [],
			officer : {
						FirstName:"",
						LastName:"",
						Unit:"",
						Badge:"",
						Posts:[]
					}
		}

	}

	componentWillMount(){

			
			OfficerStore.on("changeOfficer", this.getOfficer);
		
			OfficerActions.load(this.props.params.orgID, this.props.params.badge);

	}

	componentWillUnmount(){
		

		OfficerStore.removeListener("changeOfficer", this.getOfficer);
	}


	getOfficer(){
			var state = this.state;
			state.officer = OfficerStore.getOfficer();
			this.setState(state);
	}

	handleChange(){
		
		var state = this.state;

		if(state.optionalFields == "optionalFields"){
			state.optionalFields = "optionalFields active";
		}
		else{
			state.optionalFields = "optionalFields";
			state.posterLastName = "";
			state.email="";
		}

		this.setState(state);
	}

	handleFormChange(event){
		

		var state = this.state;
		var value = event.target.value;
		switch(event.target.name){
			case "posterFirstName":
				state.posterFirstName = value;
				break;
			case "reportNumber":
				state.reportNumber = value;
				break;
			case "posterLastName":
				state.posterLastName = value;
				break;
			case "email":
				state.email = value;
				break;
			case "postMessage":
				state.postMessage = value;
			}

		this.setState(state);

	}
	
	printMsg(msg){
		alert(msg);
	}

	createPost(event){

		var s = this.state;
	 	
	 	var userId = s.officer.UserID;

		event.preventDefault();

		var validator = new Validator();

		var validationResults = new Array();

		validationResults.push(validator.isRequired(s.posterFirstName, this.printMsg,"Enter a name"));
		validationResults.push(validator.isRequired(s.reportNumber, this.printMsg, "Enter a reportNumber"));
		validationResults.push(validator.isRequired(s.postMessage, this.printMsg,"Enter a message"));

		for(var i=0; i < validationResults.length ; i++)
		{
			if(!validationResults[i])
				return;
		}
			
		OfficerActions.createPost(s.posterFirstName, s.reportNumber, s.posterLastName, s.email, s.postMessage, userId, this.props.params.badge, this.props.params.orgID);
		s.posterFirstName = "";//resets form after submission
		s.reportNumber = "";
		s.postMessage = "";
		this.setState(s);
		
	}
	

  render() {
	
 	var officer = this.state.officer;
 	var postResults = officer.Posts;

 	postResults.sort(function(a,b){
 		 var dateA=a.Date.toLowerCase(), dateB=b.Date.toLowerCase()
    if (dateA > dateB) //sort string descending
        return -1 
    if (dateA < dateB)
        return 1
    return 0 //default return value (no sorting)
 	});

 	for (var i = 0; i < postResults.length; i++)//formatting date
 	{
 		postResults[i].Date = postResults[i].Date.slice(0, 19).replace('T', ' ');
 	}

	const PostComponents = postResults.map((p)=>{
	  		return <Post key={p.PostID}{...p}/>;
	  	});//creates post components for rendering

	return (
			
				<div className="postPage container-fluid">
				
				<div className="officerSectionContainer col-xs-12 col-sm-6 col-md-6 col-lg-6"> 
					<div className="officerSection ">
						<p className="officerTitle">{officer.OfficerRank} #{officer.Badge}</p>
						<p className="officerName">{""+ officer.FirstName + " " + officer.LastName}</p>
						{/*<p className="officerEmail">{officer.email}</p>*/}
						<p className="policeService">Toronto Police Service</p>
						<p className="unit">{officer.Unit}</p>
						<img className="serviceImage" src="./assets/img/tps.png" />
					</div>
				</div>


				<div className="postSection col-xs-12 col-sm-6 col-md-6 col-lg-6">
					<div className ="postForm">
						<form id="usrform" method="POST">
							<label>
								<span>Name:<br/></span>
								<input name="posterFirstName" type="text" onChange={this.handleFormChange.bind(this)} value={this.state.posterFirstName} />
							</label>
							<br/>
							<label>
								<span>Report Number:<br/></span>
								<input name="reportNumber" type="text" onChange={this.handleFormChange.bind(this)} value={this.state.reportNumber}/>
							</label>
							<label style={{"display":"none"}}> Would you like to hear back from the officer?
								<input type="checkbox" onChange={this.handleChange.bind(this)} />
							</label>
							<br/>
							<div className={this.state.optionalFields}>
								<label>
									Last Name:
									<input name="posterLastName" type="text" onChange={this.handleFormChange.bind(this)} value={this.state.posterLastName}/>
								</label>
								<label>
									Email:
									<input name="email" type="text" onChange={this.handleFormChange.bind(this)} value={this.state.email}/>
								</label>
								<br/>
							</div>
							<label>
								Post Message:<br/>
							</label>
								<textarea wrap="on" className="messageBox" name="postMessage" form="usrform" onChange={this.handleFormChange.bind(this)} value={this.state.postMessage} />
							<br/>
							<button onClick={this.createPost.bind(this)}>Submit</button>
						</form>

							

					</div>	
						<ReactCSSTransitionGroup transitionName={"fade"} transitionEnterTimeout={1000} transitionLeaveTimeout={1000}>
						 	{PostComponents}
						</ReactCSSTransitionGroup>
				</div>
					
			</div>

		);
  }
}
