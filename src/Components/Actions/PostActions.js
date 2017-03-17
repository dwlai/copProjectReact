import dispatcher from "../Dispatcher";
import axios from "axios";

export function createPost(posterFirstName, reportNumber, posterLastName, email, postMessage, userId){

	var uri =  "http://copprojectapi20170314101222.azurewebsites.net/api/Posts";
	var date = new Date().toISOString().slice(0, 19).replace('T', ' ');
	var data = {

			'PosterFirstName' : posterFirstName,
			'ReportNumber' : reportNumber,
			'PosterLastName' : posterLastName,
			'Email': email,
			'PostMessage': postMessage,
			'UserId': userId,
			'Date' : date
			};

	const config = { headers: { 
					'Content-Type': 'application/json',
					 'Accept' : 'application/json'} }
	

	axios.post(uri, data, config )
			.then( ()=> {
				dispatcher.dispatch({
						type: "FETCH_POST_DATA",
				});
			});
			/*.catch( (error) =>{
				console.log(error);
			});*/

}


export function load(orgID, badge){

	var uri = "http://copprojectapi20170314101222.azurewebsites.net/api/Posts/"+ orgID+ "/"+ badge;

	axios(uri).then((data)=>{
	
		dispatcher.dispatch({

			type: "FETCH_POST_DATA",
			data: data.data

		});
	});
}