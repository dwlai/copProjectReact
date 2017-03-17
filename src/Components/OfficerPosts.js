import React from 'react';
import Post from './Post';
import PostStore from "./Stores/PostStore";
import OfficerStore from "./Stores/OfficerStore";
import * as PostActions from "./Actions/PostActions";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';



export default class OfficerPost extends React.Component 
{
	constructor(){
		
		super();
		this.state = {

			posterFirstName:"",
			reportNumber:"",
			posterLastName:"",
			email:"",
			postMessage:"",
			optionalFields:"optionalFields",
			posts : PostStore.getPosts()
		}

	}

	componentWillMount(){

			PostStore.on("change", () =>{
				console.log("hello");
				var state = this.state;
				state.posts = PostStore.getPosts();
				this.setState(state);
			});

			PostActions.load();

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
	

	createPost(event){

		var badge = this.props.params.badge;/******Dont like this but can change once api is in*********/
	 	var orgId = this.props.params.orgID;


	 	var officer = OfficerStore.getOfficers().filter(function(obj){
		  				return obj.badge == badge && obj.orgId == orgId;
		  	})[0];


	 	var userId = officer.userId;/*************************************************/

		event.preventDefault();
		var s = this.state;
		PostActions.createPost(s.posterFirstName, s.reportNumber, s.posterLastName, s.email, s.postMessage, userId);
		s.posterFirstName = "";//resets form after submission
		s.reportNumber = "";
		s.postMessage = "";
		this.setState(s);
	}

  render() {
	

	var badge = this.props.params.badge;
 	var orgId = this.props.params.orgID

 	var officer = OfficerStore.getOfficers().filter(function(obj){
	  				return obj.badge == badge && obj.orgId == orgId;
	  	})[0];//finds officer based on params provided


 	var userId = officer.userId;

 	var postResults = this.state.posts.filter(function(obj){
	  				return obj.UserId == userId;
	  	}); //gets posts for officer

 	console.log(postResults);

 	postResults.sort(function(a,b){
 		 var dateA=a.Date.toLowerCase(), dateB=b.Date.toLowerCase()
    if (dateA > dateB) //sort string descending
        return -1 
    if (dateA < dateB)
        return 1
    return 0 //default return value (no sorting)
 	});

	const PostComponents = postResults.map((p)=>{
	  		return <Post key={p.PostID}{...p}/>;
	  	});//creates post components for rendering

	return (
			
				<div className="postPage container-fluid">
					<div className="officerSection col-xs-12 col-sm-6 col-md-6 col-lg-6">
					
					<p className="officerTitle">{officer.officerRank} #{officer.badge}</p>
					<p className="officerName">{""+ officer.firstName + " " + officer.lastName}</p>
					{/*<p className="officerEmail">{officer.email}</p>*/}
					<p className="policeService">Toronto Police Service</p>
					<p className="unit">{officer.unit}</p>
					<img className="serviceImage" src="./assets/img/tps.png" />
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
