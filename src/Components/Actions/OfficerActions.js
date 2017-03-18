import dispatcher from "../Dispatcher"
import axios from "axios";

export function load(orgID, badge)
{
	var uri = "http://copprojectapi20170314101222.azurewebsites.net/api/Users/" + orgID + "/"+ badge;

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