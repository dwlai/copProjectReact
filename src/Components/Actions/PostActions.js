import dispatcher from "../Dispatcher";
import axios from "axios";

export function createPost(posterFirstName, reportNumber, posterLastName, email, postMessage, userId){
	dispatcher.dispatch({
	type: "CREATE_POST",
	posterFirstName : posterFirstName,
	reportNumber : reportNumber,
	posterLastName : posterLastName,
	email: email,
	postMessage: postMessage,
	userId: userId
});
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