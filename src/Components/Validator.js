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



}