import axios from 'axios';

export default class Validator{


	isRequired(input, printMsg, error){

		if(input.trim()==""){
			printMsg(error);
			return false;
		}
		else
			return true;
	}

	isNumber(input, printMsg, error){

		if(!/^\d+$/.test(input)){
			printMsg(error);
			return false;
		}
		else
			return true;

	}

	userExists(badge, orgID, printMsg, error, callback){

	if(/^\d+$/.test(badge)){//makes sure its a number to pass to server
			var uri = "http://thosewhoprotectapi20170323102141.azurewebsites.net/api/Users/" + orgID + "/"+ badge;
    		
    		axios(uri).then((data)=>{		/////search for officer in DB
    
    		if(data.data == null){
    			printMsg(error);
    			callback(false);
    		}
    		else 
    			callback(true);
    		})
    		.catch((error)=>{
    			console.log(error);
    		});

    	}
    else
    	return callback(false);


	}



}