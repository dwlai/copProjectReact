import React from 'react';
import $ from 'jquery';
export default class OfficerPost extends React.Component 
{
	constructor(){
		super();
		this.state = {

			optionalFields:"optionalFields"
		}


	}

	handleChange(){
		
		var state = this.state;

		if(state.optionalFields == "optionalFields"){
			state.optionalFields = "optionalFields active"
		}
		else
			state.optionalFields = "optionalFields"

		this.setState(state);
	}



  render() {
  	console.log(this);

	return (
			<div>
				<div className="postPage container-fluid">
					<div className="officerSection col-xs-12 col-sm-6 col-md-6 col-lg-6">
					<p className="policeService">Toronto Police Service</p>
					<p className="badge">11098</p>
					<p className="rank">Police Constable</p>
					<p className="officerName">Zachary Lobsinger</p>
					<img className="serviceImage" src="./assets/img/tps.png" />
				</div>


				<div className="postSection col-xs-12 col-sm-6 col-md-6 col-lg-6">
					<form>
						<label>
							FirstName:
							<input name="posterFirstName" type="text" />
						</label>
						<label>
							Report Number:
							<input name="reportNumber" type="text"/>
						</label>
						<label> Would you like to hear back from the officer?
							<input type="checkbox" onChange={this.handleChange.bind(this)} />
						</label>
						<div className={this.state.optionalFields}>
							<label>
								Last Name:
								<input name="posterLastName" type="text" />
							</label>
							<label>
								Email:
								<input name="email" type="text" />
							</label>
						</div>
						<label>
							Post Message:
							<input name="postMessage" type="text"/>
						</label>
						<br/>
						<button>Submit</button>
						
					
					</form>
				</div>
					
			</div>

		</div>




		);
  }
}
