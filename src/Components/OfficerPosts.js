import React from 'react';
import Post from './Post';
import PostStore from "./Stores/PostStore";
import OfficerStore from "./Stores/OfficerStore";
import * as PostActions from "./Actions/PostActions";

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
			officers: OfficerStore.getOfficers(),
			posts : PostStore.getPosts()
		}

	}

	componentWillMount(){

			PostStore.on("change", () =>{
				var state = this.state;
				state.posts = PostStore.getPosts();
				this.setState(state);
			});

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
		event.preventDefault();
		PostActions.createPost();
	}

  render() {
	

	var badge = this.props.params.badge;
 	var orgId = this.props.params.orgID

 	var officer = this.state.officers.filter(function(obj){
	  				return obj.badge == badge && obj.orgId == orgId;
	  	})[0];


 	var userId = officer.userId;

 	var postResults = this.state.posts.filter(function(obj){
	  				return obj.userId == userId;
	  	});

	const PostComponents = postResults.map((p)=>{
	  		return <Post key={p.postId}{...p}/>;
	  	});

	return (
			
				<div className="postPage container-fluid">
					<div className="officerSection col-xs-12 col-sm-6 col-md-6 col-lg-6">
					<p className="policeService">Toronto Police Service</p>
					<p className="badge">{officer.badge}</p>
					<p className="rank">{officer.officerRank}</p>
					<p className="officerName">{""+ officer.firstName + " " + officer.lastName}</p>
					<img className="serviceImage" src="./assets/img/tps.png" />
				</div>


				<div className="postSection col-xs-12 col-sm-6 col-md-6 col-lg-6">
					<form method="POST">
						<label>
							FirstName:
							<input name="posterFirstName" type="text" onChange={this.handleFormChange.bind(this)} value={this.state.posterFirstName} />
						</label>
						<label>
							Report Number:
							<input name="reportNumber" type="text" onChange={this.handleFormChange.bind(this)} value={this.state.reportNumber}/>
						</label>
						<label> Would you like to hear back from the officer?
							<input type="checkbox" onChange={this.handleChange.bind(this)} />
						</label>
						<div className={this.state.optionalFields}>
							<label>
								Last Name:
								<input name="posterLastName" type="text" onChange={this.handleFormChange.bind(this)} value={this.state.posterLastName}/>
							</label>
							<label>
								Email:
								<input name="email" type="text" onChange={this.handleFormChange.bind(this)} value={this.state.email}/>
							</label>
						</div>
						<label>
							Post Message:
							<input name="postMessage" type="text" onChange={this.handleFormChange.bind(this)} value={this.state.postMessage}/>
						</label>
						<br/>
						<button onClick={this.createPost.bind(this)}>Submit</button>
					</form>
					{PostComponents}
				</div>
					
			</div>

		);
  }
}
