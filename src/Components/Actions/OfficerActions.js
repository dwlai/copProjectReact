import dispatcher from "../Dispatcher"
import axios from "axios";

export function load(orgID, badge)
{
	var uri = "http://thosewhoprotectapi20170323102141.azurewebsites.net/api/Users/" + orgID + "/"+ badge;

	axios(uri).then((data)=>{

		dispatcher.dispatch({

			type:"FETCH_OFFICER_DATA",
			data: data.data
		});

	})
	.catch( (error) =>{
				console.log("error");
	});
}

export function createPost(posterFirstName, reportNumber, posterLastName, email, postMessage, userId, badge, orgID){

	var uri =  "http://thosewhoprotectapi20170323102141.azurewebsites.net/api/Posts";
	var date = new Date();
	var data = {

			'PosterFirstName' : posterFirstName,
			'ReportNumber' : reportNumber,
			'PosterLastName' : "NULL",
			'Email': "NULL",
			'PostMessage': postMessage,
			'UserId': userId,
			'Date' : date
			};

	const config = { headers: { 
					'Content-Type': 'application/json',
					 'Accept' : 'application/json'} }

	axios.post(uri, data, config )
			.then( ()=> {
						var uri2 = "http://thosewhoprotectapi20170323102141.azurewebsites.net/api/Users/" + orgID + "/"+ badge;
						axios(uri2).then((data)=>{
							
								dispatcher.dispatch({

									type: "FETCH_OFFICER_DATA",
									data: data.data

								});
						});

			})
			.catch( (error) =>{
				console.log(error);
			});

}